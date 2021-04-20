import { Injectable } from '@angular/core';
import {Product} from './product.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
const apiUrl = environment.apiUrl + '/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Polo T-shirt',
      'newly styled t-shirt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, at consequatur, deleniti deserunt earum eum explicabo fuga impedit laudantium maxime nesciunt non odio omnis perspiciatis quos repellat similique sint tempora totam voluptatem.Beatae doloremque ea eligendi, enim error fuga libero modi nam, officiis omnis optio pariatur porr totam veritatis voluptas.',
      23,
      'AVVA',
      'https://cdn.dsmcdn.com/ty5/product/media/images/20200628/21/3598953/75329303/1/1_org_zoom.jpg'
    ),
    new Product(
      2,
      'Polo T-shirt',
      'newly styled t-shirt',
      23,
      'AVVA',
      'https://cdn.dsmcdn.com/ty6/product/media/images/20200623/18/3415938/75010537/1/1_org_zoom.jpg'
    ),
    new Product(
      3,
      'Polo T-shirt',
      'newly styled t-shirt',
      23,
      'AVVA',
      'https://cdn.dsmcdn.com/ty5/product/media/images/20200628/21/3598953/75329303/1/1_org_zoom.jpg'
    ),
    new Product(
      4,
      'Polo T-shirt',
      'newly styled t-shirt',
      23,
      'AVVA',
      'https://cdn.dsmcdn.com/ty6/product/media/images/20200623/18/3415938/75010537/1/1_org_zoom.jpg'
    ),
    new Product(
      5,
      'Polo T-shirt',
      'newly styled t-shirt',
      23,
      'AVVA',
      'https://cdn.dsmcdn.com/ty5/product/media/images/20200628/21/3598953/75329303/1/1_org_zoom.jpg'
    ),
    new Product(
      6,
      'Polo T-shirt',
      'newly styled t-shirt',
      23,
      'AVVA',
      'https://cdn.dsmcdn.com/ty6/product/media/images/20200623/18/3415938/75010537/1/1_org_zoom.jpg'
    ),
    new Product(
      7,
      'Polo T-shirt',
      'newly styled t-shirt',
      23,
      'AVVA',
      'https://cdn.dsmcdn.com/ty6/product/media/images/20200623/18/3415938/75010537/1/1_org_zoom.jpg'
    ),
    new Product(
      8,
      'Polo T-shirt',
      'newly styled t-shirt',
      23,
      'AVVA',
      'https://cdn.dsmcdn.com/ty6/product/media/images/20200623/18/3415938/75010537/1/1_org_zoom.jpg'
    ),
    new Product(
      9,
      'Polo T-shirt',
      'newly styled t-shirt',
      23,
      'AVVA',
      'https://cdn.dsmcdn.com/ty6/product/media/images/20200623/18/3415938/75010537/1/1_org_zoom.jpg'
    ),
  ];


  constructor(private http: HttpClient) { }

  setProducts(products: Product[]) {
    this.products = products;
  }

  getProducts() {
    return this.http.get<Product[]>(apiUrl);
  }

  getProduct(selectedId: number) {
    return this.http.get<Product>(apiUrl+`/${selectedId}`);
  }
}
