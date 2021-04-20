import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from './user.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
const apiUrl = environment.apiUrl+'/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  users: User[] = [
    new User(
      'Zohidjon',
      'zohid99jon@gmail.com',
      '1 Chinobod Street',
      'AB0186883'
    ),
  ];

  constructor(private http: HttpClient) { }

  createUser(user: User){
    return this.http.post<User>(apiUrl+ '/sign-up/', user);
  }

  getUsers(){
    return this.users;
  }

  login(request: any){
    this.isLoggedIn = true;
    return this.http.post(apiUrl + '/sign-in/', request);
  }

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('userToken');
    this.isLoggedIn = false;
  }

  set isLoggedIn(isLoggedIn: boolean) {
    this._isLoggedIn.next(isLoggedIn);
  }

  isLogged() {
    return this._isLoggedIn.asObservable();
  }
}
