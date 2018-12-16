import { Component, OnInit } from '@angular/core';
import {envin} from '../data.service'; //envin + '/

import { Router } from '@angular/router'; 
import { HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, public http: Http, private router: Router) { }
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
	adminbool : boolean = false;
  ngOnInit() {
  	this.regForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(4)]],
          });
  }
  handleExpire(){
		this.captchabool=false;
		this.inter="";
	}
	handleSuccess(event){
		if(event)this.captchabool=true;
	}
  login(email, password){
  	 this.submitted = true;
        if (this.regForm.invalid) {
            return;
        }
		if(this.captchabool){
			//this.auth.adlogin(email,password);
			this.http.post(envin + '/login',
				{name: email, password: password})
			.map(response => response.json())
			.subscribe(res =>{
				//console.log(res.token);
				if(res.success){
				localStorage.setItem('tokenadmin', res.token);
		    		this.router.navigate(['../dashboard']);
		    	}
		    	else {
		    		this.div = res.msg;
		    	}
			}); 		   
  			}
}

	get f() { return this.regForm.controls; }


}
