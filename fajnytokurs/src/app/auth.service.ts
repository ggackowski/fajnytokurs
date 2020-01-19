import { Injectable } from '@angular/core';
import { User } from 'firebase'
import { AngularFireAuth } from '@angular/fire/auth'
import {Observable, of} from 'rxjs'


export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) {

  }

  get user(): User | null {

    return this.fireAuth.auth.currentUser;
  }

  login({email, password}: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password).catch(e => alert(e));
  }

  register({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }
}
