import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours/cours.service';
import { LeconService } from 'src/app/services/lecon/lecon.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-detail-cours',
  templateUrl: './detail-cours.component.html',
  styleUrls: ['./detail-cours.component.css', './template2/assets/css/bootstrap.css', './template2/assets/css/slick.css'
    , './template2/assets/css/theme-color/default-theme.css', './template2/assets/css/style.css', '../css/animate.css', '../css/icomoon.css', '../css/bootstrap.css', '../css/magnific-popup.css', '../css/owl.carousel.min.css', '../css/owl.theme.default.min.css', '../css/style.css'
  ]
})
/*,'../css/animate.css','../css/icomoon.css','../css/bootstrap.css','../css/magnific-popup.css','../css/owl.carousel.min.css','../css/owl.theme.default.min.css','../css/style.css'*/
export class DetailCoursComponent implements OnInit {
  courseId: number;
  courseDetails: any;
  lecons: any[] = [];
  itIsMine: boolean = false;
  myArray: any = [];

  constructor(public us: UserService, public rs: CoursService, private route: ActivatedRoute, private leconService: LeconService, private router: Router) { }
  showSpinner = false;
  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
    this.route.params.subscribe(params => {
      this.courseId = +params['id'];

      this.leconService.getAllLeconsByCours(this.courseId).subscribe(
        (data) => {
          this.lecons = data;
        },
        (error) => {
          console.error('Error fetching lecons', error);
        }
      )
    });
    this.getDetails();

  }
  async isMine() {
    console.log(this.courseDetails);

    this.itIsMine = await this.us.isMine(this.courseId, Number.parseInt(localStorage.getItem('idUtilisateur')));
    console.log(this.itIsMine);

  }
  getDetails() {
    this.rs.getCoursById(this.courseId).subscribe(
      (data) => {
        this.courseDetails = data;
        this.isMine()
        console.log(data);
      },
      (error) => {
        console.error("Error fetching course details", error);
      }
    );
  }
  getImageUrl(imagePath: string): string {
    const imageName = imagePath.split('\\').pop();
    return `http://127.0.0.1:8080/${imageName}`;
  }
  getFileUrl(filePath: string): string {
    const fileName = filePath.split('\\').pop();
    return `http://127.0.0.1:8080/${fileName}`;
  }



  formatCourseStartDateTime(dateCreation): string {
    const courseStartDate = new Date(dateCreation);
    return courseStartDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  redirectToLoginForm() {
    this.router.navigate(['/login']);
  }
  deleteLecon(IdLecon: number) {
    if (confirm('Are you sure to delete this Lecon ?'))
      this.leconService.deleteLecon(IdLecon)
        .subscribe(
          (response: any) => {
            console.log(response);
            this.getDetails();
          },
          (error) => {
            console.error(error);
          });
    location.reload();
  }
  getDetailCours() {
    this.rs.getDetailCours().subscribe(
      (data) => {
        this.myArray = data;
        console.log(data);
      },
      (error) => {
        alert("Problème d'accès à l'api");
      }
    )
  }

}
