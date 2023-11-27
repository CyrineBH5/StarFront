import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css','../css/animate.css','../css/icomoon.css','../css/bootstrap.css','../css/magnific-popup.css','../css/owl.carousel.min.css','../css/owl.theme.default.min.css','../css/style.css']
})
export class ContactComponent implements OnInit {
  showSpinner= false;
  constructor() { }

  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
  }

}
