import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cours } from 'src/app/models/Cours/cours';
import { CoursService } from 'src/app/services/cours/cours.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ajouter-cours',
  templateUrl: './ajouter-cours.component.html',
  styleUrls: ['./ajouter-cours.component.css']
})
export class AjouterCoursComponent implements OnInit {
  langues: string[] = ['English', 'French', 'Spanish', 'German', 'Italian']; // Ajoutez d'autres langues

  constructor(public c: CoursService) { }

  ajouterCours(formAC: NgForm) {
    let Titre = formAC.value['titre'];
    let Description = formAC.value['description'];
    let Duree = formAC.value['duree']
    let Langue = formAC.value['langue'];
    //let Nb = formAC.value['nb'];
    console.log('Données du formulaire :', Titre, Description, Duree, Langue);
    this.c.ajouterCours(new Cours(Titre, Description, Duree, Langue));

  }
  ngOnInit(): void {
  }

}
