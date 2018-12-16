import { Component, OnInit } from '@angular/core';
import {envin} from '../data.service'; //envin + '/


import { Http, Headers , RequestOptions} from '@angular/http';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	email:string='';pass2:string='';host:string='';
smtparr:string[]=["Gmail","Godaddy","GodaddyAsia","GodaddyEurope","Hotmail","iCloud","Naver","OpenMailBox","Outlook365","Postmark","SendCloud","SendGrid","SendPulse","SES","Sparkpost","Yahoo","Yandex","Zoho",]
  smtp:string;
  set(val){
  	this.smtp = val;
  }
  constructor(public http: Http) {
  const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('tokenadmin') );
    const options = new RequestOptions({headers: headers});
     this.http.get(envin + '/smtp', options)
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.email = res.smtp1;this.pass2 = res.smtp2;this.host = res.smtp3;
    });

 }
  set_smtp(val1,val2,val3){
  	 const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('tokenadmin') );
    const options = new RequestOptions({headers: headers});
    
  	this.http.post(envin + '/smtp',{token: localStorage.getItem('tokenadmin'),
  	 smtp1: val1, smtp2: val2, smtp3: val3})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);

     this.http.get(envin + '/smtp', options)
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.email = res.smtp1;this.pass2 = res.smtp2;this.host = res.smtp3;
    });
    });
  }
  ngOnInit() {
  }

}
