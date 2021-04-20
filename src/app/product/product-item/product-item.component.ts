import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../product.service';
import {CartService} from '../../cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  // @ts-ignore
  product: Product | any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    const proId = +this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(proId);
    this.route.params.subscribe(
      (params: Params) => {
        this.productService.getProduct(+params['id']).subscribe(
          (product: Product) => {
            this.product = product;
          }
        );
      }
    )
  }

  onAddingToCart() {
    this.cartService.addToCart(this.product);
    window.alert('Your selected product has been added to the cart');
  }
}
