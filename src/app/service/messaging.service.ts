import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject, Notification } from 'rxjs';
@Injectable()
export class MessagingService {

  key$ = new BehaviorSubject<string>(null);
  currentMessage = new BehaviorSubject(null);

  constructor(
    private angularFireMessaging: AngularFireMessaging,
    private http: HttpClient) {
  }
  
  requestPermission() {
      this.angularFireMessaging.requestToken
        .subscribe(
          (token) => {console.log(token);
                      this.key$.next(token);},
          (err) => {console.error('Unable to get permission to notify.', err);
        }
      );
  }


  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        typeof(payload);
        this.currentMessage.next(payload);
      });
  }
  
  makeNotificationFromServer(keyId: string){
    const URL = 'https://demo-push-server.herokuapp.com/send-notification?id=' + keyId;
    console.log(URL);
    const data = { 
      "title": "Philam AIA", 
      "body": "Your premium payment will due next month"
    };
    this.http.post(
      URL,
      data,
      { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType : 'text' }).subscribe();
  }

}