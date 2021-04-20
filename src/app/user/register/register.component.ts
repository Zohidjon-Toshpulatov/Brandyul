import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EmailValidator, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  registerForm: FormGroup;

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
        username: [null, Validators.required],
        email: [null, Validators.required],
        address: [null, Validators.required],
        password: [null, Validators.required],
      }
    );
  }

  ngOnInit(): void {

  }

  navigate() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    this.userService.createUser(this.registerForm.value).subscribe(
      () => {
        this.router.navigate(['/login']);
      }
    );
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get address() {
    return this.registerForm.get('address');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
