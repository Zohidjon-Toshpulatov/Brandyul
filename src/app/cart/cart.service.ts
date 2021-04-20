import { Injectable } from '@angular/core';
import {Product} from '../product/product.model';
import {BehaviorSubject} from 'rxjs';
import {PurchaseModel} from './purchase.model';
import {PurchasedProductModel} from './purchased-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public purchase: PurchaseModel;
  private _itemCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private totalCount = 0;


  constructor() {
    this.purchase = {
      token: "",
      delivery_address: "",
      products: []
    };
  }

  addToCart(product: Product){
    // @ts-ignore
    if (this.purchase.products.length > 0){
      let purchaseProduct = this.purchase.products.find(item => product.id == item.product.id);
      if (purchaseProduct) {
        let index = this.purchase.products.indexOf(purchaseProduct);
        this.purchase.products[index].count += 1;
      }else {
        let purchaseModel: PurchasedProductModel = {
          product: product,
          count: 1
        }
        this.purchase.products.push(purchaseModel);
      }
    }else{
      let purchaseModel: PurchasedProductModel = {
        product: product,
        count: 1
      }
      this.purchase.products.push(purchaseModel);
    }
    this.totalCount++;
    this.itemCount = this.totalCount;
  }

  getItems() {
    return this.purchase.products;
  }

  clearCart(){
    this.purchase = {
      token: "",
      delivery_address: "",
      products: []
    };
  }

  removeItem(id:number){
    const item = this.purchase.products.find(item => item.product.id == id);
    if (item) {
      this.totalCount -= item.count;
      this.itemCount = this.totalCount;
      const index = this.purchase.products.indexOf(item);
      this.purchase.products.splice(index, 1);
    }
  }

  set itemCount(count: number) {
    this._itemCount.next(count);
  }

  getItemCount(){
    return this._itemCount.asObservable();
  }
}
