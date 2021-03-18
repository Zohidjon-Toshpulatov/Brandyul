import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  // @ts-ignore
  product: Product | any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const proId = +this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(proId);
    this.route.params.subscribe(
      (params: Params) => {
        this.product =this.productService.getProduct(+params['id']);
      }
    )
  }

}
