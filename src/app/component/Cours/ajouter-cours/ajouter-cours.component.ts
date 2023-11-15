import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cours } from 'src/app/models/Cours/cours';
import { Lecon } from 'src/app/models/Lecon/lecon';
import { CoursService } from 'src/app/services/cours/cours.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LeconService } from 'src/app/services/lecon/lecon.service';



@Component({
  selector: 'app-ajouter-cours',
  templateUrl: './ajouter-cours.component.html',
  styleUrls: ['./ajouter-cours.component.css']
})
export class AjouterCoursComponent implements OnInit {
  langues: string[] = ['English', 'French', 'Spanish', 'German', 'Italian']; // Ajoutez d'autres langues
  idCours: number ;
  selectedFile: File ;
  selectedImageFile : File;
  fileAdded: boolean = false;
  acceptTerms: boolean = false;
  step: number = 1; // Current step
  fileInputModel: string ; // File input label text
  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  constructor(public l: LeconService,public c: CoursService,public router:Router) { }

  onImageFileChange(event) {
    this.selectedImageFile = event.target.files[0];

  }
  onFileChange(event) {
    this.selectedFile = event.target.files[0];
    this.fileAdded = true;
  }



  acceptTermsf(form) {
    const acceptTermsCheckbox = form.value.acceptTerms;

    if (acceptTermsCheckbox) {
      // Perform any additional processing or submit the form
      console.log("Terms accepted. Submitting the form...");
      // You can submit the form using form.submit() or perform any other actions.

      // For example, you might want to display a success message or redirect the user.
    } else {
      // Display an error message or take other actions if terms are not accepted
      console.error("Please accept the terms to proceed.");
      // You might want to show an error message to the user or handle the case when terms are not accepted.
    }
  }




  async  ajouterCours(formAC: NgForm) {
    let Titre = formAC.value['titre'];
    let Description = formAC.value['description'];
    let Duree = formAC.value['duree']
    let Langue = formAC.value['langue'];
    //let Nb = formAC.value['nb'];
    console.log('Données du formulaire :', Titre, Description, Duree, Langue);
    this.idCours = await  this.c.ajouterCours(new Cours(Titre, Description, Duree, Langue),this.selectedImageFile);
    console.log(this.idCours);

    this.nextStep();
    //this.router.navigate(['/addLecon']);

  }


  ajouterLecon(formAC: NgForm) {
    let Titre = formAC.value['titre'];
    let Description = formAC.value['description'];
    let contenu = formAC.value['contenu']
    //let Nb = formAC.value['nb'];
    console.log('Données du formulaire :', Titre, Description, contenu,this.idCours);
    this.l.ajouterLecon(new Lecon(Titre, Description, contenu,this.idCours),this.selectedFile);

    this.nextStep();
  }
  ajouterOtherLecon(formAC: NgForm) {
    let Titre = formAC.value['titre'];
    let Description = formAC.value['description'];
    let contenu = formAC.value['contenu']
    //let Nb = formAC.value['nb'];
    console.log('Données du formulaire :', Titre, Description, contenu,this.idCours);
    this.l.ajouterLecon(new Lecon(Titre, Description, contenu,this.idCours),this.selectedFile);


    formAC.resetForm();


  }
  ngOnInit(): void {
  }

}
