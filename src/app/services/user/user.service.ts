import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpUser: HttpClient) { }
  myArray: any = [];
 /* public login(email: string, password: string): Observable<User> {
    const body = { email, password };
    this.httpUser.post<User>('http://localhost:3003/api/login', body).subscribe(
      (res: any) => {
        console.log(":)");
      },
      (err: any) => {
        console.log(":(");
      }
    );
  }*/
}

