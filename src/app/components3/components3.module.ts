import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Footer3Component } from './footer3/footer3.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { Sidebar3Component } from './sidebar3/sidebar3.component';
@NgModule({
  imports: [
    CommonModule,
     RouterModule,
    NgbModule
  ],
  declarations: [
  	Footer3Component,
    Navbar3Component,
    Sidebar3Component],
  exports: [
    Footer3Component,
    Navbar3Component,
    Sidebar3Component
  ]
})
export class Components3Module { }
