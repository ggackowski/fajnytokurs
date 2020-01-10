import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  userId
  admins
  constructor(private authService: AuthService,private router: Router) {
    this.userId = this.authService.user.uid;
    this.admins = environment.admins;
    console.log(this.userId);
   }

  checkIfAdmin() {
    if (this.admins.includes(this.userId))
      return true;
    return false;
  }

  makeAdmin() {

    this.router.navigate(['/']);
  }
  ngOnInit() {
  }

}
