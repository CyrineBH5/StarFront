import { Component, OnInit } from '@angular/core';
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
  step1Active: boolean = true;
  idCours: number = 0;
  constructor(public l: LeconService,public c: CoursService,public router:Router) { }

  async  ajouterCours(formAC: NgForm) {
    let Titre = formAC.value['titre'];
    let Description = formAC.value['description'];
    let Duree = formAC.value['duree']
    let Langue = formAC.value['langue'];
    //let Nb = formAC.value['nb'];
    console.log('Données du formulaire :', Titre, Description, Duree, Langue);
    this.step1Active= !this.step1Active;
    this.idCours = await  this.c.ajouterCours(new Cours(Titre, Description, Duree, Langue));
    console.log(this.idCours);

    //this.router.navigate(['/addLecon']);

  }


  ajouterLecon(formAC: NgForm) {
    let Titre = formAC.value['titre'];
    let Description = formAC.value['description'];
    let contenu = formAC.value['contenu']
    //let Nb = formAC.value['nb'];
    console.log('Données du formulaire :', Titre, Description, contenu,this.idCours);
    this.l.ajouterLecon(new Lecon(Titre, Description, contenu,this.idCours));

  }
  ngOnInit(): void {
  }

}
