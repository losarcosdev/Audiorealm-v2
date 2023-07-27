export interface IStoreStatisticsResponse {
  numberOfClients: number;
  numberOfOrders: number;
  numberOfProducts: number;
  paidOrders: number;
  productsWithLowStock: number;
  productsWithNoStock: number;
  unpaidOrders: number;
}
