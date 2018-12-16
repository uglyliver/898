import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {envin} from '../data.service'; //envin + '/

@Component({
  selector: 'app-branchverify',
  templateUrl: './branchverify.component.html',
  styleUrls: ['./branchverify.component.scss']
})
export class BranchverifyComponent implements OnInit {
	registerForm: FormGroup;
	regForm: FormGroup;
    submitted = false;
	verify_bool: boolean;
	verify_msg: string = '';
    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, public http: Http) {

    }
  login(pass){
  	this.submitted = true;
        // stop here if form is invalid
        if (this.regForm.invalid) {
            return;
        }

  	this.route.params.subscribe(res => {
  		console.log(res.id);
  		this.http.post(envin + '/branch/verify',{token: res.id, password: pass})
    .map(response => response.json())
    .subscribe(res =>{
    	this.verify_msg = res.msg;
    	console.log(res);
    });
  	}); 
  }

  ngOnInit() {
  	this.regForm = this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(6)]],
          });
  }
  get f() { return this.regForm.controls; }

}
