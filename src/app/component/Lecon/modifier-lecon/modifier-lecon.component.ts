import { Component, OnInit } from '@angular/core';
import { LeconService } from 'src/app/services/lecon/lecon.service';

@Component({
  selector: 'app-modifier-lecon',
  templateUrl: './modifier-lecon.component.html',
  styleUrls: ['./modifier-lecon.component.css']
})
export class ModifierLeconComponent implements OnInit {
  courseId: number;
  leconId: number;
  leconDetails: any;
  constructor(private serviceLecon: LeconService) { }
  showSpinner = false;

  ngOnInit(): void {

  }
  getDetailLecon() {
    this.serviceLecon.getLeconDetails(this.courseId, this.leconId).subscribe(
      (data) => {
        this.leconDetails = data;  
        console.log(data);
      },
      (error) => {
        console.error("Error fetching leçon details", error);
      }
    );
  }
}
