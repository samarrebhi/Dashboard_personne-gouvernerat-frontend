import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FixedPluginComponent } from './fixedplugin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonneService } from 'app/personne.service';
@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ FixedPluginComponent ],
    exports: [ FixedPluginComponent ],providers:[PersonneService]
})

export class FixedPluginModule {}

