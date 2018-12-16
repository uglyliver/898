import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component'

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { EntityLayoutComponent } from './layouts/entity-layout/entity-layout.component';
import { EntityloginComponent } from './entitylogin/entitylogin.component';
import { EntityverifyComponent } from './entityverify/entityverify.component';

import { ChartComponent } from './chart/chart.component';
import { LoginComponent } from './login/login.component';

import { BranchLayoutComponent } from './layouts/branch-layout/branch-layout.component';
import { BranchloginComponent } from './branchlogin/branchlogin.component';
import { BranchverifyComponent } from './branchverify/branchverify.component';
import { BlankBranchComponent } from './blank-branch/blank-branch.component';
let param: string = 'manage-branches';
const routes: Routes =[
  {
    path: '',
    component: TestComponent,
  },
  {
    path: 'terms-conditions',
    component: BlankBranchComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard/packages',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
   {
    path: 'entity/login',
    component: EntityloginComponent,
  },
   {
    path: 'entity/verify/:id',
    component: EntityverifyComponent,
  },
    {
    path: 'entity/dashboard',
    redirectTo: 'entity/dashboard/manage-branches',
    pathMatch: 'full',
  },
  {
    path: 'entity/dashboard',
    component: EntityLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/entity-layout/entity-layout.module#EntityLayoutModule'
  }]},
   {
    path: 'branch/login',
    component: BranchloginComponent,
  },
   {
    path: 'branch/verify/:id',
    component: BranchverifyComponent,
  },
    {
    path: 'branch/dashboard',
    redirectTo: 'branch/dashboard/',
    pathMatch: 'full',
  },
  {
    path: 'branch/dashboard',
    component: BranchLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/branch-layout/branch-layout.module#BranchLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
