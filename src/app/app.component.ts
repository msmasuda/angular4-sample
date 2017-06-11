import { Component } from '@angular/core';
import { Comment, User } from './class/chat';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import $ from 'jquery/dist/jquery';

const CURRENT_USER: User = new User(1, 'Shinichi Masuda');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'チャットサンプル';
  items: FirebaseListObservable<any[]>;
  public content = '';
  public current_user = CURRENT_USER;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
    $('#exampleModal').on('shown.bs.modal', () => {
      $('#recipient-name').focus()
    });
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
