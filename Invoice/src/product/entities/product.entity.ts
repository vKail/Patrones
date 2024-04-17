import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { InvoiceDetail } from 'src/invoice-detail/entities/invoice-detail.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  name: string;

  @Column({ name: 'unit_price' })
  unitPrice: string;

  @Column()
  stock: number;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @ManyToOne(() => InvoiceDetail, (invoiceDetail) => invoiceDetail.product)
  invoiceDetail: number;
}
