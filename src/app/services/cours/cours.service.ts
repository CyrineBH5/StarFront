import { Cours } from 'src/app/models/Cours/cours';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private httpCours: HttpClient) {
  }
  ajouterCours(c: Cours): Promise<number> {
    // Define your headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  // Adjust the content type as needed
      })
    };

    return new Promise<number>((resolve, reject) => {
      this.httpCours.post<Cours>('http://localhost:3003/api/Cours', c, httpOptions).subscribe(
        (res: any) => {
          console.log(res.idCours);
          resolve(res.idCours); // Resolve the promise with the idCours
        },
        (err: any) => {
          console.log(err);
          reject(err); // Reject the promise if there's an error
        }
      );
    });
  }

}
