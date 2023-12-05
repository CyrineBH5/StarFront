import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-cours',
  templateUrl: './detail-cours.component.html',
  styleUrls: ['./detail-cours.component.css', './assets/css/font-awesome.css', './assets/css/bootstrap.css', './assets/css/slick.css',
    './assets/css/jquery.fancybox.css', './assets/css/theme-color/default-theme.css', './assets/css/style.css']
})
export class DetailCoursComponent implements OnInit {

  constructor() { }
  showSpinner = false;
  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
  }

}
