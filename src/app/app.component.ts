import { Component } from '@angular/core';
import { Comment, User } from './class/chat';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

const CURRENT_USER: User = new User(1, 'Shinichi Masuda');
const ANOTHER_USER: User = new User(2, 'Taro Yamada');
const COMMENTS: Comment[] = [
    new Comment(ANOTHER_USER, 'Yamadaの１つ目のコメントです。'),
    new Comment(ANOTHER_USER, 'Yamadaの２つ目のコメントです。'),
    new Comment(CURRENT_USER, 'Masudaの１つ目のコメントです。'),
    new Comment(ANOTHER_USER, 'Yamadaの３つ目のコメントです。'),
    new Comment(CURRENT_USER, 'Masudaの２つ目のコメントです。')
  ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular4 Sample';
  items: FirebaseListObservable<any[]>;
  public content = '';
  public comments = COMMENTS;
  public current_user = CURRENT_USER;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
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
