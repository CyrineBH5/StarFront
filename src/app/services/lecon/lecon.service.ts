import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lecon } from 'src/app/models/Lecon/lecon';

@Injectable({
  providedIn: 'root'
})
export class LeconService {


  constructor(private httpLecon: HttpClient) { }

  ajouterLecon(lecon: Lecon, file: File) {
    // Create FormData object
    const formData = new FormData();

    // Append form data
    formData.append('idLecon', lecon.getIdLecon().toString());
    formData.append('description', lecon.getDescription().toString());
    formData.append('titre', lecon.getTitre().toString());
    formData.append('idCours', lecon.getIdCours().toString());
    // Append file
    formData.append('file', file, file.name);

    // Post the formData
    this.httpLecon.post<Lecon>('http://localhost:3003/api/Lecon', formData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }
  getAllLeconsByCours(coursId: number): Observable<any[]> {
    return this.httpLecon.get<any[]>("http://localhost:3003/api/cours/" + coursId + "/lecons");
  }
  getLeconDetails(coursId: number, leconId: number): Observable<any> {
    return this.httpLecon.get<any>('http://localhost:3003/api/lecon/' + coursId + '/' + leconId);
  }
  updateLecon(idlecon: number, updatedLecon: Lecon): Observable<Lecon> {
    return this.httpLecon.put<Lecon>('http://localhost:3003/api/lecon/' + idlecon, updatedLecon);
  }
  deleteLecon(leconId: number) {
    return this.httpLecon.delete("http://localhost:3003/api/lecon/" + leconId);
  }
}
