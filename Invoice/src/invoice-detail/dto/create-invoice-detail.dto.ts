import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInvoiceDetailDto {
  @IsString()
  @IsNotEmpty()
  product: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsNumber()
  @IsNotEmpty()
  invoice: number;
}
