import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/Cours/cours';
import { CoursService } from 'src/app/services/cours/cours.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-afficher-cours',
  templateUrl: './afficher-cours.component.html',
  styleUrls: ['./afficher-cours.component.css', './css/style.css', './lib/owlcarousel/assets/owl.carousel.min.css',
    './template1/css/animate.css', './template1/css/icomoon.css', './template1/css/bootstrap.css', './template1/css/magnific-popup.css', './template1/css/owl.carousel.min.css', './template1/css/owl.theme.default.min.css', './template1/css/style.css']
})
export class AfficherCoursComponent implements OnInit {
  myArray: any = [];
  constructor(public rs: CoursService,public router:Router) { }
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
      (data) => {
        this.myArray = data; console.log(data);
      },
      (error) => {
        alert("Problème d'accès à l'api");
      }
    )
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  // Inside your component cla

  getImageUrl(imagePath: string): string {
    const imageName = imagePath.split('\\').pop();
    return `http://127.0.0.1:8080/${imageName}`;
  }

  searchTerm: string;
  search() {
    if (this.searchTerm) {
      this.rs.searchCoursByTitle(this.searchTerm).subscribe(
        (data) => {
          this.myArray = data;
        },
        (error) => {
          console.error('Error searching courses:', error);
        }
      );
    }
  }

}
