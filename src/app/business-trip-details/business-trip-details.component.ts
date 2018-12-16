import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/

declare var require: any;
var country_code = require('../../assets/country/country-by-abbreviation.json');
var country_cont = require('../../assets/country/country-by-continent.json');
var country_cur = require('../../assets/country/country-by-currency-name.json');
@Component({
  selector: 'app-business-trip-details',
  templateUrl: './business-trip-details.component.html',
  styleUrls: ['./business-trip-details.component.scss']
})
export class BusinessTripDetailsComponent implements OnInit {
	countrybool: boolean = false;edit2:boolean = true;
	catarr:any[]=[];catset:any='';
	rulearr:any[]=[];
	country_val: string = '';
	country_sync: string='';
	country = require('../../assets/country/country-by-continent.json');
	continent: string[] = ['Asia', 'Europe', 'Africa' , 'Oceania', 'North America', 'Antarctica', 'South America'];
  constructor(public http: Http, public data: DataService) {  
  	this.http.post(envin + '/trip/getCategory',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.catarr = res.result;
    });
    this.http.post(envin + '/trip/getRules',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.rulearr = res.result;
    });

  }
  rulid;
  rule_edit1(val){
    this.edit2 = false;
    this.rulid = val;

  }perdayval;
  perday(val){
    this.perdayval = val;
  }
  rule_edit2(val){
    this.http.post(envin + '/trip/updateRule',{token: localStorage.getItem('tokenbranch'), id: this.rulid, value: val})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.edit2 = true;
      this.http.post(envin + '/trip/getRules',{token: localStorage.getItem('tokenbranch')})
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res);
        this.rulearr = res.result;
      });
    }); 
  }
  open_country(){
    this.countrybool = true;
  }
  close_country(){
    this.countrybool = false;
    let top = document.getElementById('top');
    top.scrollIntoView();
  }
  sel_country(val){
    this.country_val = val;
    this.close_country();
  }
  set_cat(v){
    this.catset = v;
  }
  cat_del(v){
    //dropCategory
    this.http.post(envin + '/trip/dropCategory',{token: localStorage.getItem('tokenbranch'),id: v})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/trip/getCategory',{token: localStorage.getItem('tokenbranch')})
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res);
        this.catarr = res.result;
      });
    });
  }
  cat_add(v){
    //addCategory

    this.http.post(envin + '/trip/addCategory',{token: localStorage.getItem('tokenbranch'),name: v})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/trip/getCategory',{token: localStorage.getItem('tokenbranch')})
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res);
        this.catarr = res.result;
      });
    });
  }

  rule_add(v1,v2,v3){
    this.http.post(envin + '/trip/addRule',{token: localStorage.getItem('tokenbranch'),
      name: v2, value: v3, country:v1, category: this.catset, perDay: this.perdayval})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/trip/getRules',{token: localStorage.getItem('tokenbranch')})
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res);
        this.rulearr = res.result;
      });
    });
  }
  rule_del(v){
    //dropRule
    this.http.post(envin + '/trip/dropRule',{token: localStorage.getItem('tokenbranch'),
      id:v})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/trip/getRules',{token: localStorage.getItem('tokenbranch')})
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res);
        this.rulearr = res.result;
      });
    });
  }
  ngOnInit() {
  }

}
