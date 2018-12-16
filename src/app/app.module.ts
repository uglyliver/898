import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { Components2Module } from './components2/components2.module';
import { Components3Module } from './components3/components3.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EntityLayoutComponent } from './layouts/entity-layout/entity-layout.component';
import { BranchLayoutComponent } from './layouts/branch-layout/branch-layout.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DataService } from './data.service';
import { EventService } from './event.service';
import { TestComponent } from './test/test.component';
import { EntityloginComponent } from './entitylogin/entitylogin.component';
import { EntityverifyComponent } from './entityverify/entityverify.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BranchloginComponent } from './branchlogin/branchlogin.component';
import { BranchverifyComponent } from './branchverify/branchverify.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { DragulaModule } from 'ng2-dragula';
import { LoginComponent } from './login/login.component';
import { SplitePipe } from './splite.pipe';
import { AttendanceHistoryComponent } from './attendance-history/attendance-history.component';
import { BlankBranchComponent } from './blank-branch/blank-branch.component';
//BlankBranchComponent

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    Components2Module,
    Components3Module,
    RouterModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbModule.forRoot(),
    NgxCaptchaModule.forRoot({
      reCaptcha2SiteKey: '6LeJhXkUAAAAAI-xbAm87wVF2MiaTzyzyWfGman3'
    }),
    AmazingTimePickerModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TestComponent,
    EntityLayoutComponent,
    EntityloginComponent,
    EntityverifyComponent,
    BranchLayoutComponent,
    BranchloginComponent,
    BranchverifyComponent,
    BlankBranchComponent,
    LoginComponent,
    SplitePipe,
    AttendanceHistoryComponent,
  ],
  providers: [DataService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//6LeJhXkUAAAAAI-xbAm87wVF2MiaTzyzyWfGman3             SIR
//6Ld2OWQUAAAAAESAJGqwghNqQURw6W8rz-NDCrkN             ME