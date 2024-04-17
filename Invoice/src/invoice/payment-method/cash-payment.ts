import { InterfacePaymentMethod } from '../interfaces/interfacePaymentMethod.interface';

export class CashPayment implements InterfacePaymentMethod {
  iva: number = 0.16;
  getTotal(total: number): number {
    return total + total * this.iva;
  }
}
