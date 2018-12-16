import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard/manage-entity', title: 'Manage Entity',  icon:'design_bullet-list-67', class: '' },
    { path: '/dashboard/features', title: 'Features',  icon: 'design_app', class: '' },
    { path: '/dashboard/packages', title: 'Packages',  icon:'education_atom', class: '' },
    { path: '/dashboard/emp-type', title: 'Employee Type',  icon:'design_bullet-list-67', class: '' },
    { path: '/dashboard/roles', title: 'Employee Roles',  icon:'design_bullet-list-67', class: '' },
    { path: '/dashboard/paypalconfig', title: 'Paypal Config',  icon:'ui-1_bell-53', class: '' },
    { path: '/dashboard/smtpconfig', title: 'SMTP Config',  icon:'users_single-02', class: '' },
    { path: '/dashboard/taxconfig', title: 'Tax Config',  icon:'design_bullet-list-67', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
