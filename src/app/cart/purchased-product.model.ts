import {Product} from '../product/product.model';

export class PurchasedProductModel{
  constructor(public product: Product, public count: number) {
  }
}
