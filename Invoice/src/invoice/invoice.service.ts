import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) { }

  async create(createInvoiceDto: CreateInvoiceDto) {
    const newInvoice = this.invoiceRepository.create({
      customer: createInvoiceDto.customerId,
      isActive: createInvoiceDto.isActive,
    } as DeepPartial<Invoice>);
    return await this.invoiceRepository.save(newInvoice);
  }

  async findAll() {
    const queryBuilder = this.invoiceRepository
      .createQueryBuilder('invoice')
      .leftJoinAndSelect('invoice.customer', 'customer');
    return await queryBuilder.getMany();
  }

  async findOne(id: number) {
    const queryBuilder = this.invoiceRepository
      .createQueryBuilder('invoice')
      .leftJoinAndSelect('invoice.customer', 'customer')
      .where('invoice.id = :id', { id });

    return await queryBuilder.getOne();
  }

  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    await this.invoiceRepository.update(id, {
      customer: updateInvoiceDto.customerId,
      isActive: updateInvoiceDto.isActive,
    } as DeepPartial<Invoice>);
    return await this.findOne(id);
  }

  async remove(id: number) {
    const invoice = await this.findOne(id);
    if (!invoice) {
      throw new Error('Invoice not found');
    }
    invoice.isActive = false;
    return await this.invoiceRepository.save(invoice);
  }
}
