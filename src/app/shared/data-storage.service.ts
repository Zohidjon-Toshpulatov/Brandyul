import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../product/product.model';
import {ProductService} from '../product/product.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private productService: ProductService) { }


  fetchProducts(){
    return this.http.get<Product[]>(
      'http://127.0.0.1:8000/products/',
    ).pipe(tap(
      products => {
        this.productService.setProducts(products);
        console.log(products);
      }
    ));
  }
}
