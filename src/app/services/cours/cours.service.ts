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
          resolve(res.idCours);
        },
        (err: any) => {
          console.log(err);
          reject(err);
        }
      );
    });
  }
  getDetailCours() {
    return this.httpCours.get<Cours[]>('http://localhost:3003/api/Cours');
  }
  getAllCoursByUserId(id:number) {
    return this.httpCours.get<Cours[]>('http://localhost:3003/api//mycours/'+id);
  }
  getCoursById(id: number): Observable<any> {
    return this.httpCours.get<Cours[]>('http://localhost:3003/api/Cours/' + id);
  }
  searchCoursByTitle(title: string): Observable<any> {
    return this.httpCours.get<Cours[]>('http://localhost:3003/api/Cours/search/' + title);
  }
  updateCours(id: number, cours: Cours, image: File): Observable<Cours> {
    cours.idCours = id;

    const formData = new FormData();

    formData.append('idCours', cours.getIdCours().toString());
    formData.append('duree', cours.getDuree().toString());
    formData.append('description', cours.getDescription().toString());
    formData.append('titre', cours.getTitre().toString());
    formData.append('langue', cours.getLangue().toString());
    formData.append('createdBy', cours.getCreatedBy().toString());

    if (image != null) {
      formData.append('image', image, image.name);
    } else {
      // If the image is null, keep the existing image in the FormData
      formData.append('image', cours.getImage().toString());
    }

    console.log(formData.get('image'));


    return this.httpCours.put<Cours>('http://localhost:3003/api/Cours/' + id, formData);

  }
  deleteCours(courseId: number) {
    return this.httpCours.delete("http://localhost:3003/api/Cours/" + courseId);
  }
}
