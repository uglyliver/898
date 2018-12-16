import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';
import {envin} from '../data.service'; //envin + '/
@Component({
  selector: 'app-appointment-book',
  templateUrl: './appointment-book.component.html',
  styleUrls: ['./appointment-book.component.scss']
})
export class AppointmentBookComponent implements OnInit {
startdate;endate;emp_sync='';
book_bool=false;brancharray=[];
  constructor(public data: DataService, public http : Http) {   this.http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      this.brancharray = res.result;
    });


     }

  ngOnInit() {
  }
  select_emp(i){
  	console.log(this.brancharray[i]);
  	this.brancharray[i].select='1';
  }
  unselect_emp(i){
  	console.log(this.brancharray[i]);
  	this.brancharray[i].select='0';
  }
  apply(){
  	//send api for applying for new appointment

  }
  book(id){
  	//send api req for booking this appointment

  }
  rebook(id){
  	//send api req for re booking this appointment

  }
  book_open(){
	this.book_bool = true;
	}
  book_close(){
  	for(let v of this.brancharray){
  		v.select='0';
  	}
	this.book_bool = false;

	}
}
