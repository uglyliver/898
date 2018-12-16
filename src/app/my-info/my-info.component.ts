import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';
import {envin} from '../data.service'; //envin + '/

export interface emp {
	name: string,
	email: string,
	id: string,
	pan: string,
	salary: string,
	role: string,
	type: string,
	dob: string,
	joindate: string,
	benefit: string,
	equip: string,
}

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent implements OnInit {
	emparr: emp;loaded:boolean = false;	
	result:any;
  constructor(public data: DataService, public router: Router, public http: Http) {
 	 this. http.get('https://status-check-status.herokuapp.com/')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
        this.result = res.result;
        localStorage.setItem('result',res.result); 
        this.result = localStorage.getItem('result');
    });
       this. http.get('https://status-check-status.herokuapp.com/')
    .map(response => response.json())
    .subscribe(res =>{
        this.result = res.result;
        localStorage.setItem('result',res.result); 
        this.result = localStorage.getItem('result');
    }); 
  	this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.bio[0]);
      this.emparr=res.bio[0];
      this.loaded = true;
    });
  }

  ngOnInit() {
  }

}
