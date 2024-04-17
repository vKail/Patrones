import { InterfacePaymentMethod } from '../interfaces/interfacePaymentMethod.interface';

export class DebitPayment implements InterfacePaymentMethod {
  iva: number = 0.1;
  getTotal(total: number): number {
    return total + total * this.iva;
  }
}
