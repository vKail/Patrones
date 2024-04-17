import { Invoice } from 'src/invoice/entities/invoice.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({
    unique: true,
    length: 10,
  })
  dni: string;

  @Column({
    name: 'is_active',
    default: true,
  })
  isActive: boolean;

  @OneToMany(() => Invoice, (invoice) => invoice.customer)
  @JoinColumn({ name: 'invoice_id' })
  invoices: [];
}
