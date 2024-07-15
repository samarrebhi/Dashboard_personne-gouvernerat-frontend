import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { DetailsPersonneComponent } from 'app/pages/details-personne/details-personne.component';
import {EditPersonneComponent} from '../../pages/edit-personne/edit-personne.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'edit-personne',  component: EditPersonneComponent },


    { path: 'personne/details-personne/:id',  component: DetailsPersonneComponent },

    {
        path:'personne/getbyid/:id',component:DetailsPersonneComponent
      },
      {
        path:'personne/update-personne/:id',component:EditPersonneComponent
      }
];
