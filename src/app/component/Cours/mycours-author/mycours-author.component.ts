import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours/cours.service';

@Component({
  selector: 'app-mycours-author',
  templateUrl: './mycours-author.component.html',
  styleUrls: ['./mycours-author.component.css','../css/animate.css','../css/icomoon.css','../css/bootstrap.css','../css/magnific-popup.css','../css/owl.carousel.min.css','../css/owl.theme.default.min.css','../css/style.css']
})
export class MycoursAuthorComponent implements OnInit {
  showSpinner = false;
  myArray: any = [];
  logedIN: boolean = false;
  constructor(public rs: CoursService,public router:Router) { }
  ngOnInit(): void {
    this.logedIN= localStorage.getItem('loggedIn') != 'true';
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
    this.getAllCoursByUserId();
}
    logOut(){
      localStorage.clear();
      this.router.navigate(['/login']);
    }




  getImageUrl(imagePath: string): string {
    const imageName = imagePath.split('\\').pop();
    return `http://127.0.0.1:8081/${imageName}`;
  }

  getAllCoursByUserId() {
    this.rs.getAllCoursByUserId(Number.parseInt(localStorage.getItem('idUtilisateur'))).subscribe(
      (data) => {
        this.myArray = data;
        console.log(data);
      },
      (error) => {
        alert("Problème d'accès à l'api");
      }
    )
  }
  formatCourseStartDateTime(dateCreation): string {
    const courseStartDate = new Date(dateCreation);
    return courseStartDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });}

  deleteCours(idcourse: number) {
    if (confirm('Are you sure to delete this course and all its lessons?'))
      this.rs.deleteCours(idcourse)
        .subscribe(
          (response: any) => {
            console.log(response);
            this.getAllCoursByUserId();
          },
          (error) => {
            console.error(error);
          });
    location.reload();
  }
}
