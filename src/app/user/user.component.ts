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

  constructor(private _router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.create();
  }

  create() {
    firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then((user) => {
      console.log(user);
      this._router.navigate(['/']);
    })
    .catch(function(error) {
      var errorMessage = error.message;
    });
  }

  reset() {
    this._router.navigate(['/login']);
  }

}
