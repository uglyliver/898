import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

import { ManageEntitiesComponent } from '../../manage-entities/manage-entities.component';

import { RolesComponent } from '../../roles/roles.component';
import { EmpTypeComponent } from '../../emp-type/emp-type.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'features',       component: DashboardComponent },
    { path: 'roles',       component: RolesComponent },
    { path: 'smtpconfig',   component: UserProfileComponent },
    { path: 'taxconfig',     component: TableListComponent },
    { path: 'raw',     component: TypographyComponent },
    { path: 'packages',       component: IconsComponent },
    { path: 'managingsubscribers',           component: MapsComponent },
    { path: 'paypalconfig',  component: NotificationsComponent },
    { path: 'emp-type',  component: EmpTypeComponent },
    { path: 'manage-entity',  component: ManageEntitiesComponent },
];
