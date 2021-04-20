import {PurchasedProductModel} from './purchased-product.model';

export class PurchaseModel{
  constructor(public token: string, public delivery_address: string, public products: PurchasedProductModel[]) {
  }
}
