import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';
import {envin} from '../data.service'; //envin + '/

@Component({
  selector: 'app-att-reports-e',
  templateUrl: './att-reports-e.component.html',
  styleUrls: ['./att-reports-e.component.scss']
})
export class AttReportsEComponent implements OnInit {
  brancharray: any[];
  work_con: string[] = ['Holiday', 'Pay'];
  selval: string;
  overtimebool: boolean = false;
  houre:string;converte:string;descriptione:string;
  hourg:string;convertg:string;descriptiong:string;
  sel(feat){
  	this.selval = feat;
  }
  constructor(public data: DataService, public http : Http) {
  this.http.post(envin + '/entity/getAllEmployees',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	console.log(localStorage.getItem('tokenentity'));
    	this.brancharray = res.result;
    });

     }
   open_overtime(val, val1){
  	this.overtimebool=!this.overtimebool;
  }
  ngOnInit() {
  }

}
