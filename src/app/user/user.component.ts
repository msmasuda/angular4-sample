import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { User } from '../class/chat';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  title = 'ユーザー登録';
  errorMessage: string;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.user = new User('', '', '', '');
  }

  onSubmit() {
    this.create();
  }

  create() {
    firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then((user) => {
      console.log(user);
      this._router.navigate(['/']);
    })
    .catch((error) => {
      this.errorMessage = error.message;
    });
  }

  reset() {
    this._router.navigate(['/login']);
  }

}
