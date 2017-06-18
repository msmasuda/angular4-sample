import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ChatDatePipe } from './pipe/chat-date.pipe';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { FormComponent } from './form/form.component';

firebase.initializeApp(environment.firebase);

const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormComponent },
  { path: '',
    redirectTo: '/chat',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ChatDatePipe,
    LoginComponent,
    ChatComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
