import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceModule } from './invoice/invoice.module';
import { CustomerModule } from './customer/customer.module';
import { InvoiceDetailModule } from './invoice-detail/invoice-detail.module';
import { ProductModule } from './product/product.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'Store',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CustomerModule,
    InvoiceModule,
    InvoiceDetailModule,
    ProductModule,
    PaymentMethodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
