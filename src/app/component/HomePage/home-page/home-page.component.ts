import { Component, OnInit ,HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css','../css/animate.css','../css/icomoon.css','../css/bootstrap.css','../css/magnific-popup.css','../css/owl.carousel.min.css','../css/owl.theme.default.min.css','../css/style.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  showSpinner = false;
  isActive: boolean = false;
  ngOnInit() {
    // Automatically show the spinner for 1 second
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isActive = window.scrollY > 200;
  }

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



}
