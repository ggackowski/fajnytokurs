import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  email: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) {

   }

  login() {
    this.authService.login({email: this.email, password: this.password}).then(u => {
      if (u) 
      this.router.navigate(['/']);
    })
  }

  ngOnInit() {
  }

}
