import { Component, OnInit } from '@angular/core';
import {CartService} from '../../cart/cart.service';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  itemCount = 0;
  constructor(
    private cartService: CartService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.cartService.getItemCount().subscribe(
      count => this.itemCount = count
    );

    this.userService.isLogged().subscribe(
      response => {
        this.isLoggedIn = response;
      }
    )
  }

  openDropdown(toggleOpen: Event) {

  }

  logout() {
    this.userService.logout();
    console.log(this.isLoggedIn);
    this.router.navigate(['/login']);
  }
}
