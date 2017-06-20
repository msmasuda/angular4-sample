import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { User, Comment } from '../class/chat';

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'チャットサンプル';
  items: FirebaseListObservable<any[]>;
  errorMessage: string;
  public content = '';
  public current_user: User;

  constructor(private _router: Router, public db: AngularFireDatabase) {
    const user = firebase.auth().currentUser;
    if(user) {
      this.current_user = new User(
        user.uid,
        user.displayName,
        user.email,
        user.photoURL
      )
    } else {
      this._router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.items = this.db.list('/items');
  }

  save(comment: string) {
    if(comment) {
      this.items.push(
        new Comment(this.current_user, comment)
      );
      this.content = '';
    }
  }

  update(key: string, comment: string) {
    if(comment) {
      this.items.update(
        key,
        { comment: comment }
      );
      this.content = '';
    }
  }

  delete(key: string) {
    this.items.remove(key);
  }

  logout() {
    firebase.auth().signOut()
    .then(() => {
      this._router.navigate(['login']);
    })
    .catch((error) => {
      this.errorMessage = error.message;
    });
  }

}
