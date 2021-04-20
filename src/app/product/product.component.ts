import {Component, Input, OnInit} from '@angular/core';
import {Product} from './product.model';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products
        console.log(products[0]);
      }
    );
  }

}
