import { Component, OnInit } from '@angular/core';
import {CartService} from './cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  shippingTotal = 0;
  totalCount = 0;


  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.items);
    this.shippingTotal = this.getTotalPrice()/50;
    this.cartService.getItemCount().subscribe(
      count => {
        this.totalCount = count;
      }
    )
  }

  getTotalPrice() {
    let allSpending = 0;
    if (this.items.length > 0) {
      for (let item of this.items){
        allSpending += (item.count * item.product.price);
      }
    }
    return allSpending;
  }

  deleteItem(id: number) {
     const response = confirm('Do you want to remove the item from card?');
     if (response == true) {
       this.cartService.removeItem(id);
     }
  }

  goToShopping() {
    this.router.navigate(['/products'])
  }

  order() {
    if(localStorage.getItem('userToken') || this.cartService.purchase.products.length > 0){
      this.router.navigate(['/order']);
    } else if(this.totalCount == 0){
      this.router.navigate(['/products']);
    } else {
      alert('Please login first');
      this.router.navigate(['/login']);
    }
  }
}
