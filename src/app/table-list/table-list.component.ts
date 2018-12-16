import { Component, OnInit } from '@angular/core';

import {envin} from '../data.service'; //envin + '


import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';

declare var require: any;
var country_code = require('../../assets/country/country-by-abbreviation.json');
var country_cont = require('../../assets/country/country-by-continent.json');
var country_cur = require('../../assets/country/country-by-currency-code.json');
var country_iso = require('../../assets/country/country-by-iso-numeric.json');
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
	taxarr: any[]=[];switchbool:boolean = true;
	countrybool: boolean = false; i:number=0;
	co_code:any[] = require('../../assets/country/country-by-abbreviation.json');
	co_cont:any[] = require('../../assets/country/country-by-continent.json');
	co_cur:any[] = require('../../assets/country/country-by-currency-name.json');
	co_iso:any[] = require('../../assets/country/country-by-iso-numeric.json');
	country: any[]= require('../../assets/country/country-by-continent.json');
	country_val: string = '';country_sync: string = '';
	open_country(){
		this.countrybool = true;
	}
	close_country(){
		this.countrybool = false;
		
	   let top = document.getElementById('top');
	   top.scrollIntoView();
	}
	sel_country(val,i){
		this.i = i;
		this.country_val = val;
		this.close_country();
	}
	tax(val1,val2,val3,val4,val5){
		this.http.post(envin + '/tax',{token: localStorage.getItem('tokenadmin'),
		country: val1, countrycode: val2, currency: val3,taxper: val4 })
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    		this.http.get(envin + '/tax')
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res.tax); this.taxarr = res.tax;
    });
    });
	}
	switch_ed(){
		this.switchbool = false;
	}
	mssg:string='';
	submit_ed(id,country,countrycode, currency,val){
		this.switchbool = true; //updateTax
		this.http.post(envin + '/updateTax',{token: localStorage.getItem('tokenadmin'),
		country: country, countrycode: countrycode,currency: currency, taxper: val, id: id})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	this.mssg = res.mssg;
    this.http.get(envin + '/tax')
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res.tax); this.taxarr = res.tax;
    });
    });

	}
	del_tax(id){
		//dropTax
			this.http.post(envin + '/dropTax',{token: localStorage.getItem('tokenadmin'), id: id})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    this.http.get(envin + '/tax')
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res.tax); this.taxarr = res.tax;
    });
    });
	}
	tax21(val1,val2,val3,val4){
	this.http.post(envin + '/tax',{token: localStorage.getItem('tokenadmin'),
		country: val1, countrycode: val2, currency: val3,taxper: val4 })
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    this.http.get(envin + '/tax')
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res.tax); this.taxarr = res.tax;
    });
    });
	}
	  constructor(public data: DataService, public router: Router, public http: Http) {
	  	this.http.get(envin + '/tax')
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res.tax); this.taxarr = res.tax;
    });
	   }

	  ngOnInit() {
	  }

	}
