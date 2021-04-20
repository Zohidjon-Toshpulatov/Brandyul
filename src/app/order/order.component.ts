import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CartService} from '../cart/cart.service';
import {OrderService} from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  addressForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService
  ) {
    this.addressForm = this.fb.group({
      'delivery_address': ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    let products = this.cartService.getItems().map(item => {
      return {id: item.product.id, count: item.count}
    });
    let order = {delivery_address: this.addressForm.value.delivery_address, token: localStorage.getItem('userToken'),products: products}
    this.orderService.createOrder(order).subscribe(response => {
      alert('Thank you for you order!');
      console.log(response);
      this.router.navigate(['/products']);
    });
  }

  onCancel(){
    this.router.navigate(['/products'])
  }
}
