import { BranchLayoutComponent } from './branch-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageBranchesComponent } from '../../manage-branches/manage-branches.component';
import { PersonalizeEntityComponent } from '../../personalize-entity/personalize-entity.component';
import { PaypalEntityComponent } from '../../paypal-entity/paypal-entity.component';
import { SmtpEntityComponent } from '../../smtp-entity/smtp-entity.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BranchLayoutRoutes } from './branch-layout.routing';
import { ManageEmployeesComponent } from '../../manage-employees/manage-employees.component';

import { AppraisalPeriodComponent } from '../../appraisal-period/appraisal-period.component';
import { AppraisalAssignComponent } from '../../appraisal-assign/appraisal-assign.component';
import { AppraisalMyComponent } from '../../appraisal-my/appraisal-my.component';
import { BenifitsComponent } from '../../benifits/benifits.component';
import { EquipmentsComponent } from '../../equipments/equipments.component';
import { EmpDpComponent } from '../../emp-dp/emp-dp.component';
import { EmployeesAttendanceComponent } from '../../employees-attendance/employees-attendance.component';

import { HolidayBookComponent } from '../../holiday-book/holiday-book.component';
import { HolidayTypeComponent } from '../../holiday-type/holiday-type.component';
import { HolidayType2Component } from '../../holiday-type2/holiday-type2.component';
import { HolidayhrComponent } from '../../holidayhr/holidayhr.component';
import { Holidayhr2Component } from '../../holidayhr2/holidayhr2.component';
import { AttReportsBComponent } from '../../att-reports-b/att-reports-b.component';
import { BlankBranchComponent } from '../../blank-branch/blank-branch.component';
import { Hrconfig1Component } from '../../hrconfig1/hrconfig1.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HandBookHrComponent } from '../../hand-book-hr/hand-book-hr.component';
import { PendingHolidayComponent } from '../../pending-holiday/pending-holiday.component';
import { HandbookEmpComponent } from '../../handbook-emp/handbook-emp.component';

import { WeeklyReportHrComponent } from '../../weekly-report-hr/weekly-report-hr.component';
import { WeeklyReportEmpComponent } from '../../weekly-report-emp/weekly-report-emp.component';

import { Response1Component } from '../../response1/response1.component';
import { Response2Component } from '../../response2/response2.component';
import { ChartComponent } from '../../chart/chart.component';
import { OrgChartModule } from 'ng2-org-chart';
import { ReimbusmentComponent } from '../../reimbusment/reimbusment.component';
import { BusinessTripDetailsComponent } from '../../business-trip-details/business-trip-details.component';
import { BusinessTripFormComponent } from '../../business-trip-form/business-trip-form.component';
import { BusinessTripApprovalComponent } from '../../business-trip-approval/business-trip-approval.component';
import { GrievanceComponent } from '../../grievance/grievance.component';
import { DisciplinaryComponent } from '../../disciplinary/disciplinary.component';
import { GrievanceDisciplinaryComponent } from '../../grievance-disciplinary/grievance-disciplinary.component';
import { MyInfoComponent } from '../../my-info/my-info.component';
import { AppraisalObjComponent } from '../../appraisal-obj/appraisal-obj.component';
import { HolidayHistoryComponent } from '../../holiday-history/holiday-history.component';

import { TeamAttndRepComponent } from '../../team-attnd-rep/team-attnd-rep.component';
import { TeamApproveDayComponent } from '../../team-approve-day/team-approve-day.component';
import { TeamAppraisalEvalComponent } from '../../team-appraisal-eval/team-appraisal-eval.component';
import { TeamAppraisalSettingComponent } from '../../team-appraisal-setting/team-appraisal-setting.component';
import { TeamReportViewComponent } from '../../team-report-view/team-report-view.component';
import { TeamDiscResComponent } from '../../team-disc-res/team-disc-res.component';
import { TeamTripApproveComponent } from '../../team-trip-approve/team-trip-approve.component';
import { ChartViewComponent } from '../../chart-view/chart-view.component';
import { TeamFileDiscComponent } from '../../team-file-disc/team-file-disc.component';
import { TeamPipe } from '../../team.pipe';
import { NoticeBoard1Component } from '../../notice-board1/notice-board1.component';
import { NoticeBoard2Component } from '../../notice-board2/notice-board2.component';
import { AppointmentYourComponent } from '../../appointment-your/appointment-your.component';
import { AppointmentApproveComponent } from '../../appointment-approve/appointment-approve.component';
import { AppointmentBookComponent } from '../../appointment-book/appointment-book.component';
import { FullCalendarModule } from 'ng-fullcalendar';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BranchLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    PdfViewerModule,
    AngularFileUploaderModule,
    ToastrModule.forRoot(),
    OrgChartModule,
    FullCalendarModule
  ],
  declarations: [
  AppraisalObjComponent,
  HolidayHistoryComponent,
  AppointmentYourComponent,
  AppointmentApproveComponent,
  AppointmentBookComponent,
  	ManageEmployeesComponent,
    EmployeesAttendanceComponent,
    EmpDpComponent,
    BenifitsComponent,
    EquipmentsComponent,
    Hrconfig1Component,
    AttReportsBComponent,
    HolidayhrComponent,
    Holidayhr2Component,
    HolidayTypeComponent,
    HolidayType2Component,
    HolidayBookComponent,
    PendingHolidayComponent,
    HandBookHrComponent,
    HandbookEmpComponent,
    WeeklyReportEmpComponent,
    WeeklyReportHrComponent,
    AppraisalPeriodComponent,
    AppraisalAssignComponent,
    AppraisalMyComponent,
    Response1Component,
    Response2Component,
    MyInfoComponent,
    GrievanceComponent,
    DisciplinaryComponent,
    GrievanceDisciplinaryComponent,
    BusinessTripDetailsComponent,
    BusinessTripFormComponent,
    BusinessTripApprovalComponent,
    ReimbusmentComponent,
    ChartComponent,
    TeamAttndRepComponent,
    TeamApproveDayComponent,
    TeamAppraisalEvalComponent,
    TeamAppraisalSettingComponent,
    TeamReportViewComponent,
    TeamDiscResComponent,
    TeamTripApproveComponent,
    TeamFileDiscComponent,
    ChartViewComponent,
    TeamPipe,
    NoticeBoard1Component,
    NoticeBoard2Component
    ]
})
export class BranchLayoutModule { }