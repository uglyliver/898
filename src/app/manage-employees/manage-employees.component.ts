import { Component, OnInit } from '@angular/core';
import {envin} from '../data.service'; //envin + '/

import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';

import * as moment from 'moment';
@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.scss']
})
export class ManageEmployeesComponent implements OnInit {
editbranchbool: boolean = false;emp_sync=''; empcur: any;empbool: boolean = false;
editembool: boolean = false;dobmsg='';joinmsg='';
benbool: boolean = false;
arrbn: string = "";
arreq: string = "";
curemail: string;
benefits: string;
benefitsa: string[];
curid: string;
curbranchid: any;
secvar: string;
eqbool: boolean = false;
selcomsval: string = '';
selcomszval: string = '';
i: number;
selcomszzval: string = '';
opnemp(obj){
  this.empcur = obj;
  this.empbool = true;
}
closeemp(){
  this.empbool = false;
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
  //ben
 opnben(val,sec,val2){
    this.curemail = val;
    this.curid = val2;
    this.secvar = sec;
    this.benbool = !this.benbool;
  }

  submit_bn(obj){
  	this.arrbn = '';
  	for(var d of this.data.benifitsarr2){
  		this.arrbn = this.arrbn + ',' + d['name'];
  	}
  	this. http.post(envin + '/branch/updateEmployeemin1',{token: localStorage.getItem('tokenbranch'),
    email: this.curemail, benefit: this.arrbn, branchid: this.curid })
    .map(response => response.json())
    .subscribe(res =>{
    	this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.brancharray = res.result;
		    });
      console.log(res);console.log(this.arrbn);
  	this.benbool = !this.benbool;
   
    });
  }
   selben(i){
    this.data.benifitsarr2.push(this.data.benifitsarr[i]);
    this.data.benifitsarr.splice(i,1);
  }
  selben2(i){
    this.data.benifitsarr.push(this.data.benifitsarr2[i]);
    this.data.benifitsarr2.splice(i,1);
  }
  //eq
  submit_eq(obj){
  	this.arrbn = '';
  	for(var d of this.data.equipmentsarr2){

  		this.arrbn = this.arrbn + ',' + d['name'];
  	}
  	this. http.post(envin + '/branch/updateEmployeemin2',{token: localStorage.getItem('tokenbranch'),
    email: this.curemail, equip: this.arrbn, branchid: this.curid })
    .map(response => response.json())
    .subscribe(res =>{
    	this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.brancharray = res.result;
		    });
      console.log(res);console.log(this.arrbn);
  	this.eqbool = !this.eqbool;
   
    });
  }
  shiftbool: boolean = false;
  emailvar='';email1='';
  temp1: string ='not assigned';
  temp2: string;
  temp3: string;
  temp4: string;
  temp5: string;
  opnshift(val,val2, val3){
  	this.curemail = val2;
  	this.curbranchid = val3;
  	if(val == null ){

  	}
  	for(let v of this.data.shift_array){
  		if(v.id === val){
  			this.temp1 = v.name;
  			this.temp2 = v.stime;
  			this.temp3 = v.etime;
  			this.temp4 = v.cstime;
  			this.temp5 = v.cetime;
  			console.log(v);
  		}
  	this.data.shift_array;}
  	this.shiftbool = !this.shiftbool;
  }

  opnshift2(val,val2, val3){
  	this.curemail = val2;
  	this.curbranchid = val3;
  	for(let v of this.data.shift_array){
  		if(v.id === val){
  			this.temp1 = v.name;
  			this.temp2 = v.stime;
  			this.temp3 = v.etime;
  			this.temp4 = v.cstime;
  			this.temp5 = v.cetime;
  			console.log(v);
  		}
  	this.data.shift_array;}
  }
  select_shift(val, val2, val3, val4, val5, val6){
    this.http.post(envin + '/branch/updateEmployeemin3',{token: localStorage.getItem('tokenbranch'), email: this.curemail, branchid: this.curbranchid, shiftid: val})
    .map(response => response.json())
    .subscribe(res =>{
    console.log(res);
    	this.http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	console.log(localStorage.getItem('tokenbranch'));
    	this.brancharray = res.result;
    });
    this.temp1 = val2;this.temp2 = val3;this.temp3 = val4;this.temp4 = val5;this.temp5 = val6;
    
  	this.shiftbool = !this.shiftbool;
    });
  }
  closeshift(){
  	this.shiftbool = !this.shiftbool;
  }
 
   seleq(i){
  	this.data.equipmentsarr2.push(this.data.equipmentsarr[i]);
  	this.data.equipmentsarr.splice(i,1);
  }
  seleq2(i){
  	this.data.equipmentsarr.push(this.data.equipmentsarr2[i]);
  	this.data.equipmentsarr.splice(i,1);
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
  brancharray: any[] = [];max:any;max2:any;
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
  	console.log(localStorage.getItem('tokenbranch'));
  	if(!localStorage.getItem('tokenbranch')){
   	this.router.navigate(['']);} 
   	//bio
   	this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	if(!res.success){
    		this.router.navigate(['']);
    	}
    });
  	this.http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	console.log(localStorage.getItem('tokenbranch'));
    	this.brancharray = res.result;
    });
	}
  gobacktocr(){
  	this.editbranchbool = !this.editbranchbool;
  }
  ngOnInit() {
  }
  validateEmail(email) 
  {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
emmsg='';
  valid1:boolean = true;
  submit_cr_br(obj){
    var now = moment();
    this.valid1=true;
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
    if(this.valid1 == true){
  	this. http.post(envin + '/branch/createEmployee',{
  		token: localStorage.getItem('tokenbranch'),role: this.selcomsval,name: obj.name, email: obj.email
  	    , pan: obj.pan,type: obj.type, dob: obj.dob, joindate: obj.joindate, salary: obj.salary})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.brancharray = res.result;
		    });
        this.emmsg = res.msg;
    	if(res.success)this.gobacktocr();
    });
  }}
  del_edit(val){
  	this.http.post(envin + '/branch/dropEmployee',{token: localStorage.getItem('tokenbranch'), id: val})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res.result);
		    	this.brancharray = res.result;
		    });
    });
  }
  submit_ed_br(obj){
  	this. http.post(envin + '/branch/updateEmployee',{
  		token: localStorage.getItem('tokenbranch'),role: this.selcomsval,branchid: this.selcomszzval,name: obj.name, email: obj.email
  	    , pan: obj.pan,type: obj.type, dob: this.brancharray[this.i].dob, salary: obj.salary, benefit: this.brancharray[this.i].benefit, equip: this.brancharray[this.i].equip})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.brancharray = res.result;
		    });
    	if(res.success){
        this.editembool =false;
        //this.open_edit(this.i);
      }
    });
  }
  
}
