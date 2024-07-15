import { Component, OnInit, ElementRef,Renderer2} from '@angular/core';
import { Personne } from 'app/models/personne';
import { PersonneService } from 'app/personne.service';
import { Router

 } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
})

export class TableComponent implements OnInit{
    
  
  showDetails = false;
  selectedPerson: Personne; 
  displayedPersonnes: Personne[] = [];
  Personnes: Personne[] = [];

  ////////////////////
  filteredPersonnes: Personne[] = [];
  search:"";
  ////////////////////////////recherche
  usertoSelected!: Personne;
  show = false;

  //////////pagination
  pageIndex = 0;
  pageSize = 3;
  p: number = 1;
  constructor(private renderer: Renderer2,
    private el: ElementRef,private toastr:ToastrService, private personneService: PersonneService,private router: Router,/*private snackBar: MatSnackBar*/) {
    
   }
   temporaryDeleteId:number;
   deletePersonneById(id: number): void {
    
    this.toastr.warning('Tap here to confirm',
      'Are you sure you want to delete this person?',
      
      {
        closeButton: true,
        positionClass: 'toast-top-center',
        timeOut: 5000,       
         enableHtml: true,
        progressBar: true,
        tapToDismiss: false // Disable dismiss on click outside toastr
      }
    ).onTap.subscribe(() => {
      
      this.confirmDelete(id);
    });
  }

  confirmDelete(id: number): void {
    this.personneService.deletePersonne(id).subscribe(
      () => {
        // Update filteredPersonnes after deletion
        this.filteredPersonnes = this.filteredPersonnes.filter((personne) => personne.personneId !== id);
        this.toastr.success('Person successfully deleted.','',
          
          { closeButton: true,
            timeOut: 1500,       
         progressBar: true,
         tapToDismiss: true ,positionClass: 'toast-top-center'});

        this.updateDisplayedPersonnes();
      },
      (error) => {
        console.error('Failed to delete person:', error);
        this.toastr.error('Failed to delete person.');
      }
    );
  }

   /*deletePersonneById(id: number): void {
    this.temporaryDeleteId = id;
    console.log(id);
    this.toastr.warning(
      'Are you sure you want to delete this person? <br> <button id="confirmDeleteBtn" class="btn btn-danger">Click here to confirm</button>',
      '',
      {
        enableHtml: true,
        closeButton: true,
        timeOut: 5000,
        positionClass: 'toast-top-center',
        progressBar: true,
      }
    );

    setTimeout(() => {
      const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

      if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', () => {
          this.confirmDelete();
        });
      }
    }, 0);
  }

  confirmDelete(): void {
    this.personneService.deletePersonne(this.temporaryDeleteId).subscribe(
      () => {
        this.filteredPersonnes = this.filteredPersonnes.filter((personne) => personne.personneId !== this.temporaryDeleteId);
        this.toastr.success('Person successfully deleted.');
        this.updateDisplayedPersonnes();
      },
      (error) => {
        console.error('Failed to delete person:', error);
        this.toastr.error('Failed to delete person.');
      }
    );
  }*/


///////////////////
  get pages(): number[] {
    return Array(Math.ceil(this.filteredPersonnes.length / this.pageSize)).fill(0).map((x, i) => i + 1);
  }

  get pageCount(): number {
    return Math.ceil(this.filteredPersonnes.length / this.pageSize);
  }
//////////
 
  ngOnInit(): void {
    this.fetchPersonnes();
  }

  fetchPersonnes(): void {
    this.personneService.getPersonne().subscribe(
      (personnes: Personne[]) => {
        this.Personnes = personnes;
        ///////
        this.filteredPersonnes =personnes;
        this.totalPages = Math.ceil(personnes.length / this.pageSize);
        this.updatePaginatedPersonnes();
        console.log('Fetched Personnes:', this.Personnes);
      },
      (error) => {
        console.error('Error fetching personnes:', error);
      }
    );
  }
  paginatedPersonnes: Personne[] = [];
 
  totalPages = 0;
  updatePaginatedPersonnes(): void {
    const startIndex = this.pageIndex * this.pageSize;
    this.paginatedPersonnes = this.Personnes.slice(startIndex, startIndex + this.pageSize);
    this.filteredPersonnes=this.paginatedPersonnes;
  }

  nextPage(): void {
    if (this.pageIndex < this.totalPages - 1) {
      this.pageIndex++;
      this.updatePaginatedPersonnes();
    }
  }

  previousPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.updatePaginatedPersonnes();
    }
  }
  onSearchChange(searchValue: string): void {
    this.filteredPersonnes = this.Personnes.filter(personne => 
      personne.personneNom.toLowerCase().includes(searchValue.toLowerCase()) || 
      personne.personnePrenom.toLowerCase().includes(searchValue.toLowerCase())
     
    );
    this.paginatedPersonnes=this.filteredPersonnes;
  }


 /*

 deletePersonneById(id: number): void {
  const snackBarRef = this.snackBar.open(
    'Etes-vous sur de vouloir supprimer cet enregistrement?',
    'Oui',
    
    {
      duration: 5000,
    }
  );

  snackBarRef.onAction().subscribe(() => {
    this.personneService.deletePersonne(id).subscribe(
      () => {
        this.filteredPersonnes = this.filteredPersonnes.filter((Personne) => Personne.personneId !== id);
        this.showSnackBar('Personne bien supprimée');
        this.updateDisplayedPersonnes();
      },
      (error) => {
        console.error('Failed to delete Personne:', error);
        this.showSnackBar('Failed to delete Personne');
      }
    );
  });
}

private showSnackBar(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 3000,
  });
}

*/
 
  update(Personne: Personne) {
    console.log('Selected Personne:', Personne);
    this.usertoSelected = Personne;
    this.show = true;
    this.router.navigate(['personne/update-personne', Personne.personneId]);
    //    this.router.navigate(['personne/update-personne', Personne.personneId,Personne.personneGouvernerat]);

  }

 
  private updateDisplayedPersonnes(): void {
    const startIndex = this.pageIndex * this.pageSize;
    this.displayedPersonnes = this.Personnes.slice(startIndex, startIndex + this.pageSize);
  }

  showPersonDetails(id: number): void {
    this.personneService.getPersonneById(id).subscribe(
      (person: Personne) => {
        this.selectedPerson = person;
        this.showDetails = true; console.log(person)
        this.router.navigate(['personne/details-personne',person.personneId]);

      },
      (error) => {
        console.error('Error fetching person details:', error);
     
      }
    );
  }

 
}
