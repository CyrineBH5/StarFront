
import { Component, OnInit } from '@angular/core';
import { LeconService } from 'src/app/services/lecon/lecon.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-lecon',
  templateUrl: './ajouter-lecon.component.html',
  styleUrls: ['./ajouter-lecon.component.css']
})
export class AjouterLeconComponent implements OnInit {

  constructor(public l: LeconService,public router : Router) { }
  ajouterLecon(formAC: NgForm) {
    let Titre = formAC.value['titre'];
    let Description = formAC.value['description'];
    let contenu = formAC.value['contenu']
    //let Nb = formAC.value['nb'];
    console.log('Données du formulaire :', Titre, Description, contenu);
    //this.l.ajouterLecon(new Lecon(Titre, Description, contenu));

  }
  ngOnInit(): void {
  }

}
