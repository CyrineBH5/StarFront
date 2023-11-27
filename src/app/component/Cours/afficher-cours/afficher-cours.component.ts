import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/Cours/cours';
import { CoursService } from 'src/app/services/cours/cours.service';

@Component({
  selector: 'app-afficher-cours',
  templateUrl: './afficher-cours.component.html',
  styleUrls: ['./afficher-cours.component.css', '../css/animate.css', '../css/icomoon.css', '../css/bootstrap.css', '../css/magnific-popup.css', '../css/owl.carousel.min.css', '../css/owl.theme.default.min.css', '../css/style.css']
})
export class AfficherCoursComponent implements OnInit {
  myArray: any = [];
  constructor(public rs: CoursService) { }
  showSpinner = false;

  ngOnInit(): void {
    this.getDetailCours();
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
  }
  getDetailCours() {
    this.rs.getDetailCours().subscribe(
      (data) => { this.myArray = data; },
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

}
