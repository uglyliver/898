import { Component, OnInit } from '@angular/core';


import {envin} from '../../data.service'; //envin + '


import { Http } from '@angular/http';
import {DataService} from '../../data.service';
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export let ROUTES: RouteInfo[]=[];
@Component({
  selector: 'app-sidebar3',
  templateUrl: './sidebar3.component.html',
  styleUrls: ['./sidebar3.component.scss']
})
export class Sidebar3Component implements OnInit {
setbool = false; 
col1 = 'rgba(0, 0, 0, 0.1)';
col2 = 'rgba(0, 0, 0, 0.1)';
col3 = 'rgba(0, 0, 0, 0.1)';
col4 = 'rgba(0, 0, 0, 0.1)';
col5 = 'rgba(0, 0, 0, 0.1)';
col6 = 'rgba(0, 0, 0, 0.1)';
col7 = 'rgba(0, 0, 0, 0.1)';
col8 = 'rgba(0, 0, 0, 0.1)';
col9 = 'rgba(0, 0, 0, 0.1)';
col10 = 'rgba(0, 0, 0, 0.1)';
col11 = 'rgba(0, 0, 0, 0.1)';
col12 = 'rgba(0, 0, 0, 0.1)';
col13 = 'rgba(0, 0, 0, 0.1)';
col14 = 'rgba(0, 0, 0, 0.1)';
col1cl(){
    this.col1 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}
col2cl(){
    this.col2 = '#197cd3';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}col3cl(){
    this.col3 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}col4cl(){
    this.col4 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}col5cl(){
    this.col5 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
}col6cl(){
    this.col6 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}col7cl(){
    this.col7 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}col8cl(){
    this.col8 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}col9cl(){
    this.col9 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}col10cl(){
    this.col10 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}col11cl(){
    this.col11 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}col12cl(){
    this.col12 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}
col13cl(){
    this.col13 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col14 = 'rgba(0, 0, 0, 0.1)';
}
col14cl(){
    this.col14 = '#197cd3';
    this.col2 = 'rgba(0, 0, 0, 0.1)';
    this.col3 = 'rgba(0, 0, 0, 0.1)';
    this.col4 = 'rgba(0, 0, 0, 0.1)';
    this.col5 = 'rgba(0, 0, 0, 0.1)';
    this.col6 = 'rgba(0, 0, 0, 0.1)';
    this.col7 = 'rgba(0, 0, 0, 0.1)';
    this.col8 = 'rgba(0, 0, 0, 0.1)';
    this.col9 = 'rgba(0, 0, 0, 0.1)';
    this.col10 = 'rgba(0, 0, 0, 0.1)';
    this.col11 = 'rgba(0, 0, 0, 0.1)';
    this.col1 = 'rgba(0, 0, 0, 0.1)';
    this.col12 = 'rgba(0, 0, 0, 0.1)';
    this.col13 = 'rgba(0, 0, 0, 0.1)';
}

menuItems: any[];featlist:any[]=[
     'Attendance Taking','Holiday Management','Appraisal', 'Weekly Reporting','Grievance Management','Disciplinary Management',
'Business trip','Org chart creation'
 //Team conference(webRTC)
 //Appointment making
 //Project Management
 //Notice Board
 ,'Hand Book'
    ]
  constructor(public data : DataService, public http: Http) {//0=>basic 1=>silver 2=>gold 3=>platinum
    if(localStorage.getItem('branchtype') == 'manager'){
     ROUTES.push({ path: '/branch/dashboard/my-info', title: 'My Information',  icon:'design_bullet-list-67', class: '' });
     ROUTES.push({ path: '/branch/dashboard/manage-employees', title: 'Managing Employees',  icon: 'design_app', class: '' });
     ROUTES.push({ path: '/branch/dashboard/benefits', title: 'Benefits',  icon:'design_bullet-list-67', class: '' });
     ROUTES.push({ path: '/branch/dashboard/equipments', title: 'Equipments',  icon:'design_bullet-list-67', class: '' });
     ROUTES.push({ path: '/branch/dashboard/config', title: 'Branch Configurations',  icon:'design_bullet-list-67', class: '' });
      if(localStorage.getItem('feat16')=='true'){ 
          ROUTES.push({ path: '/branch/dashboard/attendance-reports', title: 'Branch Attendance reports',  icon: 'design_app', class: '' });
          ROUTES.push({ path: '/branch/dashboard/attendance', title: 'Your Attendance',  icon:'education_atom', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-attendance', title: 'Team Attendance reports',  icon: 'design_app', class: '' });
       }
      if(localStorage.getItem('feat17')=='true'){
          ROUTES.push({ path: '/branch/dashboard/view-holiday', title: 'View Public Holidays',  icon:'ui-1_bell-53', class: '' });
          ROUTES.push({ path: '/branch/dashboard/set-holiday', title: 'Set Public Holidays',  icon:'ui-1_bell-53', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/as-holiday-type', title: 'Assign Holidays Types',  icon:'ui-1_bell-53', class: '' });
          ROUTES.push({ path: '/branch/dashboard/cr-holiday-type', title: 'Create Holidays Types',  icon:'ui-1_bell-53', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/holiday-book', title: 'Book Holiday',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/holiday-requests', title: 'Approve Holidays',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-holiday', title: 'Team Holiday Approval',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/holiday-history', title: 'Holiday History',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat18')=='true'){//appraisal-objective
          ROUTES.push({ path: '/branch/dashboard/appraisal-period', title: 'Appraisal Period',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/appraisal-assign', title: 'Appraisal Evaluate',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/appraisal-objective', title: 'Objective setting',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/appraisal-my', title: 'My Appraisal',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-objective', title: 'Team Objective setting',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-appraisal', title: 'Team Appraisal',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat19')=='true'){
          ROUTES.push({ path: '/branch/dashboard/weekly-report', title: 'View Reports',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/weekly-reports', title: 'Submit Report',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-reports', title: 'Team Weekly Reports',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat20')=='true'){
          ROUTES.push({ path: '/branch/dashboard/grievance', title: 'File Grievance',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/grievance-response', title: 'Grievance Response',  icon:'design_bullet-list-67', class: '' });
          for(let a of ROUTES){
              if(a.title == 'Grievance & Disciplinary'){
                 this.setbool = true;
              }
          }
          if(this.setbool!=true){
        //  ROUTES.push({ path: '/branch/dashboard/grievance-disciplinary', title: 'Grievance & Disciplinary',  icon:'design_bullet-list-67', class: '' });  
          this.setbool=false;
          }
          if(this.setbool ==true)this.setbool=false;
     }
      if(localStorage.getItem('feat21')=='true'){
          ROUTES.push({ path: '/branch/dashboard/disciplinary-action', title: 'File Disciplinary',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/disciplinary-response', title: 'Disciplinary Response',  icon:'design_bullet-list-67', class: '' });
           ROUTES.push({ path: '/branch/dashboard/team-disc-res', title: 'Team Grievance Response',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-file-disc', title: 'File Team Disciplinary',  icon:'design_bullet-list-67', class: '' });
         for(let a of ROUTES){
              if(a.title == 'Grievance & Disciplinary'){
                 this.setbool = true;
              }
          }
          if(this.setbool!=true){
         // ROUTES.push({ path: '/branch/dashboard/grievance-disciplinary', title: 'Grievance & Disciplinary',  icon:'design_bullet-list-67', class: '' });  
          this.setbool=false;
          }
      }
      if(localStorage.getItem('feat22')=='true'){
          ROUTES.push( { path: '/branch/dashboard/business-trip-details', title: 'Set Business Trip Info',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/business-trip-request', title: 'Request Business Trip',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-trip-approve', title: 'Team Trip Approval',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/business-trip-approval', title: 'Approve Trips',  icon:'design_bullet-list-67', class: '' });
      }//team-trip-approve
      if(localStorage.getItem('feat23')=='true'){
     //    ROUTES.push({ path: '/branch/dashboard/reimbursement', title: 'Approve reimbursement',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat24')=='true'){
          ROUTES.push({ path: '/branch/dashboard/chart', title: 'Chart',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/view-chart', title: 'View Chart',  icon:'design_bullet-list-67', class: '' });
      }
      if(localStorage.getItem('feat26')=='true'){
          ROUTES.push({ path: '/branch/dashboard/your-appointment', title: 'Your Appointment',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/approve-appointment', title: 'Approve Appointment',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/book-appointment', title: 'Book Appointment',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat28')=='true'){
          ROUTES.push({ path: '/branch/dashboard/notice-board', title: 'Upload Notices',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/notice-board2', title: 'View Notices',  icon:'design_bullet-list-67', class: '' })
      }
       if(localStorage.getItem('feat29')=='true'){
          ROUTES.push({ path: '/branch/dashboard/handbook', title: 'Upload Handbook',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/view-handbook', title: 'View Handbook',  icon:'design_bullet-list-67', class: '' })
      }
    }
   else if(localStorage.getItem('branchtype') == 'hr'){
     ROUTES.push({ path: '/branch/dashboard/my-info', title: 'My Information',  icon:'design_bullet-list-67', class: '' });
     ROUTES.push({ path: '/branch/dashboard/config', title: 'Branch Configurations',  icon:'design_bullet-list-67', class: '' });
     ROUTES.push({ path: '/branch/dashboard/manage-employees', title: 'Managing Employees',  icon: 'design_app', class: '' });
     ROUTES.push({ path: '/branch/dashboard/benefits', title: 'Benefits',  icon:'design_bullet-list-67', class: '' });
     ROUTES.push({ path: '/branch/dashboard/equipments', title: 'Equipments',  icon:'design_bullet-list-67', class: '' });
    if(localStorage.getItem('feat16')=='true'){
           ROUTES.push({ path: '/branch/dashboard/attendance', title: 'Your Attendance',  icon:'education_atom', class: '' });  
           ROUTES.push({ path: '/branch/dashboard/team-attendance', title: 'Team Attendance reports',  icon: 'design_app', class: '' });
         }
      if(localStorage.getItem('feat17')=='true'){
          ROUTES.push({ path: '/branch/dashboard/view-holiday', title: 'View Public Holidays',  icon:'ui-1_bell-53', class: '' });
          ROUTES.push({ path: '/branch/dashboard/set-holiday', title: 'Set Public Holidays',  icon:'ui-1_bell-53', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/as-holiday-type', title: 'Assign Holidays Types',  icon:'ui-1_bell-53', class: '' });
          ROUTES.push({ path: '/branch/dashboard/cr-holiday-type', title: 'Create Holidays Types',  icon:'ui-1_bell-53', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/holiday-book', title: 'Book Holiday',  icon:'ui-1_bell-53', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-holiday', title: 'Team Holiday Approval',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/holiday-history', title: 'Holiday History',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat18')=='true'){
          ROUTES.push({ path: '/branch/dashboard/appraisal-period', title: 'Appraisal Period',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/appraisal-my', title: 'My Appraisal',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-objective', title: 'Team Objective setting',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-appraisal', title: 'Team Appraisal',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat19')=='true'){
          ROUTES.push({ path: '/branch/dashboard/weekly-reports', title: 'Submit Report',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-reports', title: 'Team Weekly Reports',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat20')=='true'){
        ROUTES.push({ path: '/branch/dashboard/grievance', title: 'File Grievance',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/grievance-response', title: 'Grievance Response',  icon:'design_bullet-list-67', class: '' });
          for(let a of ROUTES){
              if(a.title == 'Grievance & Disciplinary'){
                 this.setbool = true;
              }
          }
          if(this.setbool!=true){
          ROUTES.push({ path: '/branch/dashboard/grievance-disciplinary', title: 'Grievance & Disciplinary',  icon:'design_bullet-list-67', class: '' });  
          this.setbool=false;
          }
          if(this.setbool ==true)this.setbool=false;
      }
      if(localStorage.getItem('feat21')=='true'){
           // ROUTES.push({ path: '/branch/dashboard/disciplinary-action', title: 'File Disciplinary',  icon:'design_bullet-list-67', class: '' });
        //  ROUTES.push({ path: '/branch/dashboard/disciplinary-response', title: 'Disciplinary Response',  icon:'design_bullet-list-67', class: '' });
           ROUTES.push({ path: '/branch/dashboard/team-disc-res', title: 'Team Grievance Response',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-file-disc', title: 'File Team Disciplinary',  icon:'design_bullet-list-67', class: '' });
         for(let a of ROUTES){
              if(a.title == 'Grievance & Disciplinary'){
                 this.setbool = true;
              }
          }
          if(this.setbool!=true){
          ROUTES.push({ path: '/branch/dashboard/grievance-disciplinary', title: 'Grievance & Disciplinary',  icon:'design_bullet-list-67', class: '' });  
          this.setbool=false;
          }
      }
      if(localStorage.getItem('feat22')=='true'){
          ROUTES.push( { path: '/branch/dashboard/business-trip-details', title: 'Set Business Trip Info',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-trip-approve', title: 'Team Trip Approval',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/business-trip-request', title: 'Request Business Trip',  icon:'design_bullet-list-67', class: '' });  
      }
       if(localStorage.getItem('feat24')=='true'){
          ROUTES.push({ path: '/branch/dashboard/view-chart', title: 'View Chart',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/chart', title: 'Chart',  icon:'design_bullet-list-67', class: '' });
      }
      if(localStorage.getItem('feat26')=='true'){
          ROUTES.push({ path: '/branch/dashboard/your-appointment', title: 'Your Appointment',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/approve-appointment', title: 'Approve Appointment',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/book-appointment', title: 'Book Appointment',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat28')=='true'){
         ROUTES.push({ path: '/branch/dashboard/notice-board', title: 'Upload Notices',  icon:'design_bullet-list-67', class: '' });
         ROUTES.push({ path: '/branch/dashboard/notice-board2', title: 'View Notices',  icon:'design_bullet-list-67', class: '' })
      }
       if(localStorage.getItem('feat29')=='true'){
          ROUTES.push({ path: '/branch/dashboard/handbook', title: 'Upload Handbook',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/view-handbook', title: 'View Handbook',  icon:'design_bullet-list-67', class: '' })
      }

    }

   else if(localStorage.getItem('branchtype') == 'accounting') {

     ROUTES.push({ path: '/branch/dashboard/my-info', title: 'My Information',  icon:'design_bullet-list-67', class: '' });
      if(localStorage.getItem('feat16')=='true'){
          ROUTES.push({ path: '/branch/dashboard/attendance', title: 'Your Attendance',  icon:'education_atom', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-attendance', title: 'Team Attendance reports',  icon: 'design_app', class: '' });
         
      }
      if(localStorage.getItem('feat17')=='true'){
          ROUTES.push({ path: '/branch/dashboard/view-holiday', title: 'View Public Holidays',  icon:'ui-1_bell-53', class: '' });
          ROUTES.push({ path: '/branch/dashboard/holiday-book', title: 'Book Holiday',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/holiday-history', title: 'Holiday History',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-holiday', title: 'Team Holiday Approval',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat18')=='true'){
          ROUTES.push({ path: '/branch/dashboard/appraisal-my', title: 'My Appraisal',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-objective', title: 'Team Objective setting',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-appraisal', title: 'Team Appraisal',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat19')=='true'){
          ROUTES.push({ path: '/branch/dashboard/weekly-reports', title: 'Submit Report',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-reports', title: 'Team Weekly Reports',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat20')=='true'){
          ROUTES.push({ path: '/branch/dashboard/grievance', title: 'File Grievance',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/disciplinary-response', title: 'Disciplinary Response',  icon:'design_bullet-list-67', class: '' });
          
      }
       if(localStorage.getItem('feat21')=='true'){
         ROUTES.push({ path: '/branch/dashboard/team-disc-res', title: 'Team Grievance Response',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-file-disc', title: 'File Team Disciplinary',  icon:'design_bullet-list-67', class: '' });
         
      }

      if(localStorage.getItem('feat22')=='true'){
          ROUTES.push({ path: '/branch/dashboard/team-trip-approve', title: 'Team Trip Approval',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/business-trip-request', title: 'Request Business Trip',  icon:'design_bullet-list-67', class: '' });  
      }
      if(localStorage.getItem('feat23')=='true'){
          ROUTES.push({ path: '/branch/dashboard/reimbursement', title: 'Approve reimbursement',  icon:'design_bullet-list-67', class: '' });
      }
      if(localStorage.getItem('feat24')=='true'){
          ROUTES.push({ path: '/branch/dashboard/view-chart', title: 'View Chart',  icon:'design_bullet-list-67', class: '' });
      }
      if(localStorage.getItem('feat26')=='true'){
          ROUTES.push({ path: '/branch/dashboard/your-appointment', title: 'Your Appointment',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/approve-appointment', title: 'Approve Appointment',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/book-appointment', title: 'Book Appointment',  icon:'design_bullet-list-67', class: '' });
      }
      if(localStorage.getItem('feat28')=='true'){
          ROUTES.push({ path: '/branch/dashboard/notice-board2', title: 'View Notices',  icon:'design_bullet-list-67', class: '' })
      }
      if(localStorage.getItem('feat29')=='true'){
          ROUTES.push({ path: '/branch/dashboard/view-handbook', title: 'View Handbook',  icon:'design_bullet-list-67', class: '' })
      }
    }
   else {

     ROUTES.push({ path: '/branch/dashboard/my-info', title: 'My Information',  icon:'design_bullet-list-67', class: '' });
      if(localStorage.getItem('feat16')=='true'){
          ROUTES.push({ path: '/branch/dashboard/attendance', title: 'Your Attendance',  icon:'education_atom', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-attendance', title: 'Team Attendance reports',  icon: 'design_app', class: '' });
         
      }
      if(localStorage.getItem('feat17')=='true'){
          ROUTES.push({ path: '/branch/dashboard/view-holiday', title: 'View Public Holidays',  icon:'ui-1_bell-53', class: '' });
          ROUTES.push({ path: '/branch/dashboard/holiday-book', title: 'Book Holiday',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/holiday-history', title: 'Holiday History',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-holiday', title: 'Team Holiday Approval',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat18')=='true'){
          ROUTES.push({ path: '/branch/dashboard/appraisal-my', title: 'My Appraisal',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-objective', title: 'Team Objective setting',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-appraisal', title: 'Team Appraisal',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat19')=='true'){
          ROUTES.push({ path: '/branch/dashboard/weekly-reports', title: 'Submit Report',  icon:'design_bullet-list-67', class: '' });  
          ROUTES.push({ path: '/branch/dashboard/team-reports', title: 'Team Weekly Reports',  icon:'design_bullet-list-67', class: '' });
      }
       if(localStorage.getItem('feat20')=='true'){
          ROUTES.push({ path: '/branch/dashboard/grievance', title: 'File Grievance',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/disciplinary-response', title: 'Disciplinary Response',  icon:'design_bullet-list-67', class: '' });
         
      }

       if(localStorage.getItem('feat21')=='true'){
         ROUTES.push({ path: '/branch/dashboard/team-disc-res', title: 'Team Grievance Response',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/team-file-disc', title: 'File Team Disciplinary',  icon:'design_bullet-list-67', class: '' });
         
      }
      if(localStorage.getItem('feat22')=='true'){
         ROUTES.push({ path: '/branch/dashboard/team-trip-approve', title: 'Team Trip Approval',  icon:'design_bullet-list-67', class: '' });  
           ROUTES.push({ path: '/branch/dashboard/business-trip-request', title: 'Request Business Trip',  icon:'design_bullet-list-67', class: '' });  
      }
      if(localStorage.getItem('feat24')=='true'){
          ROUTES.push({ path: '/branch/dashboard/view-chart', title: 'View Chart',  icon:'design_bullet-list-67', class: '' });
      }
      if(localStorage.getItem('feat26')=='true'){
          ROUTES.push({ path: '/branch/dashboard/your-appointment', title: 'Your Appointment',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/approve-appointment', title: 'Approve Appointment',  icon:'design_bullet-list-67', class: '' });
          ROUTES.push({ path: '/branch/dashboard/book-appointment', title: 'Book Appointment',  icon:'design_bullet-list-67', class: '' });
      }
      if(localStorage.getItem('feat28')=='true'){
          ROUTES.push({ path: '/branch/dashboard/notice-board2', title: 'View Notices',  icon:'design_bullet-list-67', class: '' })
      }
      if(localStorage.getItem('feat29')=='true'){
          ROUTES.push({ path: '/branch/dashboard/view-handbook', title: 'View Handbook',  icon:'design_bullet-list-67', class: '' })
      }
    }
  }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
