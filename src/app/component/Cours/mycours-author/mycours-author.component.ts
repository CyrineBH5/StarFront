import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours/cours.service';

@Component({
  selector: 'app-mycours-author',
  templateUrl: './mycours-author.component.html',
  styleUrls: ['./mycours-author.component.css','./css/style.css','./lib/owlcarousel/assets/owl.carousel.min.css']
})
export class MycoursAuthorComponent implements OnInit {
  showSpinner = false;
  myArray: any = [];

  constructor(public rs: CoursService) { }
  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);



    console.log(this.myArray)

  }
  getImageUrl(imagePath: string): string {
    const imageName = imagePath.split('\\').pop();
    return `http://127.0.0.1:8080/${imageName}`;
  }

  getDetailCours() {
    this.rs.getDetailCours().subscribe(
      (data) => {
        this.myArray = data;
        console.log(this.myArray);
      },
      (error) => {
        alert("Problème d'accès à l'api");
      }
    )
  }
  deleteCours(idcourse: number) {
    if (confirm('Are you sure to delete this Course ?'))
      this.rs.deleteCours(idcourse)
        .subscribe(
          (response: any) => {
            console.log(response);
            this.getDetailCours();
          },
          (error) => {
            console.error(error);
          });
    location.reload();
  }
}
