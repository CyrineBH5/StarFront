import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', '../css/style.css', '../css/bootstrap.min.css', '../lib/owlcarousel/assets/owl.carousel.min.css',
    '../lib/animate/animate.min.css'

  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
