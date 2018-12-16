import { EntityLayoutComponent } from './entity-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManageBranchesComponent } from '../../manage-branches/manage-branches.component';
import { PersonalizeEntityComponent } from '../../personalize-entity/personalize-entity.component';
import { PaypalEntityComponent } from '../../paypal-entity/paypal-entity.component';
import { SmtpEntityComponent } from '../../smtp-entity/smtp-entity.component';
import { ManageEmployeesEComponent } from '../../manage-employees-e/manage-employees-e.component';
import { BenefitsEComponent } from '../../benefits-e/benefits-e.component';
import { EquipmentsEComponent } from '../../equipments-e/equipments-e.component';

import { YourPackComponent } from '../../your-pack/your-pack.component';
import { AttReportsEComponent } from '../../att-reports-e/att-reports-e.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { EntityLayoutRoutes } from './entity-layout.routing';
import { Splite2Pipe } from '../../splite2.pipe';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EntityLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
  	ManageBranchesComponent,
    PersonalizeEntityComponent,
    PaypalEntityComponent,
    SmtpEntityComponent,
    ManageEmployeesEComponent,
    BenefitsEComponent,
    EquipmentsEComponent,
    AttReportsEComponent,
    YourPackComponent,
    Splite2Pipe,
    ]
})
export class EntityLayoutModule { }
