import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/

import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  featureArray: any[]=[];
  constructor(public data: DataService,public router: Router, public http: Http  ) {
    if(!localStorage.getItem('tokenadmin')){
     this.router.navigate(['']);}
     
    this.http.get(envin + '/features')
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.featureArray = res.feature;
        });
       }
   add(val){
     //featureadd
     this.http.post(envin + '/featureadd', {token: localStorage.getItem('tokenadmin'), name: val})
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
           this.http.get(envin + '/features')
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.featureArray = res.feature;
        });
        });
   }
   edit(val,id){//featureupdate
     this.http.post(envin + '/featureupdate', {token: localStorage.getItem('tokenadmin'), name: val, id: id})
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
           this.http.get(envin + '/features')
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.featureArray = res.feature;
        });
        });
   }
  /* delete(id){
     this.http.post(envin + '/featuredelete', {token: localStorage.getItem('tokenadmin'),id: id})
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
           this.http.get(envin + '/features')
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.featureArray = res.feature;
        });
        });
   }*/
  ngOnInit(){

  }
}
