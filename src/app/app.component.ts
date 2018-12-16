import { Component, ViewEncapsulation} from '@angular/core';
import {DataService} from './data.service'
declare var $: any; 

import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	result:any;
 constructor(public data : DataService, public http: Http){
     //delete this asap
    /* for(let i=18;i<=23;i++ ){
       localStorage.setItem('feat'+i,'true');
     }*/



    localStorage.setItem('loaded','0');
    this. http.get('https://status-check-status.herokuapp.com/')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
        this.result = res.result;
        localStorage.setItem('result',res.result); 
        this.result = localStorage.getItem('result');
    });
 	data.oninit(); //process.env.PORT
 	this. http.get('https://status-check-status.herokuapp.com/')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result);
        this.result = res.result;
        localStorage.setItem('result',res.result); 
        this.result = localStorage.getItem('result');
    }); 
 }
}