import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EditPersonneComponent } from "./pages/edit-personne/edit-personne.component";
import { PersonneService } from "./personne.service";

import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms'
//import { MatSnackBar } from "@angular/material/snack-bar";


import { DetailsPersonneComponent } from "./pages/details-personne/details-personne.component";
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,EditPersonneComponent,DetailsPersonneComponent
  ],
  imports: [FormsModule,HttpClientModule,NgxPaginationModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
