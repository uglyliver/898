import { Routes } from '@angular/router';

import { ManageBranchesComponent } from '../../manage-branches/manage-branches.component';
import { PersonalizeEntityComponent } from '../../personalize-entity/personalize-entity.component';
import { PaypalEntityComponent } from '../../paypal-entity/paypal-entity.component';
import { SmtpEntityComponent } from '../../smtp-entity/smtp-entity.component';
import { ManageEmployeesComponent } from '../../manage-employees/manage-employees.component';
import { EmployeesAttendanceComponent } from '../../employees-attendance/employees-attendance.component';

import { BenifitsComponent } from '../../benifits/benifits.component';
import { EquipmentsComponent } from '../../equipments/equipments.component';
import { EmpDpComponent } from '../../emp-dp/emp-dp.component';

import { AttReportsBComponent } from '../../att-reports-b/att-reports-b.component';
import { HolidayTypeComponent } from '../../holiday-type/holiday-type.component';
import { HolidayType2Component } from '../../holiday-type2/holiday-type2.component';
import { WeeklyReportHrComponent } from '../../weekly-report-hr/weekly-report-hr.component';
import { WeeklyReportEmpComponent } from '../../weekly-report-emp/weekly-report-emp.component';

import { AppraisalPeriodComponent } from '../../appraisal-period/appraisal-period.component';
import { AppraisalAssignComponent } from '../../appraisal-assign/appraisal-assign.component';
import { AppraisalMyComponent } from '../../appraisal-my/appraisal-my.component';
import { HandbookEmpComponent } from '../../handbook-emp/handbook-emp.component';
import { HandBookHrComponent } from '../../hand-book-hr/hand-book-hr.component';
import { PendingHolidayComponent } from '../../pending-holiday/pending-holiday.component';
import { HolidayBookComponent } from '../../holiday-book/holiday-book.component';
import { HolidayhrComponent } from '../../holidayhr/holidayhr.component';
import { Holidayhr2Component } from '../../holidayhr2/holidayhr2.component';
import { BlankBranchComponent } from '../../blank-branch/blank-branch.component';
import { Hrconfig1Component } from '../../hrconfig1/hrconfig1.component';

import { BusinessTripDetailsComponent } from '../../business-trip-details/business-trip-details.component';
import { BusinessTripFormComponent } from '../../business-trip-form/business-trip-form.component';
import { BusinessTripApprovalComponent } from '../../business-trip-approval/business-trip-approval.component';
import { GrievanceComponent } from '../../grievance/grievance.component';
import { DisciplinaryComponent } from '../../disciplinary/disciplinary.component';
import { GrievanceDisciplinaryComponent } from '../../grievance-disciplinary/grievance-disciplinary.component';
import { MyInfoComponent } from '../../my-info/my-info.component';
import { ReimbusmentComponent } from '../../reimbusment/reimbusment.component';

import { Response1Component } from '../../response1/response1.component';
import { Response2Component } from '../../response2/response2.component';
import { AppraisalObjComponent } from '../../appraisal-obj/appraisal-obj.component';
import { HolidayHistoryComponent } from '../../holiday-history/holiday-history.component';
import { ChartComponent } from '../../chart/chart.component';


import { NoticeBoard1Component } from '../../notice-board1/notice-board1.component';
import { NoticeBoard2Component } from '../../notice-board2/notice-board2.component';
import { TeamAttndRepComponent } from '../../team-attnd-rep/team-attnd-rep.component';
import { TeamApproveDayComponent } from '../../team-approve-day/team-approve-day.component';
import { TeamAppraisalEvalComponent } from '../../team-appraisal-eval/team-appraisal-eval.component';
import { TeamAppraisalSettingComponent } from '../../team-appraisal-setting/team-appraisal-setting.component';
import { TeamReportViewComponent } from '../../team-report-view/team-report-view.component';
import { TeamDiscResComponent } from '../../team-disc-res/team-disc-res.component';
import { TeamTripApproveComponent } from '../../team-trip-approve/team-trip-approve.component';
import { ChartViewComponent } from '../../chart-view/chart-view.component';
import { TeamFileDiscComponent } from '../../team-file-disc/team-file-disc.component';

import { AppointmentYourComponent } from '../../appointment-your/appointment-your.component';
import { AppointmentApproveComponent } from '../../appointment-approve/appointment-approve.component';
import { AppointmentBookComponent } from '../../appointment-book/appointment-book.component';
export const BranchLayoutRoutes: Routes = [

    { path: 'manage-employees',       component: ManageEmployeesComponent },
    { path: 'attendance',       component: EmployeesAttendanceComponent },
    { path: 'benefits',       component: BenifitsComponent },
    { path: 'equipments',       component: EquipmentsComponent },
    { path: 'department',       component: EmpDpComponent },
    { path: 'config',       component: Hrconfig1Component },
    { path: 'attendance-reports',       component: AttReportsBComponent },
    { path: 'view-holiday',       component: HolidayhrComponent },
    { path: 'set-holiday',       component: Holidayhr2Component },
    { path: 'cr-holiday-type',       component: HolidayTypeComponent },
    { path: 'as-holiday-type',       component: HolidayType2Component },
    { path: 'holiday-book',       component: HolidayBookComponent },
    { path: 'holiday-requests',       component: PendingHolidayComponent },
    { path: 'handbook',       component: HandBookHrComponent },
    { path: 'view-handbook',       component: HandbookEmpComponent },
    { path: 'weekly-report',       component: WeeklyReportHrComponent },
    { path: 'weekly-reports',       component: WeeklyReportEmpComponent },
    { path: 'appraisal-period',       component: AppraisalPeriodComponent },
    { path: 'appraisal-assign',       component: AppraisalAssignComponent },
    { path: 'appraisal-my',       component: AppraisalMyComponent },
    { path: 'my-info',       component: MyInfoComponent },
    { path: 'grievance',       component: GrievanceComponent },
    { path: 'disciplinary-action',       component: DisciplinaryComponent },
    { path: 'grievance-disciplinary',       component: GrievanceDisciplinaryComponent },
    { path: 'business-trip-details',       component: BusinessTripDetailsComponent },
    { path: 'business-trip-request',       component: BusinessTripFormComponent },
    { path: 'business-trip-approval',       component: BusinessTripApprovalComponent },
    { path: 'reimbursement',       component: ReimbusmentComponent },
    { path: 'chart',       component: ChartComponent },
    { path: 'holiday-history',       component: HolidayHistoryComponent },
    { path: 'appraisal-objective',       component: AppraisalObjComponent },
    { path: 'grievance-response',       component: Response2Component},
    { path: 'disciplinary-response',       component: Response1Component },
    { path: 'team-attendance',       component: TeamAttndRepComponent },
    { path: 'team-holiday',       component: TeamApproveDayComponent },
    { path: 'team-appraisal',       component: TeamAppraisalEvalComponent },
    { path: 'team-objective',       component: TeamAppraisalSettingComponent },
    { path: 'team-reports',       component: TeamReportViewComponent },
    { path: 'team-disc-res',       component: TeamDiscResComponent },
    { path: 'team-file-disc',       component: TeamFileDiscComponent },
    { path: 'team-trip-approve',       component: TeamTripApproveComponent },
    { path: 'view-chart',       component: ChartViewComponent },
    { path: 'notice-board',  component: NoticeBoard1Component },
    { path: 'notice-board2',  component: NoticeBoard2Component },
    { path: 'your-appointment',       component: AppointmentYourComponent },
    { path: 'approve-appointment',  component: AppointmentApproveComponent },
    { path: 'book-appointment',  component: AppointmentBookComponent },
];
