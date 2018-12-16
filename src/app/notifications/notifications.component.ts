import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {envin} from '../data.service'; //envin + '/

import { Http, Headers , RequestOptions} from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  
  auth:any='';email:any='';pass:any='';
  constructor(public data: DataService, public router: Router, public http: Http) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('tokenadmin') );
    const options = new RequestOptions({headers: headers});
     this.http.get(envin + '/smtp', options)
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.auth = res.paypal1;this.email = res.paypal2;this.pass = res.paypal3;
    });
  }
  paypal2(val, val2,val3){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('tokenadmin') );
    const options = new RequestOptions({headers: headers});

    this.http.post(envin + '/paypal',{token: localStorage.getItem('tokenadmin'), paypal1: val, paypal2: val2, paypal3: val3})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.http.get(envin + '/smtp', options)
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.auth = res.paypal1;this.email = res.paypal2;this.pass = res.paypal3;
    });
    });
  }
  ngOnInit() {
  }

}
