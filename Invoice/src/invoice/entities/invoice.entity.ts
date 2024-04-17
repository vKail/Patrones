import { Customer } from 'src/customer/entities/customer.entity';
import { InvoiceDetail } from 'src/invoice-detail/entities/invoice-detail.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('invoice')
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => Customer, (customer) => customer.invoices)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @OneToMany(() => InvoiceDetail, (invoiceDetail) => invoiceDetail.invoice)
  details: InvoiceDetail[];

  @BeforeInsert()
  setDate() {
    this.date = new Date();
  }
}
