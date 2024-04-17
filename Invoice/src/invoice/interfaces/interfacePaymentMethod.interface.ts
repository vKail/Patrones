export interface InterfacePaymentMethod {
  iva: number;
  getTotal(total: number): number;
}
