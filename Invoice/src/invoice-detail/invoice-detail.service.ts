import { Injectable } from '@nestjs/common';
import { CreateInvoiceDetailDto } from './dto/create-invoice-detail.dto';
import { UpdateInvoiceDetailDto } from './dto/update-invoice-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvoiceDetail } from './entities/invoice-detail.entity';

@Injectable()
export class InvoiceDetailService {
  constructor(
    @InjectRepository(InvoiceDetail)
    private invoiceDetailRepository: Repository<InvoiceDetail>,
  ) {}

  create(createInvoiceDetailDto: CreateInvoiceDetailDto) {
    const newInvoiceDetail = this.invoiceDetailRepository.create({
      product: createInvoiceDetailDto.product,
      quantity: createInvoiceDetailDto.quantity,
      price: createInvoiceDetailDto.price,
      isActive: createInvoiceDetailDto.isActive,
      invoice: createInvoiceDetailDto.invoice,
    });
    return this.invoiceDetailRepository.save(newInvoiceDetail);
  }

  async findAll() {
    const queryBuilder = this.invoiceDetailRepository
      .createQueryBuilder('invoice_detail')
      .leftJoinAndSelect('invoice_detail.invoice', 'invoice');

    return await queryBuilder.getMany();
  }

  async findOne(id: number) {
    const queryBuilder = this.invoiceDetailRepository
      .createQueryBuilder('invoice_detail')
      .leftJoinAndSelect('invoice_detail.invoice', 'invoice')
      .where('invoice_detail.id = :id', { id });
    return await queryBuilder.getOne();
  }

  async update(id: number, updateInvoiceDetailDto: UpdateInvoiceDetailDto) {
    await this.invoiceDetailRepository.update(id, {
      product: updateInvoiceDetailDto.product,
      quantity: updateInvoiceDetailDto.quantity,
      price: updateInvoiceDetailDto.price,
      isActive: updateInvoiceDetailDto.isActive,
      invoice: updateInvoiceDetailDto.invoice,
    });

    return this.findOne(id);
  }

  async remove(id: number) {
    const InvoiceDetail = await this.invoiceDetailRepository.findOneBy({ id });
    if (!InvoiceDetail) {
      throw new Error('InvoiceDetail not found');
    }
    InvoiceDetail.isActive = false;
    return this.invoiceDetailRepository.save(InvoiceDetail);
  }
}
