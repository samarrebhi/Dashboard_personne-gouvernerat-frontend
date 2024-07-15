import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { PersonneService } from 'app/personne.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gouvernerat } from 'app/models/gouvernerat';
import { Personne } from 'app/models/personne';
@Component({
    selector: 'edit-personne',
    moduleId: module.id,
    templateUrl: 'edit-personne.component.html'
})
export class EditPersonneComponent implements OnInit {
    @Input() Personne: Personne = new Personne();
    @Output() updateUser = new EventEmitter();
  
    
    
    Gouverneratas: Gouvernerat[] = [];
    selectedGouverneratId: Number;
  
    constructor(
      private s: PersonneService,
      private ac: ActivatedRoute,
      private router: Router,
     
    ) {}
  
    ngOnInit() {
      this.fetchGouvernerats();
  
      const PersonneId = this.ac.snapshot.params['id'];
      const gouverneratId = this.ac.snapshot.params['idgouv'];
  console.log("gouv id:",gouverneratId,"personid:",PersonneId);
      if (PersonneId) {
        this.s.getPersonneById(PersonneId).subscribe(
          (data) => {
            this.Personne = data;
  
          }
        );
      }
    }
  
    update(u:Personne): void {
      const idp= Number(this.Personne.personneId);
      const idg= Number(this.Personne.personneGouvernerat);
  
              this.s.updatePersonneWithAssociations(u,idp,idg).subscribe();
              alert('Personne '+this.Personne.personneId+' bien modifié')
        };
        fetchGouvernerats(): void {
          this.s.getGouv().subscribe(
            (Gouvernerats: Gouvernerat[]) => {
              this.Gouverneratas = Gouvernerats;
             
              console.log('Fetched Gouvernerats:', this.Gouverneratas);
            },
            (error) => {
              console.error('Error fetching Gouvernerats:', error);
            }
          );
        }
      
      resetForm(): void {
        this.Personne = new Personne();
        this.selectedGouverneratId = 0; 
      }
      onCancel(): void {
        this.resetForm(); 
      }
  @Output() hidesectionevent = new EventEmitter<void>();
      isHidden: boolean = false;
      hidesection() {
          this.isHidden = true;
          this.hidesectionevent.emit();
      }


}