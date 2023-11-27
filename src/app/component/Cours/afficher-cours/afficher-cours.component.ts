import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { Cours } from 'src/app/models/Cours/cours';
=======
>>>>>>> Stashed changes
import { CoursService } from 'src/app/services/cours/cours.service';

@Component({
  selector: 'app-afficher-cours',
  templateUrl: './afficher-cours.component.html',
<<<<<<< Updated upstream
  styleUrls: ['./afficher-cours.component.css', '../css/animate.css', '../css/icomoon.css', '../css/bootstrap.css', '../css/magnific-popup.css', '../css/owl.carousel.min.css', '../css/owl.theme.default.min.css', '../css/style.css']
=======
  styleUrls: ['./afficher-cours.component.css', './css/animate.css', './css/icomoon.css', './css/bootstrap.css', './css/magnific-popup.css', './css/owl.carousel.min.css', './css/owl.theme.default.min.css', './css/style.css']
>>>>>>> Stashed changes
})
export class AfficherCoursComponent implements OnInit {
  myArray: any = [];
  constructor(public rs: CoursService) { }
<<<<<<< Updated upstream
  showSpinner = false;

  ngOnInit(): void {
    this.getDetailCours();
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
=======

  ngOnInit(): void {
    this.getDetailCours();
>>>>>>> Stashed changes
  }
  getDetailCours() {
    this.rs.getDetailCours().subscribe(
      (data) => { this.myArray = data; },
<<<<<<< Updated upstream
      (error) => {
        alert("Problème d'accès à l'api");
      }
    )
  }
  getImageUrl(cours: Cours): string {
    const imageUrl = "http://localhost:3003/${cours.image}";
    console.log('Generated image URL:', imageUrl);
    return imageUrl;
  }
=======
      /*(error) => {
        alert("Problème d'accès à l'api");
      }*/
    )
  }
>>>>>>> Stashed changes

}
