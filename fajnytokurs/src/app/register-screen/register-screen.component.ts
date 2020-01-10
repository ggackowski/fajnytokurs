import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {


  email: string;
  pass1: string;
  pass2: string;
  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (this.pass1 === this.pass2) {
      this.authService.register({email: this.email,password: this.pass1});
      this.router.navigate(['/']);
  }
  else {
    alert("Błąd\nHasła nie są takie same");
  }
  }

  ngOnInit() {
  }

}
