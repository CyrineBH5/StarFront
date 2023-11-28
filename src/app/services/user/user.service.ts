import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpUser: HttpClient) { }



  public login(email: string, mdp: string): Observable<User>{
    const body = { email, mdp };
    console.log(body);

    return this.httpUser.post<User>('http://localhost:3003/api/login', body);
  }
}

