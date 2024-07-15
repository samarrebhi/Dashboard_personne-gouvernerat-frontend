import { Component, OnInit } from '@angular/core';
import { Personne } from 'app/models/personne';
import { PersonneService } from 'app/personne.service';
import { Gouvernerat } from 'app/models/gouvernerat';

//////////////////
//import * as Highcharts from 'highcharts';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    newPersonne: Personne = new Personne();
    Gouverneratas: Gouvernerat[] = [];
    selectedGouverneratId: number; 
  
  
    constructor(
      private personneService: PersonneService,
      /*private snackBar: MatSnackBar*/
    ) {}
  
    onSubmit(): void {
      
      this.personneService.addPersonneAndAssociateGouvernerat(this.newPersonne,this.selectedGouverneratId).subscribe(
        (addedPersonne) => {
          console.log('Added Personne:', addedPersonne);
         // this.snackBar.open('Personne added successfully', 'Close', { duration: 3000 });
        },
        (error) => {
          console.error('Error adding personne:', error);
          //this.snackBar.open('Failed to add Personne', 'Close', { duration: 3000 });
        }
      );
    }
    fetchGouvernerats(): void {
      this.personneService.getGouv().subscribe(
        (Gouvernerats: Gouvernerat[]) => {
          this.Gouverneratas = Gouvernerats;
         
          console.log('Fetched Gouvernerats:', this.Gouverneratas);
        },
        (error) => {
          console.error('Error fetching Gouvernerats:', error);
        }
      );
    }
  ngOnInit(): void {
    this.fetchGouvernerats();
  }
  resetForm(): void {
    this.newPersonne = new Personne();
    this.selectedGouverneratId = 0; 
  }
  onCancel(): void {
    this.resetForm(); 
  }
  /////tebaa statistique pour le moment

}
