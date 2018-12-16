import { Component, OnInit } from '@angular/core';
import {envin} from '../data.service'; //envin + '/


import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-manage-employees-e',
  templateUrl: './manage-employees-e.component.html',
  styles: [' @keyframes map {    0% {        background-position: 625% 0    }    100% {        background-position: 25% 0    }}  .is-moment-timezone .hero {background-color: #4e7cad;box-shadow: inset 0 10px 10px #4e7cad} .map {    margin: 0 auto;    max-width: 1024px;    padding: 40px}.map-wrap {    background: #4e7cad url(../img/bg.png);    padding: 1px;    border-radius: 3px;    position: relative}.map-label {    line-height: 60px;    font-size: 24px;    margin: 0;    color: #4e7cad;    font-family: monospace}.map-label span {    display: block}.map-label .map-label-name {    float: left;    width: 50%;    padding-right: 10px;    text-align: right}.map-label .map-label-time {    margin-left: 50%;    padding-left: 10px;    text-align: left}.map-inset {    padding-bottom: 50%;   background: url(../img/world.png) 50% 50%;    background-size: cover;    position: relative;    border-radius: 2px}.map-inset span {    width: 6px;    height: 6px;    margin: -3px 0 0 -3px;    background: #fff;    position: absolute;    border-radius: 3px;    border: 1px solid #4e7cad}.map-inset span.active {    background: #4e7cad}.map-inset .map-axis-x {    position: absolute;    top: 0;    bottom: 0;    border-left: 1px solid rgba(78, 124, 173, 0.5);    width: 0;    transition: left 50ms ease-out}.map-inset .map-axis-y {    position: absolute;    left: 0;    right: 0;    border-top: 1px solid rgba(78, 124, 173, 0.5);    height: 0;    transition: top 50ms ease-out}']
})
export class ManageEmployeesEComponent implements OnInit {
editbranchbool: boolean = false;max:any;max2:any;max3:any;max4:any;empcur: any;empbool: boolean = false;
editembool: boolean = false;
benbool: boolean = false;emp_sync='';emailvar='';
arrbn: string = "";
arreq: string = "";
curemail: string;
benefits: string;
benefitsa: string[];
curid: string;dobmsg='';joinmsg='';
secvar: string;
eqbool: boolean = false;
selcomsval: string = '';
selcomszval: string = '';
i: number;
selcomszzval: string = '';
curbranchid: any;
shiftbool: boolean;
  temp1: string ='not assigned';
  temp2: string;
  temp3: string;
  temp4: string;
  temp5: string;
  shift_array: any[]=[];
  shift_empty: string;
 closeshift(){
  	this.shiftbool = !this.shiftbool;
  	this.temp1 = '';
  			this.temp2 = '';
  			this.temp3 = '';
  			this.temp4 = '';
  			this.temp5 = '';
  }
  opnemp(obj){
  this.empcur = obj;
  this.empbool = true;
}
closeemp(){
  this.empbool = false;
}
 opnshift(val,val2, val3){
 	  this. http.post(envin + '/entity/getshift',{token: localStorage.getItem('tokenentity'), branchid: val3})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.shift_array = res.result;
      if(!this.shift_array){
  		this.shift_empty = 'No shifts available in this branch';
  	}
  	else {
  		this.shift_empty = '';
  	for(let v of this.shift_array){
  		if(v.id === val){
  			this.temp1 = v.name;
  			this.temp2 = v.stime;
  			this.temp3 = v.etime;
  			this.temp4 = v.cstime;
  			this.temp5 = v.cetime;
  			console.log(v);
  	}
  }}
    });
 	this.curemail = val2;
  	this.curbranchid = val3;
  	if(val == null ){

  	}
  	this.shiftbool = !this.shiftbool;
  }
   opnshift2(val,val2, val3){
   	  		this.temp1 = 'nil';
  			this.temp2 = 'nil';
  			this.temp3 = 'nil';
  			this.temp4 = 'nil';
  			this.temp5 = 'nil';
 	  this. http.post(envin + '/entity/getshift',{token: localStorage.getItem('tokenentity'), branchid: val3})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.shift_array = res.result;
      if(!this.shift_array){
  		this.shift_empty = 'No shifts available in this branch';
  	}
  	else {
  		this.shift_empty = '';
  	for(let v of this.shift_array){
  		if(v.id === val){
  			this.temp1 = v.name;
  			this.temp2 = v.stime;
  			this.temp3 = v.etime;
  			this.temp4 = v.cstime;
  			this.temp5 = v.cetime;
  			console.log(v);
  	}
  }}
    });
 	this.curemail = val2;
  	this.curbranchid = val3;
  	if(val == null ){
  	}
  }
  select_shift(val, val2, val3, val4, val5, val6){
    this.http.post(envin + '/entity/updateEmployeemin3',{token: localStorage.getItem('tokenentity'), email: this.curemail, branchid: this.curbranchid, shiftid: val})
    .map(response => response.json())
    .subscribe(res =>{
    console.log(res);
    	this.http.post(envin + '/entity/getAllEmployees',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	console.log(localStorage.getItem('tokenentity'));
    	this.brancharray = res.result;
    });
    this.temp1 = val2;this.temp2 = val3;this.temp3 = val4;this.temp4 = val5;this.temp5 = val6;
    });
  }
 selcomsz(val){
    this.selcomszval = val;
  }
  selcomszz(val){
    this.selcomszzval = val;
  }
  selcoms(val){
    this.selcomsval = val;
  }
  selben(i){
  	this.data.benifitsarr2e.push(this.data.benifitsarre[i]);
  	this.data.benifitsarre.splice(i,1);
  }
  selben2(i){
  	this.data.benifitsarre.push(this.data.benifitsarr2e[i]);
  	this.data.benifitsarr2e.splice(i,1);
  }
  submit_bn(obj){
  	this.arrbn = '';
  	for(var d of this.data.benifitsarr2e){
  		this.arrbn = this.arrbn + ',' + d['name'];
  	}
  	this. http.post(envin + '/entity/updateEmployeemin1',{token: localStorage.getItem('tokenentity'),
    email: this.curemail, benefit: this.arrbn, branchid: this.curid })
    .map(response => response.json())
    .subscribe(res =>{
    	this. http.post(envin + '/entity/getAllEmployees',{token: localStorage.getItem('tokenentity')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.brancharray = res.result;
		    });
      console.log(res);console.log(this.arrbn);
  	this.benbool = !this.benbool;
   
    });
  }
  submit_eq(obj){
  	this.arrbn = '';
  	for(var d of this.data.equipmentsarr2e){

  		this.arrbn = this.arrbn + ',' + d['name'];
  	}
  	this. http.post(envin + '/entity/updateEmployeemin2',{token: localStorage.getItem('tokenentity'),
    email: this.curemail, equip: this.arrbn, branchid: this.curid })
    .map(response => response.json())
    .subscribe(res =>{
    	this. http.post(envin + '/entity/getAllEmployees',{token: localStorage.getItem('tokenentity')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.brancharray = res.result;
		    });
      console.log(res);console.log(this.arrbn);
  	this.eqbool = !this.eqbool;
   
    });
  }
  opnben(val,sec,val2){
  	this.curemail = val;
  	this.curid = val2;
  	this.secvar = sec;
  	this.benbool = !this.benbool;
  }
   seleq(i){
  	this.data.equipmentsarr2e.push(this.data.equipmentsarre[i]);

  	this.data.equipmentsarre.splice(i,1);
  }
  seleq2(i){
  	this.data.equipmentsarre.push(this.data.equipmentsarr2e[i]);

  	this.data.equipmentsarre.splice(i,1);
  }
  opneq(val,sec,val2){

  	this.curemail = val;
  	this.curid = val2;
  	this.secvar = sec;
  	this.eqbool = !this.eqbool;
  }
  open_edit(ind){
  	this.i = ind;
  	this.selcomszzval = this.brancharray[ind].branchid;
  	this.selcomsval = this.brancharray[ind].role;
  	this.selcomszval = this.brancharray[ind].type;
  	this.editembool = !this.editembool;
  } 
  brancharray: any[] = [];valid1:boolean= true; email1:string='';
  constructor(public data: DataService, public router: Router, public http: Http) {
     setInterval(()=>{
      if(this.validateEmail(this.emailvar) == false){
           this.email1='(Invalid Email)';// this.valid1 = false;
      }
      else if(this.validateEmail(this.emailvar) != false){
           this.email1='';// this.valid1 = false;
      }
    },300);
    var now = new Date();
    //var now2 = new Date();
    //now2.setFullYear(now2.getFullYear()-18)
    var now2 = new Date(new Date().setFullYear(new Date().getFullYear() - 18))
    this.max = now.toISOString().substring(0,10);
    this.max2 = now2.toISOString().substring(0,10);
    //this.max = 
    // this.max.setFullYear( this.max.getFullYear() - 18 );

  	console.log(localStorage.getItem('tokenentity'));
  	if(!localStorage.getItem('tokenentity')){
   	this.router.navigate(['']);} 
   	//bio
   	this.http.post(envin + '/entity/bio',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	if(!res.success){
    		this.router.navigate(['']);
    	}
    });
  	this.http.post(envin + '/entity/getAllEmployees',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	console.log(localStorage.getItem('tokenentity'));
    	this.brancharray = res.result;
    });
	}
  gobacktocr(){
  	this.editbranchbool = !this.editbranchbool
  }
  ngOnInit() {
  }
  retmsg:string='';
    validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
  submit_cr_br(obj){
    this.valid1=true; var now = moment();
    this.email1='';this.dobmsg='';this.joinmsg = '';
     if(this.validateEmail(obj.email) == false){
      this.email1='(Invalid Email)';
      this.valid1 = false; 
    }
    var now18 = moment();
    if(obj.dob > now18.subtract(18, 'years').format('YYYY-MM-DD')){
      this.dobmsg='(Employee Must be at least 18 years old)';
      this.valid1 = false; 
    }
    if(obj.joindate > now.format('YYYY-MM-DD')){
      this.joinmsg='(Join Date can\'t be future date)';
      this.valid1 = false; 
    }

    if(this.valid1==true){
  	this. http.post(envin + '/entity/createEmployee',{
  		token: localStorage.getItem('tokenentity'),branchid: obj.branchid,role: this.selcomsval,id: this.selcomszzval,name: obj.name, email: obj.email
  	    , pan: obj.pan,type: obj.type, dob: obj.dob, joindate: obj.joindate, salary: obj.salary})
    .map(response => response.json())
    .subscribe(res =>{
      this.retmsg=res.msg;
    	console.log(res);
    	this. http.post(envin + '/entity/getAllEmployees',{token: localStorage.getItem('tokenentity')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.brancharray = res.result;
		    });
    	if(res.success)this.gobacktocr();
    });
  }}
  del_edit(val){

  	this. http.post(envin + '/entity/dropEmployee',{token: localStorage.getItem('tokenentity'), id: val})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	this. http.post(envin + '/entity/getAllEmployees',{token: localStorage.getItem('tokenentity')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res.result);
		    	this.brancharray = res.result;
		    });
    });
  }
  submit_ed_br(obj){
   
  	this. http.post(envin + '/entity/updateEmployee',{
  		token: localStorage.getItem('tokenentity'),role: this.selcomsval,branchid: this.selcomszzval,name: obj.name, email: obj.email
  	    , pan: obj.pan,type: obj.type, dob: this.brancharray[this.i].dob, salary: obj.salary, benefit: this.brancharray[this.i].benefit, equip: this.brancharray[this.i].equip})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	this. http.post(envin + '/entity/getAllEmployees',{token: localStorage.getItem('tokenentity')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.brancharray = res.result;
		    });
    	if(res.success)this.open_edit(this.i);
    });
  }
  
}
