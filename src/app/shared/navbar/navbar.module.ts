import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonneService } from 'app/personne.service';


@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
    ,providers: [PersonneService]
})

export class NavbarModule {}
