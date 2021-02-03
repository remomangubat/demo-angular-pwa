import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './service/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBydLR8q_GU3w_8dtcaCQ2YguQjoU6XHB8",
  authDomain: "angular-pwa-4bcb8.firebaseapp.com",
  projectId: "angular-pwa-4bcb8",
  storageBucket: "angular-pwa-4bcb8.appspot.com",
  messagingSenderId: "389981027214",
  appId: "1:389981027214:web:0b08693baae5130f6542df",
  measurementId: "G-HR27MPS7X4"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    BrowserModule,
    AngularFireMessagingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
