import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import { Router } from '@angular/router'; 
import { HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {envin} from '../data.service'; //envin + '/

@Component({
  selector: 'app-branchlogin',
  templateUrl: './branchlogin.component.html',
  styleUrls: ['./branchlogin.component.scss']
})
export class BranchloginComponent implements OnInit {

  constructor(public data: DataService, private formBuilder: FormBuilder, public http: Http, private router: Router) {
  	
   }
  registerForm: FormGroup;
	regForm: FormGroup;
    submitted = false;
    sub = false;
 	recvar: string = 'Recover Password for the above Email?';
 	reccnt: boolean = false;
	inter: string= '';
	div: string= '';
	inter_res: string= '';
	captchabool : boolean = false;
	adminbool : boolean = false;msg;
  ngOnInit() {
  	this.regForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
          });
  }
  handleExpire(){
		this.captchabool=false;
		this.inter="";
	}
	handleSuccess(event){
		if(event)this.captchabool=true;
	}
	verify(email){
		this.http.post(envin + '/branch/forgotPassword', {email: email})
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          if(res.success ==true){
          this.msg = 'Check Email';	
          }
        });
	}
  login(email, password){
  	 	this.submitted = true;
        // stop here if form is invalid
        if (this.regForm.invalid) {
            return;
        }
		if(this.captchabool){
			//this.auth.adlogin(email,password);
		    this. http.post(envin + '/branch/login',{email: email, password: password})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	if(res.success){
		    		localStorage.setItem('tokenbranch', res.token);
		    		this.data.oninit();
		    		this.data.branchtype = res.bio[0].role;
		    		localStorage.setItem('branchtype',res.bio[0].role);
		    this.http.post(envin + '/notification/branch',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
       console.log(res);
      if(res.result != null && res.result != undefined){
      console.log(res);
      this.data.overtime = res.result[0].overtime;
      this.data.holiday = res.result[0].holidayrequests;
      this.data.appraisal=res.result[0].appraisal;
      this.data.grievances=res.result[0].grievances;
      this.data.reports=res.result[0].reports;
      this.data.trip=res.result[0].trip;
    }
    });
		   this.http.post(envin + '/branch/getMyPackage', {token: localStorage.getItem('tokenbranch')})
        	.map(response => response.json())
        	.subscribe(res2 =>{
          	console.log(res2);
          	 for(let i=16;i<=30;i++ ){
		       localStorage.setItem('feat'+i,'false');
		      // console.log(localStorage.getItem('feat'+i))
            }
            if( res2.result[0].packageid != undefined && res2.result[0].packageid!='' && res2.result[0].packageid!= null){
            	var packit = res2.result[0].packageid;

            	packit = packit.toString();
            	packit = packit.split('**');
          	for(let a of packit){//16 to 28
          		//  16-17-18-19-20-21-22-23-24-25-26-27-28-29
          		localStorage.setItem('feat'+a,'true');		  //feat16 to feat29
          	}}
		    		localStorage.setItem('packid',res2.result[0].packageid);
		    		localStorage.setItem('tokenbranch', res.token);
		    		this.data.branchtype = res.bio[0].role;
		    		localStorage.setItem('branchtype',res.bio[0].role);
		    		console.log(localStorage.getItem('branchtype'));
		    		if(localStorage.getItem('branchtype') == 'manager'){
		    			console.log('if cond works on manager');
		    		this.router.navigate(['/branch/dashboard/notice-board']);}
		    		else if(localStorage.getItem('branchtype') == 'hr'){
		    		this.router.navigate(['/branch/dashboard/notice-board']);}
		    		else if(localStorage.getItem('branchtype') == 'admin'){
		    		this.router.navigate(['/branch/dashboard/notice-board']);}
		    		else {
		    		this.router.navigate(['/branch/dashboard/notice-board']);}
        
        });
		    	}
		    	else {
		    		this.div = res.msg;
		    	}
		      console.log(res)});
  			}
	}
	get f() { return this.regForm.controls; }
}
