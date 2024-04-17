import { Invoice } from 'src/invoice/entities/invoice.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoice_detail')
export class InvoiceDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_name' })
  product: string;

  @Column()
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @ManyToOne(() => Invoice, (invoice) => invoice.details)
  invoice: number;
}
