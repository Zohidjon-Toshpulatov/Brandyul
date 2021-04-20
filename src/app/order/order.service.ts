import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const apiUrl = environment.apiUrl + '/purchase'

@Injectable({
  providedIn: 'root',
})
export class OrderService{
  constructor(private http: HttpClient) {
  }

  createOrder(request: any){
    return this.http.post(apiUrl,request);
  }
}
