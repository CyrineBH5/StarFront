import { Observable, catchError } from 'rxjs';
import { AfficherCoursComponent } from './../../component/Cours/afficher-cours/afficher-cours.component';
import { Cours } from 'src/app/models/Cours/cours';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private httpCours: HttpClient) {
  }
  ajouterCours(cours: Cours, image: File): Promise<number> {
    const formData = new FormData();
    // Append form data
    formData.append('duree', cours.getDuree().toString());
    formData.append('description', cours.getDescription().toString());
    formData.append('titre', cours.getTitre().toString());
    formData.append('langue', cours.getLangue().toString());
    formData.append('createdBy', cours.getCreatedBy().toString());
    console.log(formData);

    // Append file
    formData.append('file', image, image.name);
    return new Promise<number>((resolve, reject) => {
      this.httpCours.post<Cours>('http://localhost:3003/api/Cours', formData).subscribe(
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
  getDetailCours() {
    return this.httpCours.get<Cours[]>('http://localhost:3003/api/Cours');
  }
  getCoursById(id: number): Observable<any> {
    return this.httpCours.get<Cours[]>('http://localhost:3003/api/Cours/' + id);
  }
  searchCoursByTitle(title: string): Observable<any> {
    return this.httpCours.get<Cours[]>('http://localhost:3003/api/Cours/search/' + title);
  }
  updateCours(id: number, cours: Cours,image: File): Observable<Cours> {
    cours.idCours=id;

    const formData = new FormData();

    formData.append('idCours', cours.getIdCours().toString());
    formData.append('duree', cours.getDuree().toString());
    formData.append('description', cours.getDescription().toString());
    formData.append('titre', cours.getTitre().toString());
    formData.append('langue', cours.getLangue().toString());
    formData.append('createdBy', cours.getCreatedBy().toString());


    // Append file
    formData.append('image', image, image.name);
    console.log(formData.get('image'));
    return this.httpCours.put<Cours>('http://localhost:3003/api/Cours/' + id, formData)
      .pipe(
        catchError((error) => {
          console.error('Update failed:', error);
          throw error; // Re-throw the error to propagate it to the subscriber
        })
      );
  }

}
