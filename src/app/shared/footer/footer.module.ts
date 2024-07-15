import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { PersonneService } from 'app/personne.service';
@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ FooterComponent ],
    exports: [ FooterComponent ],providers: [PersonneService],
})

export class FooterModule {}
