import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from 'src/app/services/cours/cours.service';
import { LeconService } from 'src/app/services/lecon/lecon.service';

@Component({
  selector: 'app-detail-cours',
  templateUrl: './detail-cours.component.html',
  styleUrls: ['./detail-cours.component.css', './template2/assets/css/font-awesome.css', './template2/assets/css/bootstrap.css', './template2/assets/css/slick.css',
    './template2/assets/css/jquery.fancybox.css', './template2/assets/css/theme-color/default-theme.css', './template2/assets/css/style.css',
    './css/style.css', './lib/owlcarousel/assets/owl.carousel.min.css']
})
export class DetailCoursComponent implements OnInit {
  courseId: number;
  courseDetails: any;
  lecons: any[] = [];

  constructor(public rs: CoursService, private route: ActivatedRoute, private leconService: LeconService) { }
  showSpinner = false;
  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
    this.route.params.subscribe(params => {
      this.courseId = +params['id'];
      this.getDetails();
      this.leconService.getAllLeconsByCours(this.courseId).subscribe(
        (data) => {
          this.lecons = data;
        },
        (error) => {
          console.error('Error fetching lecons', error);
        }
      )
    });
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
  getImageUrl(imagePath: string): string {
    const imageName = imagePath.split('\\').pop();
    return `http://127.0.0.1:8080/${imageName}`;
  }
}
