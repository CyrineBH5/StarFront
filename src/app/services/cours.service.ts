import { Cours } from 'src/app/models/cours';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private httpCours: HttpClient) {
  }
  ajouterCours(c: Cours) {
    // Define your headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  // Adjust the content type as needed
      })
    };

    this.httpCours.post<Cours[]>('http://localhost:3003/api/Cours', c, httpOptions).subscribe(res => {
      console.log(res);
    }
      , err => { console.log(err) });

  }
}
