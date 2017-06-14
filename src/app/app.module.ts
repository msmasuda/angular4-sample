import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ChatDatePipe } from './pipe/chat-date.pipe';
import { LoginComponent } from './login/login.component';

const appRoute: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  // { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ChatDatePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
