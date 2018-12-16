import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/entity/dashboard/your-package', title: 'Your Package',  icon:'location_map-big', class: '' },
    { path: '/entity/dashboard/manage-branches', title: 'Managing Branches',  icon: 'design_app', class: '' },
    { path: '/entity/dashboard/manage-employees', title: 'Manage Employees',  icon:'location_map-big', class: '' },
    { path: '/entity/dashboard/benefits', title: 'Employee Benefits',  icon:'location_map-big', class: '' },
    { path: '/entity/dashboard/equipments', title: 'Employee Equipments',  icon:'location_map-big', class: '' },
    { path: '/entity/dashboard/personalize', title: 'Personalize',  icon:'education_atom', class: '' },
   //{ path: '/entity/dashboard/paypalconfig', title: 'Paypal Configuration',  icon:'location_map-big', class: '' },
   // { path: '/entity/dashboard/smtpconfig', title: 'SMTP Configuration',  icon:'ui-1_bell-53', class: '' },  
  ];
@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.scss']
})
export class Sidebar2Component implements OnInit {
menuItems: any[];

  constructor() { }

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
