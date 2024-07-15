import { Component, EventEmitter,Output, Input, OnInit,} from '@angular/core';

import { PersonneService } from 'app/personne.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gouvernerat } from 'app/models/gouvernerat';
import { Personne } from 'app/models/personne'

@Component({
    selector: 'details-personne',
    moduleId: module.id,
    templateUrl: 'details-personne.component.html'
})
export class DetailsPersonneComponent implements OnInit{
    @Input() personne: Personne;

  showDetails = false;
  @Output() close = new EventEmitter<void>();

  
  constructor(private s: PersonneService,
    private ac: ActivatedRoute,
    private router: Router,) { }
ngOnInit(): void {

    
  
    const PersonneId = this.ac.snapshot.params['id'];
    const gouverneratId = this.ac.snapshot.params['idgouv'];
console.log("gouv id:",gouverneratId,"personid:",PersonneId);
    if (PersonneId) {
      this.s.getPersonneById(PersonneId).subscribe(
        (data) => {
          this.personne = data;

        }
      );
    }
    
} 
 
}