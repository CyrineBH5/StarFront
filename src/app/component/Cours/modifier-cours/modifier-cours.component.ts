import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from 'src/app/models/Cours/cours';
import { CoursService } from 'src/app/services/cours/cours.service';

@Component({
  selector: 'app-modifier-cours',
  templateUrl: './modifier-cours.component.html',
  styleUrls: ['./modifier-cours.component.css', './css/style.css']
})
export class ModifierCoursComponent implements OnInit {
  courseId: number;
  courseDetails: any;
  constructor(public rs: CoursService, private route: ActivatedRoute, private router: Router) { }
  showSpinner = false;
  langues: string[] = ['English', 'French', 'Spanish', 'German', 'Italian']; // Ajoutez d'autres langues
  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
    this.route.params.subscribe(params => {
      this.courseId = +params['id'];
      this.getDetails();
    });
  }
  updateCours(formAC: NgForm) {
    let Titre = formAC.value['titre'];
    let Description = formAC.value['description'];
    let Duree = formAC.value['duree']
    let Langue = formAC.value['langue'];
    /*const updatedCours: Cours = {
      Id: this.courseDetails.id,
      titre: Titre,
      description: Description,
      duree: Duree,
      langue: Langue,
      createdBy: this.courseDetails.createdBy, // Assurez-vous de ne pas perdre createdBy lors de la mise à jour
    };

    this.rs.updateCours(updatedCours).subscribe(
      () => {
        console.log('Cours updated successfully');
        // Redirigez l'utilisateur vers une autre page après la mise à jour si nécessaire
        this.router.navigate(['/courses']);
      },
      (error) => {
        console.error('Error updating cours:', error);
        // Gérez les erreurs ici
      }
    );*/
  }

  getDetails() {
    this.rs.getCoursById(this.courseId).subscribe(
      (data) => {
        this.courseDetails = data;
        console.log(data);
      },
      (error) => {
        console.error("Error fetching course details", error);
      }
    );
  }
}
