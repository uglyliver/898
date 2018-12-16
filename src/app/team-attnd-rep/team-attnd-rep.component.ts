import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';
import {envin} from '../data.service'; //envin + '/

@Component({
  selector: 'app-team-attnd-rep',
  templateUrl: './team-attnd-rep.component.html',
  styleUrls: ['./team-attnd-rep.component.scss']
})
export class TeamAttndRepComponent implements OnInit {

  brancharray: any[]=[];emp_sync=''; startdate;enddate;
  historybool: boolean= false;
  work_con: string[] = ['Holiday', 'Pay'];
  overtimebool:boolean=false;
  attbool:boolean=false;
  selval: string;
  id: any;
  houre:string='none';converte:string='none';descriptione:string='none';
  hourg:string='none';convertg:string='none';descriptiong:string='none';
  sel(feat){
  	this.selval = feat;
  }//getovertime
  latearr: any[]; overhour1: any;overhour2: any;
idlist;
  constructor(public data: DataService, public http : Http) {
   
   	
   this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.bio[0]);
     this.idlist = res.bio[0].employees.split('-');
      
   this.http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      console.log(localStorage.getItem('tokenbranch'));
      for(let emp of res.result){
      	for(let id of this.idlist){
      		if(emp.id == id && id != null && id!= undefined && id != ''){
      			this.brancharray.push(emp);
      		}
      	}
      }

