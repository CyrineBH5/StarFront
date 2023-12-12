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
  showFileInput: boolean = false;
  selectedImageFile: File;
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
  onImageFileChange(event) {
    if (event.target.files.length > 0) {
      this.selectedImageFile = event.target.files[0];
    }

  }
  updateCours(f: NgForm) {
    let Titre = f.value['titre'];
    let Description = f.value['description'];
    let Duree = f.value['duree']
    let Langue = f.value['langue'];
    console.log('Données du formulaire :', Titre, Description, Duree, this.courseId);
    this.rs.updateCours(this.courseId, new Cours(Titre, Description, Duree, Langue, this.courseDetails.createdby)).subscribe(
      (response) => {
        console.log('Update successful:', response);
        // Handle any additional logic after a successful update
        console.log('after call');
      },
      (error) => {
        console.error('Update failed:', error);
        // Handle error scenarios
      }
    );;
    console.log("after call");

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
  toggleFileInput(): void {
    this.showFileInput = this.showFileInput;
  }
}
