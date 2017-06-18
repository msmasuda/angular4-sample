import { Component, OnInit } from '@angular/core';

class User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  styles:[`
    .ng-valid.ng-dirty {
      border-left: 5px solid lightgreen;
    }
    .ng-invalid.ng-dirty {
      border-left: 5px solid lightpink;
    }
    .form-invalid { background-color: lightpink; }
    .form-valid { background-color: lightgreen; }
    form { padding: 10px;}
  `],
  template: `
<strong>Angular2のフォームで入力チェック、CSS設定</strong>
<form (ngSubmit)="onSubmit(userForm.value)" #userForm="ngForm" novalidate
  [ngClass]="userForm.form.valid ? 'form-valid' : 'form-invalid'">
<div class="well">
  <div class="form-group">
    <label>会員名（必須項目、半角英大文字、数値5～10文字）</label>
    <input type="text" class="form-control" required
      name="name" #v_name="ngModel"
      minlength="5" maxlength="10" pattern="[A-Z0-9]+" ngModel />
    <div *ngIf="v_name.dirty && v_name.errors">
      <span class="text-danger"
        [hidden]="!v_name.errors.required ">
        必須項目</span>
      <span class="text-danger"
        [hidden]="!v_name.errors.minlength ">
        最小文字数：5</span>
      <span class="text-danger"
        [hidden]="!v_name.errors.maxlength ">
        最大文字数：10</span>
      <span class="text-danger"
        [hidden]="!v_name.errors.pattern ">
        文字種：半角英大文字、数字</span>
    </div>
  </div>
  <div class="form-group">
    <label>メールアドレス（必須項目、メールフォーマットチェック）</label>
    <input type="email" class="form-control" required
      name="email" #v_email="ngModel"
      pattern="[A-Za-z0-9.\-]+@[A-Za-z0-9\-]+[.][A-Za-z0-9.\-]+" ngModel />
    <div *ngIf="v_email.dirty && v_email.errors">
      <span class="text-danger"
        [hidden]="!v_email.errors.required ">
        必須項目</span>
      <span class="text-danger"
        [hidden]="!v_email.errors.pattern ">
        メールフォーマットエラー</span>
    </div>
  </div>
  <div class="text-center">
    <button type="submit" class="btn btn-primary"
        [disabled]="!userForm.form.valid">登録</button>
  </div>
</div>
</form>

<div class="well" ng-if="master">
  <strong>入力内容</strong><br />
  {{master | json}}
</div>
  `
})
export class FormComponent implements OnInit {
  master: User;
  constructor() { }

  onSubmit(user){
    this.master = user;
  }

  ngOnInit() {
  }

}
