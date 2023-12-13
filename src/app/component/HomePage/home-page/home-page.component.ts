import { Component, OnInit ,HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css','../css/animate.css','../css/icomoon.css','../css/bootstrap.css','../css/magnific-popup.css','../css/owl.carousel.min.css','../css/owl.theme.default.min.css','../css/style.css']
})
export class HomePageComponent implements OnInit {

  constructor(public router:Router) { }

  showSpinner = false;
  isActive: boolean = false;
  logedIN: boolean = false;
  ngOnInit() {
    this.logedIN= localStorage.getItem('loggedIn') != 'true';
    // Automatically show the spinner for 1 second
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);

  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isActive = window.scrollY > 200;
  }

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



}
