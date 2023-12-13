import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lecon } from 'src/app/models/Lecon/lecon';
import { LeconService } from 'src/app/services/lecon/lecon.service';
import { NgForm } from '@angular/forms';
import { Lecon } from 'src/app/models/Lecon/lecon';

@Component({
  selector: 'app-modifier-lecon',
  templateUrl: './modifier-lecon.component.html',
  styleUrls: ['./modifier-lecon.component.css', './css/style.css']
})
export class ModifierLeconComponent implements OnInit {
  courseId: number;
  leconId: number;
  leconDetails: any;
<<<<<<< Updated upstream
=======
  showFileInput: boolean = false;
>>>>>>> Stashed changes
  constructor(private serviceLecon: LeconService, private route: ActivatedRoute, private router: Router) { }
  showSpinner = false;

  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
    this.route.params.subscribe(params => {
      this.courseId = +params['id'];
      this.leconId = +params['idlecon'];
      this.getDetailLecon();
    });
  }
  toggleFileInput(): void {
    this.showFileInput = this.showFileInput;
  }

  getDetailLecon() {
    this.serviceLecon.getLeconDetails(this.courseId, this.leconId).subscribe(
      (data) => {
        this.leconDetails = data;
        console.log(data);
      },
      (error) => {
        console.error("Error fetching leçon details", error);
      }
    );
  }
<<<<<<< Updated upstream
  redirectToDetailCours() {
    this.router.navigate(['/detail-cours/' + this.courseId]);
  }
  updateLecon(f: NgForm) {
    let Titre = f.value['titre'];
    let Description = f.value['description'];
    let contenu = f.value['langue'];
    console.log('Données du formulaire :', Titre, Description, this.courseId);
    this.serviceLecon.updateLecon(this.courseId, new Lecon(Titre, Description, contenu, this.courseId)).subscribe(
=======
  updateLecon(f: NgForm) {
    let Titre = f.value['titre'];
    let Description = f.value['description'];
    let contenu = f.value['fileInput']
    console.log('Données du formulaire :', Titre, Description, contenu, this.courseId, this.leconId);
    this.serviceLecon.updateLecon(this.leconId, new Lecon(Titre, Description, contenu, this.courseId)).subscribe(
>>>>>>> Stashed changes
      (response) => {
        console.log('Update successful:', response);
        // Handle any additional logic after a successful update
        console.log('after call');
      },
      (error) => {
        console.error('Update failed:', error);
        // Handle error scenarios
      }
    );
<<<<<<< Updated upstream

=======
  }
  redirectToDetailCours() {
    this.router.navigate(['/detail-cours/' + this.courseId]);
>>>>>>> Stashed changes
  }
}
