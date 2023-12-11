import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private http: HttpClient) {}

  // Add a new contact
  addContact(contact: any): Observable<any> {
    return this.http.post(`http://localhost:3003/api/contact`, contact);
  }
}
