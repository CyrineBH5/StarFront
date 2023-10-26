import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lecon } from 'src/app/models/Lecon/lecon';
@Injectable({
  providedIn: 'root'
})
export class LeconService {

  constructor(private httpLecon: HttpClient) { }
  ajouterLecon(l: Lecon) {
    // Define your headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  // Adjust the content type as needed
      })
    };

    this.httpLecon.post<Lecon[]>('http://localhost:3003/api/Lecon', l, httpOptions).subscribe(res => {
      console.log(res);
    }
      , err => { console.log(err) });

  }
}
