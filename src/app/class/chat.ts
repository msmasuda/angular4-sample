import * as moment from 'moment';

export class User {
  uid: string;
  name: string;
  email: string;
  photoUrl: string

  constructor(uid: string, name: string, email: string, photoUrl: string) {
    this.uid = uid;
    this.name = name;
    this.email = email;
    this.photoUrl = photoUrl;
  }
}

export class Comment {
  user: User;
  initial: string;
  content: string;
  date: number;

  constructor(user: User, content: string) {
    this.user = user;
    this.initial = user.email.slice(0, 1);
    this.content = content;
    this.date = +moment();
  }
}
