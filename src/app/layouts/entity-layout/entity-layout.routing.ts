import { Routes } from '@angular/router';

import { AttReportsEComponent } from '../../att-reports-e/att-reports-e.component';
import { ManageBranchesComponent } from '../../manage-branches/manage-branches.component';
import { PersonalizeEntityComponent } from '../../personalize-entity/personalize-entity.component';
import { PaypalEntityComponent } from '../../paypal-entity/paypal-entity.component';
import { SmtpEntityComponent } from '../../smtp-entity/smtp-entity.component';
import { ManageEmployeesEComponent } from '../../manage-employees-e/manage-employees-e.component';
import { BenefitsEComponent } from '../../benefits-e/benefits-e.component';
import { EquipmentsEComponent } from '../../equipments-e/equipments-e.component';

import { YourPackComponent } from '../../your-pack/your-pack.component';
export const EntityLayoutRoutes: Routes = [
    { path: 'manage-branches',       component: ManageBranchesComponent },
    { path: 'manage-employees',   component: ManageEmployeesEComponent },
    { path: 'paypalconfig',     component: PaypalEntityComponent },
    { path: 'smtpconfig',     component: SmtpEntityComponent },
    { path: 'personalize',     component: PersonalizeEntityComponent },
    { path: 'benefits',     component: BenefitsEComponent },
    { path: 'equipments',     component: EquipmentsEComponent },
    { path: 'attendance-reports',     component: AttReportsEComponent },
    { path: 'your-package',     component: YourPackComponent },
];
