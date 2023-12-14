import { Component, OnInit, ViewChild  } from '@angular/core';
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
  styleUrls: ['./ajouter-cours.component.css','../css/style.css','../css/animate.css','../css/icomoon.css','../css/bootstrap.css','../css/magnific-popup.css','../css/owl.carousel.min.css','../css/owl.theme.default.min.css','../css/style.css'],



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
  submited: boolean = false;
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
  submitForm(): void {
    // Perform your form submission logic here
    console.log("submitted");
    this.submited=true;
    setTimeout(() => {
      this.router.navigate(['/']); // Update the route as needed
    }, 1500); // Delay should match the duration of the Snackbar
  }






  async  ajouterCours(formAC: NgForm) {
    let Titre = formAC.value['titre'];
    let Description = formAC.value['description'];
    let Duree = formAC.value['duree']
    let Langue = formAC.value['langue'];
    //let Nb = formAC.value['nb'];
    console.log('Données du formulaire :', Titre, Description, Duree, Langue,localStorage.getItem('idUtilisateur'));
    this.idCours = await  this.c.ajouterCours(new Cours(Titre, Description, Duree, Langue,Number.parseInt(localStorage.getItem('idUtilisateur')),null),this.selectedImageFile);
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
