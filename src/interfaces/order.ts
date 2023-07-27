import { IAddress, IUser } from "./";
import { ICategory } from '../database/seedData';

export interface IOrder {
  _id?              : string;
  orderItems        : IOrderItem[];
  paymentMethod?    : string;
  shippingAddress?  : IAddress;
  subtotal          : number;
  tax               : number;
  total             : number;
  totalNumberOfItems: number;
  isPaid            : boolean;
  paidAt?           : string;
  user?             : IUser | string;
  transactionId?    : string;
  createdAt?        : string;
  updatedAt?        : string;
}

export interface IOrderItem {
  _id     : string;
  image   : string;
  price   : number;
  quantity: number;
  slug    : string;
  title   : string;
  category: ICategory; 
}
