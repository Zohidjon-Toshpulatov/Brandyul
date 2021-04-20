import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user.model';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  loginForm: FormGroup;
  isLogin = false;
  error: string | undefined;
  // @ts-ignore
  loggedUser: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      });
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  OnSubmit() {
    this.userService.login(this.loginForm.value).subscribe(
      (user: any) => {
        console.log(user);
        localStorage.setItem('userToken', user.token);
        localStorage.setItem('username', user.email);
        this.router.navigate(['/products']);
      }
    )
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
