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


}