     // this.brancharray = res.result;
    });
    });
     this.http.post(envin + '/attendance/employee/getovertime',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      console.log(localStorage.getItem('tokenbranch'));
    //  this.brancharray = res.result;
    });//employee/getovertime

}
yearbool: boolean = false;
monthbool: boolean = false;
weekbool: boolean=false;
daybool: boolean=false;

  dailyarr: any[];
  weekno: any[]=[];
  monthno: any[]=[];
  yearno: any[]=[];

  open_history(val1, val2, val3){
        this.dailyarr =[];
        this.weekno=[];
        this.monthno=[];
        this.yearno=[];

   let top = document.getElementById('top');
   top.scrollIntoView();
     this.http.post(envin + '/attendance/AttendanceHistory',{token: localStorage.getItem('tokenbranch'), id: val1})
    .map(response => response.json())
    .subscribe(res2 =>{
      console.log(res2.daily);
      console.log(res2);
      this.dailyarr = res2.daily;

      this.dailyarr = Array.from(this.dailyarr.slice().reverse())
      for(let day of this.dailyarr){
        for(let clock of day.clock){
          if(clock.str1 == 'true'){
            day['late']=true;
            day['reason']=clock.str2;

          }
        }
      }
      /*
      for(let v of this.dailyarr){
        this.weekno.push(v.week);
        this.monthno.push(v.month);
        this.yearno.push(v.year);
      }

      function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
        }
      this.weekno = this.weekno.filter( onlyUnique );
      this.monthno = this.monthno.filter( onlyUnique );
      this.yearno = this.yearno.filter( onlyUnique );
*/
    });

    if(val3 == 'day')//daily
    {
    this.daybool =  !this.daybool;
    }
    if(val3 == 'week')//weekly
    {
    this.weekbool =  !this.weekbool;
    }
    if(val3 == 'month')//monthly
    {
    this.monthbool =  !this.monthbool;
    }
    if(val3 == 'year')//yearly
    {
    this.yearbool =  !this.yearbool;
    }
  }

  time2:string = '';
  time3:string = '';
  desc2:string = '';
  desc3:string = '';
  convert2:string = '';
  convert3:string = '';
  open_week(val1, val2){
     this.http.post(envin + '/attendance/myAttendanceHistory',{token: localStorage.getItem('tokenbranch'), id: val1})
    .map(response => response.json())
    .subscribe(res2 =>{
      console.log(res2.daily);
      console.log(res2);
      this.dailyarr = res2.daily;
     // this.latearr = res2.result;
      
    });
    this.weekbool =  !this.weekbool;
  }
  close_week(){
    this.weekbool = false;
  }
  close_month(){
    this.monthbool = false;
  }
  close_year(){
    this.yearbool = false;
  }
  open_day(val1, val2){

   let top = document.getElementById('top');
   top.scrollIntoView();
     this.http.post(envin + '/attendance/myAttendanceHistory',{token: localStorage.getItem('tokenbranch'), id: val1})
    .map(response => response.json())
    .subscribe(res2 =>{
      console.log(res2.daily);
      console.log(res2);
      this.dailyarr = res2.daily;
     // this.latearr = res2.result;
      
    });
    this.daybool =  !this.daybool;
  }
  close_day(){
    this.daybool = false;
  }
  close_history(){
    this.historybool =  !this.historybool;
  }
  out: string='';
	submit_prop(val,val2,val3){
		console.log(val,val2);
    if(this.selval == 'Pay'){

    this.http.post(envin + '/attendance/manager/overtime',{token: localStorage.getItem('tokenbranch'),
     id: this.id, time: val, description: val2, payment: '1', holiday: 'Pay', expDate: val3})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/attendance/manager/getovertime',{token: localStorage.getItem('tokenbranch'), id: this.id})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);

      if(res.result != []){
      this.time2 = res.result.hours1;
      this.desc2 = res.result.desc1;
      this.time3 = res.result.hours2;
      this.desc3 = res.result.desc2;
      this.out = res.result.holiday2;
      if(res.result.payment1 =='1'){
        this.convert2 = 'Pay';
      }
      else if (res.result.payment1 =='0'){
        this.convert2 = 'Holiday';
      }
      this.convert3 = res.result.holiday1;
      /*
      if(res.result.payment2 =='1'){
        this.convert3 = 'Pay';
      }
      else if (res.result.payment2 =='0'){
        this.convert3 = 'Holiday';
      }*/
    }
    this.overtimebool=!this.overtimebool;
    });
    });

    }
    if(this.selval == 'Holiday'){
    this.http.post(envin + '/attendance/manager/overtime',{token: localStorage.getItem('tokenbranch'),
     id: this.id, time: val, description: val2, payment: '0', holiday: 'Holiday',expDate: val3})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/attendance/manager/getovertime',{token: localStorage.getItem('tokenbranch'), id: this.id})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);

      if(res.result != []){
      this.time2 = res.result.hours1;
      this.desc2 = res.result.desc1;
      this.time3 = res.result.hours2;
      this.desc3 = res.result.desc2;
      this.out = res.result.holiday2;
      if(res.result.payment1 =='1'){
        this.convert2 = 'Pay';
      }
      else if (res.result.payment1 =='0'){
        this.convert2 = 'Holiday';
      }
      this.convert3 = res.result.holiday1;
      /*if(res.result.payment2 =='1'){
        this.convert3 = 'Pay';
      }
      else if (res.result.payment2 =='0'){
        this.convert3 = 'Holiday';
      }*/
    }
    this.overtimebool=!this.overtimebool;
    });
    });
    }
	}
  open_overtime(val, val1){
    this.overtimebool=!this.overtimebool;
    this.id = val;
    this.http.post(envin + '/attendance/manager/getovertime',{token: localStorage.getItem('tokenbranch'), id: val})
    .map(response => response.json())
    .subscribe(res => {
      console.log(res);
      if(res.result != []){
      this.time2 = res.result.hours1;
      this.desc2 = res.result.desc1;
      this.time3 = res.result.hours2;
      this.desc3 = res.result.desc2;
      this.out = res.result.holiday2;
      if(res.result.payment1 ='1'){
        this.convert2 = 'Pay';
      }
      else if (res.result.payment1 ='0'){
        this.convert2 = 'Holiday';
      }

      this.convert3 = res.result.holiday1;
     /* if(res.result.payment2 ='1'){
        this.convert3 = 'Pay';
      }
      else if (res.result.payment2 ='0'){
        this.convert3 = 'Holiday';
      }*/
    }
    });
  }
  ngOnInit() {
  }
  close_overtime(){
    this.overtimebool = false;
  }
}
