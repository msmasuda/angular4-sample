import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { User, Comment } from './class/chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'チャットサンプル';
  items: FirebaseListObservable<any[]>;
  public content = '';
  public current_user: User;
  authState: Observable<firebase.User>;
  private route: ActivatedRoute;
  private router: Router;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.authState = afAuth.authState;
    this.items = db.list('/items');
    if(!this.authState) {
      this.router.navigate(['/login']);
    } else {
      this.current_user = new User(
        '1',
        'masuda',
        'masuda@my-style.jp',
        ''
      )
    }
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
}
