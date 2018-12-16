import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';

import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/

export interface IEmployee {
	name: string;
	designation: string;
	subordinates: IEmployee[];
	manager? : any;
}
@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {
	emparr: any[];empid1;empid2;emp;emp_sync1='';emp_sync2='';
	topEmployee: any = {
		name: '',
		designation: '',
		subordinates: [
		]
	};
	blankjson:any = {}
	emparr2: any=[];
	emparr3: any=[];
	constructor(public http: Http, public data: DataService){
		this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
				.map(response => response.json())
				.subscribe(res =>{
					console.log(res.result);
					this.emparr = res.result;
				});
		this. http.post(envin + '/branch/getMyManager',{token: localStorage.getItem('tokenbranch')})
		.map(response => response.json())
		.subscribe(res =>{
			console.log(res.result[0].email);
			this.blankjson = {
				name: res.result[0].email,
				designation: 'Branch Manager',
				subordinates: [
				]
			}

		this. http.post(envin + '/branch/getjson',{token: localStorage.getItem('tokenbranch')})
		.map(response => response.json())
		.subscribe(res =>{
			console.log(res.result[0]);
			if(res.result[0].json==null){
				this. http.post(envin + '/branch/setjson',{token: localStorage.getItem('tokenbranch'), jsonn: JSON.stringify(this.blankjson)})
				.map(response => response.json())
				.subscribe(res =>{
					console.log(res.result[0]);
					this. http.post(envin + '/branch/getjson',{token: localStorage.getItem('tokenbranch')})
					.map(response => response.json())
					.subscribe(res =>{
						console.log(res.result[0]);
						this.topEmployee = JSON.parse(res.result[0].json);
						this.http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
				.map(response => response.json())
				.subscribe(res =>{
					console.log(res.result);
					this.emparr = res.result;
					for(let u of this.emparr){ 			//emparr2 creation
						this.del(this.topEmployee,u);
					}
					for(let a of this.emparr){			//emparr3 creation
						var bool = false;
						for(let b of this.emparr2){
							if(a.email == b.email){
								bool = true;
							}
						}
						if(bool == false){
							this.emparr3.push(a);
						}
					}
					console.log(this.emparr2);
				});
					});
				});
			}
			else{
				this.topEmployee = JSON.parse(res.result[0].json);}
				this.http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
				.map(response => response.json())
				.subscribe(res =>{
					console.log(res.result);
					this.emparr = res.result;
					for(let u of this.emparr){ 			//emparr2 creation
						this.del(this.topEmployee,u);
					}
					for(let a of this.emparr){			//emparr3 creation
						var bool = false;
						for(let b of this.emparr2){
							if(a.email == b.email){
								bool = true;
							}
						}
						if(bool == false){
							this.emparr3.push(a);
						}
					}
					console.log(this.emparr2);
				});

			});



		});


	}
	set_val1: string='';
	set_val2: string='';
	set1(val){
		this.set_val1 = val;
	}
	set2(val){
		this.set_val2 = val;
	}
	s(email1,email2,des)
	{
		this.f(this.topEmployee,email1,email2,des)
		this.set_val2 = '';
	}
	s2(email){
		this.f2(this.topEmployee,email);
	}
	empid3;empid4;emp3;emp4;emp5;
	eid1;
	f2(obj,name){	//tree creation
		//console.log(obj)
				if(obj.name == name){
				//empty chart here
				}
				else {
					for(let v of obj.subordinates){
						if(v.name == name){

					for(let emp of this.emparr){

						if(emp.email==name){//child id
							this.empid4=emp.id;
							this.emp4 = emp.employees;
						}
						if(emp.email==obj.name){//parent id
							this.empid3=emp.id;
							this.emp3 = emp.employees;

						}

						//if(emp.email==name2)this.empid2= this.emp +'-'+ emp.id;
					}
					//remove id of child from parent employees
					this.emp5='';
					for(let a of this.emp3.split('-')){
						if(a != this.empid4){
							this.emp5 = this.emp5 + '-' + a;
						}
					}

					//send post requests
					this. http.post(envin + '/branch/updateEmployeemin5',{token: localStorage.getItem('tokenbranch'), id: this.empid4,employees: ''})
					.map(response => response.json())
					.subscribe(res =>{
						console.log(res);
						this.empid3='';

					});
					this. http.post(envin + '/branch/updateEmployeemin5',{token: localStorage.getItem('tokenbranch'), id: this.empid3,employees: this.emp5 + '-' + this.emp4})
					.map(response => response.json())
					.subscribe(res =>{
						console.log(res);
						this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
						.map(response => response.json())
						.subscribe(res =>{
							console.log(res.result);
							this.emparr = res.result;
						});
						this.empid4='';
					});


//this.f2(v,name,name2,des);			
//	var obj2 ={};
//	obj = obj2

					//setting employees2 
					  //for node being deleted simply set null
					  this. http.post(envin + '/branch/updateEmployeemin6',{token: localStorage.getItem('tokenbranch'), id: this.empid4,employees: ''})
					.map(response => response.json())
					.subscribe(res =>{
						console.log(res);
						//this.empid3='';
					});
					  //for node child to the node being deleted, for each change employees to new parent
					  for(let jeon of v.subordinates){
					  	for(let emp of this.emparr){
							if(emp.email==jeon.name){//child id
							this. http.post(envin + '/branch/updateEmployeemin6',{token: localStorage.getItem('tokenbranch'), id: emp.id,employees: this.empid3})
							.map(response => response.json())
							.subscribe(res =>{
								console.log(res);
								this.empid3='';
							});
							}
						//if(emp.email==name2)this.empid2= this.emp +'-'+ emp.id;
					}

					  }

				obj.subordinates = obj.subordinates.concat(v.subordinates); 
				console.log(v);
					var index = obj.subordinates.indexOf(v);
					obj.subordinates.splice(index, 1);
//Object.keys(obj).forEach(function(key) { delete obj[key]; });
//obj=[];
//	obj.subordinates=[];
//console.log(obj);
//	obj=null;
//	console.log(obj);
//obj = {};
//console.log(obj,this.topEmployee);
				this. http.post(envin + '/branch/setjson',{token: localStorage.getItem('tokenbranch'), jsonn: JSON.stringify(this.topEmployee)})
					.map(response => response.json())
					.subscribe(res =>{
						console.log(res);
						this. http.post(envin + '/branch/getjson',{token: localStorage.getItem('tokenbranch')})
						.map(response => response.json())
						.subscribe(res =>{
							console.log(res.result[0]);
							this.topEmployee = JSON.parse(res.result[0].json);
						});
					});
					this.emparr2=[];this.emparr3=[];
					for(let u of this.emparr){
						this.del(this.topEmployee,u);
					}
					for(let a of this.emparr){
						var bool = false;
						for(let b of this.emparr2){
							if(a.email == b.email){
								bool = true;
							}
						}
						if(bool == false){
							this.emparr3.push(a);
						}
					}

					break;
			}

				this.f2(v, name);
			}
			return 1;
		}
	}	
	f(obj,name,name2,des){	//tree creation
		if(obj.name == name){
			obj.subordinates.push(
			{
				name: name2,
				designation: des,
				subordinates: []
			});

			this. http.post(envin + '/branch/setjson',{token: localStorage.getItem('tokenbranch'), jsonn: JSON.stringify(this.topEmployee)})
			.map(response => response.json())
			.subscribe(res =>{
				console.log(res);
				this. http.post(envin + '/branch/getjson',{token: localStorage.getItem('tokenbranch')})
				.map(response => response.json())
				.subscribe(res =>{
					console.log(res.result[0]);
					this.topEmployee = JSON.parse(res.result[0].json);

					// team starts
					for(let emp of this.emparr){
						if(emp.email==name){
							this.empid1=emp.id;
							this.emp = emp.employees;
						}
						if(emp.email==name2){
							this.eid1=emp.id;
							this.empid2= this.emp +'-'+ emp.id;
						}
					}
					if(this.empid1 != null && this.empid2 != null ){
					this. http.post(envin + '/branch/updateEmployeemin5',{token: localStorage.getItem('tokenbranch'), id: this.empid1,employees: this.empid2})
				.map(response => response.json())
				.subscribe(res =>{
					console.log(res);
					this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
				.map(response => response.json())
				.subscribe(res =>{
					//console.log(res.result);
					this.emparr = res.result;
					this. http.post(envin + '/branch/updateEmployeemin6',{token: localStorage.getItem('tokenbranch'), id: this.eid1,employees: this.empid1})
				.map(response => response.json())
				.subscribe(res =>{
					console.log(res);
					this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
				.map(response => response.json())
				.subscribe(res =>{
					console.log(res.result);
					this.emparr = res.result;
				});
					
				});
				});
					
				});
				  }
				});
			});


			this.emparr2=[];this.emparr3=[];
			for(let u of this.emparr){
				this.del(this.topEmployee,u);
			}
			for(let a of this.emparr){
				var bool = false;
				for(let b of this.emparr2){
					if(a.email == b.email){
						bool = true;
					}
				}
				if(bool == false){
					this.emparr3.push(a);
				}
			}
		}
		else {
			for(let v of obj.subordinates){
				this.f(v,name,name2,des);
			}

		}
	}	
	del(obj,user){
		if(obj.name == user.email){
			this.emparr2.push(user);
		}
		else{
			for(let v of obj.subordinates){
				this.del(v,user);
			}
		}
		
	}

	ngOnInit(){

	}

}
