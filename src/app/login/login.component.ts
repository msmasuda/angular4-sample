import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  // selector: 'router-outlet',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  username: string;
  isCreate: boolean;
  title = 'ログイン';

  constructor() {}

  ngOnInit() {
    this.isCreate = false;
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then((user) => {
      console.log(user);
    })
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  create() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then((user) => {
      console.log(user);
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
