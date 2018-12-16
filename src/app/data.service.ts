import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
//url to backend without ending slash.
export const envin = 'https://employee-manager202.herokuapp.com';

export interface packagetype{
  name: string,
  minusers: number,
  pricepermonth: number,
  priceperyear: number,
  trialdur: string,
  id: number,
  description?:string
}
export interface getpacktype{
  success: boolean;
  msg: string;
  package: packagetype;
}
//all routes
// https://ischoolsys.com
// http://hrms-env.pnmwis8wme.us-east-2.elasticbeanstalk.com
// https://employee-manager202.herokuapp.com
// http://node-express-env.9f5c7smabm.us-east-2.elasticbeanstalk.com
// http://hrmanager-env.hkvp8dtgqc.us-east-2.elasticbeanstalk.com
@Injectable()
export class DataService {
  brancharr2:any[]=[];idlist
   branchtype: string;
   brancharray: any[];
   benifits: string;
   benifitsarr: string[] = [];
   benifitsarr2: string[] = [];
   equipments: string;
   equipmentsarr: string[] = []; //.toString() opposite
   equipmentsarr2: string[] = [];
   benifitse: string;
   benifitsarre: string[] = [];
   benifitsarr2e: string[] = [];
   equipmentse: string;
   equipmentsarre: string[] = [];
   equipmentsarr2e: string[] = [];
   emptypearr: any[]; 
   emptype: any;
   emprolearr: any[];
   empdparr: any[];
  newbranches: any[] =[
  {name: 'scotland',
    email: 'scotishmanager@gmail.com'
 },{name: 'Finland',
    email: 'finishmanager@gmail.com'
 },{name: 'Ireland',
    email: 'irishmanager@gmail.com'
 }
  ] 
  tryfreebool: boolean = false;
  tryfree(){
  }
  run_zero(){
    this.http.post(envin + '/notification/markRead/overtime',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/notification/branch',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
       console.log(res);
      if(res.result != null && res.result != undefined){
      console.log(res);
      this.overtime = res.result[0].overtime;
      this.holiday = res.result[0].holidayrequests;
      this.appraisal=res.result[0].appraisal;
      this.grievances=res.result[0].grievances;
      this.reports=res.result[0].reports;
      this.trip=res.result[0].trip;
    }
    });
    });
     this.http.post(envin + '/notification/markRead/holidayrequests',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/notification/branch',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
       console.log(res);
      if(res.result != null && res.result != undefined){
      console.log(res);
      this.overtime = res.result[0].overtime;
      this.holiday = res.result[0].holidayrequests;
      this.appraisal=res.result[0].appraisal;
      this.grievances=res.result[0].grievances;
      this.reports=res.result[0].reports;
      this.trip=res.result[0].trip;
    }
    });
    });
     this.http.post(envin + '/notification/markRead/report',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/notification/branch',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
       console.log(res);
      if(res.result != null && res.result != undefined){
      console.log(res);
      this.overtime = res.result[0].overtime;
      this.holiday = res.result[0].holidayrequests;
      this.appraisal=res.result[0].appraisal;
      this.grievances=res.result[0].grievances;
      this.reports=res.result[0].reports;
      this.trip=res.result[0].trip;
    }
    });
    });
     this.http.post(envin + '/notification/markRead/trip',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/notification/branch',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
       console.log(res);
      if(res.result != null && res.result != undefined){
      console.log(res);
      this.overtime = res.result[0].overtime;
      this.holiday = res.result[0].holidayrequests;
      this.appraisal=res.result[0].appraisal;
      this.grievances=res.result[0].grievances;
      this.reports=res.result[0].reports;
      this.trip=res.result[0].trip;
    }
    });
    });
     this.http.post(envin + '/notification/markRead/complaints',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/notification/branch',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
       console.log(res);
      if(res.result != null && res.result != undefined){
      console.log(res);
      this.overtime = res.result[0].overtime;
      this.holiday = res.result[0].holidayrequests;
      this.appraisal=res.result[0].appraisal;
      this.grievances=res.result[0].grievances;
      this.reports=res.result[0].reports;
      this.trip=res.result[0].trip;
    }
    });
    });
     this.http.post(envin + '/notification/markRead/appraisal',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/notification/branch',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
       console.log(res);
      if(res.result != null && res.result != undefined){
      console.log(res);
      this.overtime = res.result[0].overtime;
      this.holiday = res.result[0].holidayrequests;
      this.appraisal=res.result[0].appraisal;
      this.grievances=res.result[0].grievances;
      this.reports=res.result[0].reports;
      this.trip=res.result[0].trip;
    }
    });
    });
  }
  constructor(public http: Http, public router : Router) { 

  } //role
    createemty(val){
      
    this. http.post(envin + '/emptype',{token: localStorage.getItem('tokenadmin'),
    name: val })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.get(envin + '/emptype')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.emptype);
      this.emptypearr = res.emptype;
    });
    });
    }
    createemrl(val){
    this. http.post(envin + '/role',{token: localStorage.getItem('tokenadmin'),
    name: val })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this. http.get(envin + '/role')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.emprolearr = res.role;
    });
    });
    } //dropemptype
    dropemtype(val){
    this. http.post(envin + '/dropemptype',{token: localStorage.getItem('tokenadmin'),
    id: val })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
    this. http.get(envin + '/emptype')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.emptypearr = res.emptype;
    });
    });
    }

    dropemrl(val){
    this. http.post(envin + '/droprole',{token: localStorage.getItem('tokenadmin'),
    id: val })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
    this. http.get(envin + '/role')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.emprolearr = res.role;
    });
    });
    }
    createdp(val){
    this. http.post(envin + '/addempdepart',{token: localStorage.getItem('tokenbranch'),
    name: val })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this. http.post(envin + '/getempdepart',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.empdparr = res.emptype;
    });
    });
    }

  public now: any;public displaynow: any;
  colorarray: string[]=['default','green','red','orange','yellow','blue'];
  selectedcolor: string  = 'default';
  fontarray: string[]=[
  '\'Roboto\', sans-serif',
  '\'Do Hyeon\', sans-serif',
  '\'Open Sans\', sans-serif',
  '\'Lato\', sans-serif',
  '\'Montserrat\', sans-serif',
  '\'Source Sans Pro\', sans-serif',
  '\'Roboto Condensed\', sans-serif',
  '\'Raleway\', sans-serif',
  '\'PT Sans\', sans-serif',
  '\'Roboto Slab\', serif',
  '\'Josefin Sans\', sans-serif',
  '\'Lobster\', cursive',
  '\'Abril Fatface\', cursive',
  '\'Source Code Pro\', monospace',];
  selectedfont: string = '';
  setcolor(val){
     this. http.post(envin + '/entity/personalize',{token: localStorage.getItem('tokenentity'), color:val, font: this.selectedfont})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/entity/bio',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.selectedcolor = res.bio[0].color;
      this.selectedcolor = this.selectedcolor || 'default';
      this.selectedfont = res.bio[0].font;
      this.selectedfont = this.selectedfont || '\'Montserrat\', sans-serif';
    });
    });

    //this.selectedcolor= val;

  }
  selectedcolor2:string = 'default';
  selectedfont2:string;
  setfont(val){
       this. http.post(envin + '/entity/personalize',{token: localStorage.getItem('tokenentity'), font:val, color: this.selectedcolor})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/entity/bio',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.selectedcolor = res.bio[0].color;
      this.selectedcolor = this.selectedcolor || 'default';
      this.selectedfont = res.bio[0].font;
      this.selectedfont = this.selectedfont || '\'Montserrat\', sans-serif';
    });
    });
  //  this.selectedfont= val;
  }
		//above is package code
    packagesall: packagetype[];
 featureArray: string[]=['feature 1', 'feature 2','feature 3','feature 4', 'feature 5','feature 6',];

  allfeatureArray: string[]=['Feature 1', 'Feature 2', 'Feature 3'];
  featureValues:string[]= [...this.featureArray];
  cur_pack: packagetype = {
    name: '',
    minusers: 0,
    pricepermonth: 0,
    priceperyear: 0,
    trialdur:'',
    id: 0
  };
  cur_pack2: packagetype = {
    name: '',
    minusers: 0,
    pricepermonth: 0,
    priceperyear: 0,
    trialdur:'',
    id: 0
  };
  appraisal='';
  grievances='';
  reports='';
  trip='';
  finarr: any[];
  shift_array: any[];
  yearname: any;
  sdate: any;
  edate: any;
  maxWH: any;
  minWH: any;
  minWHW: any;
  typeres: any[];
  days: string ='';
  dummy_feat: string[];
  dummy_feat_all: string[];
  yearid: any;
  dummy_feat2: string[];
  dummy_feat_all2: string[];
  editpackbool: boolean = false;
  crpackbool: boolean = false;
  cur_pack_no: number=0;
  typearr: any[]=[];
  overtime: any;
  holiday: any;
  branch_idtobr(id){
    console.log(this.brancharray);
    for(let val of this.brancharray){
      if(val.id == id) return val.name;
    }
  }
  result: any;
  oninit(){
       this. http.get('https://status-check-status.herokuapp.com/')
    .map(response => response.json())
    .subscribe(res =>{
        this.result = res.result;
        localStorage.setItem('result',res.result); 
        this.result = localStorage.getItem('result');
    });
        setInterval(()=> {
      this.now = moment();
      this.displaynow = this.now.format("ddd, MMM Do YY, H:mm:ss");
      },1000);
    console.log(localStorage.getItem('tokenentity'));
    if( localStorage.getItem('tokenentity') != '' &&  localStorage.getItem('tokenentity') != null){
       this.http.post(envin + '/entity/bio',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.selectedcolor = res.bio[0].color;
      this.selectedcolor = this.selectedcolor || 'default';
      this.selectedfont = res.bio[0].font;
      this.selectedfont = this.selectedfont || '\'Montserrat\', sans-serif';
    });

      this. http.post(envin + '/entity/getAllBranch',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result);
      this.brancharray = res.result;
    });
     this. http.post(envin + '/entity/getempben',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.benifitsarre = res.emptype;
    });
    this. http.post(envin + '/entity/getempequ',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.equipmentsarre=res.emptype;
    });
  }
  if(localStorage.getItem('tokenbranch') != '' && localStorage.getItem('tokenbranch') !=null && localStorage.getItem('tokenbranch') !=undefined ){
       this.http.post(envin + '/branch/getMyPackage',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);

      this.selectedcolor2 = res.result[0].color;
      this.selectedcolor2 = this.selectedcolor2 || 'default';
      this.selectedfont2 = res.result[0].font;
      this.selectedfont2 = this.selectedfont2 || '\'Montserrat\', sans-serif';
    });
     this.http.post(envin + '/branch/getyears',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.finarr = res.result;
    });
    this.http.post(envin + '/notification/branch',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
       console.log(res);
      if(res.result != null && res.result != undefined){
      console.log(res);
      this.overtime = res.result[0].overtime;
      this.holiday = res.result[0].holidayrequests;
      this.appraisal=res.result[0].appraisal;
      this.grievances=res.result[0].grievances;
      this.reports=res.result[0].reports;
      this.trip=res.result[0].trip;
    }
    });
     this.http.post(envin + '/holiday/getHolidayEmployee',{token: localStorage.getItem('tokenbranch'),type: this.emptype })
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res);
        this.typeres = res.result;
      });
    this.http.post(envin + '/holiday/getHolidayTypes',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.typearr = res.result;
    });
    this.http.post(envin + '/branch/getyears',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.finarr = res.result;
    });
     this. http.post(envin + '/branch/getempben',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.benifitsarr = res.emptype;
    });
    this. http.post(envin + '/branch/getempequ',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.equipmentsarr=res.emptype;
     
    });
     this. http.get('https://status-check-status.herokuapp.com/')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
        this.result = res.result;
        localStorage.setItem('result',res.result); 
        this.result = localStorage.getItem('result');
    });
    this. http.post(envin + '/branch/getshift',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result);
      this.shift_array = res.result;
    });
    this. http.post(envin + '/branch/getlimit',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      if(res.result != undefined){
      this.yearid = res.result[0].yearid;
      this.yearname = res.result[0].yearname;
      this.sdate= res.result[0].sdate;
      this.edate= res.result[0].edate;
      this.sdate= this.sdate.split('T',1);
      this.edate= this.edate.split('T',1);
      this.maxWH= res.result[0].maxWH;
      this.minWH= res.result[0].minWH;
      this.minWHW= res.result[0].minWHW;
      this.days= res.result[0].days;}
      //this.displayday = '';
      //this.displayday = this.dayarr[this.data.days.charAt(0)] + ' to ' + this.dayarr[
      //this.data.days.charAt(this.data.days.length-1)];
    });
  }
    /*
      this.http.post('https://employee-manager202.herokuapp.com/getempdepart',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.empdparr = res.emptype;
    });*/


    this.http.get(envin + '/emptype')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.emptypearr = res.emptype;
    });
    this.http.get(envin + '/features')
    .map(response => response.json())
    .subscribe(res =>{
      this.featureArray = res.feature;
      this.featureValues = res.feature;
    });
    this.http.get(envin + '/role')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.emprolearr = res.role;
    });
    this.http.get(envin + '/package')
    .map(response => response.json())
    .subscribe(res =>{this.packagesall = res.package;
      console.log(res.package);
      console.log(this.packagesall)
    });
     this. http.get('https://status-check-status.herokuapp.com/')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
        this.result = res.result;
        localStorage.setItem('result',res.result); 
        this.result = localStorage.getItem('result');
    });
    this.dummy_feat_all2=[...this.featureArray];
  }
    editFeature(i){
        this.featureArray=[...this.featureValues];
        this.dummy_feat_all=[...this.featureArray];
      //send post req of the new featureArray
        console.log(this.featureArray);
        console.log(this.featureValues);
         this. http.get('https://status-check-status.herokuapp.com/')
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
        this.result = res.result;
        localStorage.setItem('result',res.result); 
        this.result = localStorage.getItem('result');
    });
  }
  createFeature(value){
      this. http.post(envin + '/featureadd',{token: localStorage.getItem('tokenadmin'), name: value })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this. http.get(envin + '/features')
    .map(response => response.json())
    .subscribe(res2 =>{
      console.log(res2);
      this.featureArray = res.feature;
      this.featureValues = res.feature;
      this.dummy_feat_all=[...this.featureArray];
    });
    });

  }

  deletefeature(i){
    this.featureArray.splice(i, 1);
    this.featureValues.splice(i, 1);
    this.dummy_feat_all=[...this.featureArray];

  }
 

    editpack(i){ 
      console.log(i);
      this.dummy_feat_all=[...this.featureArray];
      this.cur_pack = this.packagesall[i];
      this.cur_pack_no = i;
      this.editpackbool = true;
  }
  Submit_edit(obj, i){
    console.log(localStorage.getItem('tokenadmin'));
    console.log(obj.id);
    this. http.post(envin + '/packageupdate',{
    token: localStorage.getItem('tokenadmin'),
    name: obj.Name,
    // Description: obj.Description,
    minusers: obj.min_users,
    pricepermonth: obj.price_per_month,
    priceperyear: obj.price_per_year,
    //Features: this.dummy_feat2,
    trialdur: obj.trial_dur,
    id: obj.id})
    .map(response => response.json())
    .subscribe(res =>{
      if(res.success){
          this.http.get(envin + '/package')
    .map(response => response.json())
    .subscribe(res =>{this.packagesall = res.package;
      console.log(res.package)
    });
      }
      console.log(res)});
    console.log(obj);
    console.log(this.packagesall[i]);
    this.editpackbool = false;
  }
  adlogout(){
    localStorage.setItem('tokenadmin', '');
    localStorage.setItem('branchtype','');
    for(let i=16; i<=28; i++){
      localStorage.setItem('feat'+i,'false');     //feat16 to feat28
     
    }
    this.router.navigate(['']);
  }
  enlogout(){
    localStorage.setItem('tokenentity', '');
    this.router.navigate(['']);
  }
  brlogout(){
    localStorage.setItem('tokenbranch', '');
    this.router.navigate(['']);
  }
  alladd(val,i){
  	this.dummy_feat.push(val);
  	this.dummy_feat_all.splice(i, 1);

  }
  seldel(val,i){
  	this.dummy_feat.splice(i, 1);
  	this.dummy_feat_all.push(val);
  }
  gobacktoedit(){
  	this.editpackbool = false;
  }
  crpack(){
  	this.crpackbool = true;	
  	this.dummy_feat2 = [];  
  }
  Submit_cr(obj, i){
    this. http.post(envin + '/packageadd',{
      token: localStorage.getItem('tokenadmin'),
      name: obj.Name,
    minusers: obj.min_users,
    pricepermonth: obj.price_per_month,
    priceperyear: obj.price_per_year,
    trialdur: obj.trial_dur,})
    .map(response => response.json())
    .subscribe(res =>{
      if(res.success){
      this.http.get(envin + '/package')
    .map(response => response.json())
    .subscribe(res =>{this.packagesall = res.package;
      console.log(res.package)});
      }
      console.log(res)});
      console.log(obj);
      console.log(this.packagesall[i]);
      this.crpackbool = false;
    }
    alladd2(val,i){
      this.dummy_feat2.push(val);
      this.dummy_feat_all2.splice(i, 1);
    }
    seldel2(val,i){
      this.dummy_feat2.splice(i, 1);
      this.dummy_feat_all2.push(val);
    }
    gobacktocr(){
      this.crpackbool = false;
    }
  deletepackage(i,j){
    console.log(i); console.log(j);
    this. http.post(envin + '/packagedelete',{id: i,token: localStorage.getItem('tokenadmin'),})
    .map(response => response.json())
    .subscribe(res =>{
      if(res.success){
      this.http.get(envin + '/package')
      .map(response => response.json())
      .subscribe(res =>{this.packagesall = res.package;
      console.log(res.package);console.log(localStorage.getItem('tokenadmin'));});
      }
      console.log(res)});
  }


}
 