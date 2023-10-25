import { Cours } from 'src/app/models/cours';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private httpCours: HttpClient) {
  }
  ajouterCours(c: Cours) {
    this.httpCours.post<Cours[]>('https://localhost:3003/api/Cours', c).subscribe(res => {
      console.log(res);
    }
      , err => { console.log(err) });

  }
}
