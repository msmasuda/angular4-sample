import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../class/chat';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  isCreate: boolean;
  title = 'ログイン';

  constructor(private _router: Router) {}

  ngOnInit() {
    this.user = new User('', '', '', '');
    this.isCreate = false;
  }

  onSubmit() {
    if(this.isCreate) {
      this.create();
    } else {
      this.login();
    }
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
    .then((user) => {
      console.log(user);
      this._router.navigate(['/']);
    })
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  create() {
    firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then((user) => {
      console.log(user);
      this._router.navigate(['/']);
    })
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  goCreate() {
    this.isCreate = true;
  }

  reset() {
    this.isCreate = false;
  }

}
