import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpUser: HttpClient) { }



  public login(email: string, mdp: string): Observable<User> {
    const body = { email, mdp };
    console.log(body);

    return this.httpUser.post<User>('http://localhost:3003/api/login', body);
  }

  public forgotPassword(email: string): Observable<User> {
    const body = { email };
    return this.httpUser.post<User>('http://localhost:3003/api/forgot-password', body);
  }

  public isTokenValid(token: string) {
    return this.httpUser.get<{ isValid: boolean }>('http://localhost:3003/api/check-reset-token/' + token);
  }
  public resetPassword(token: string, newPassword: String): Observable<User> {
    const body = { newPassword };
    return this.httpUser.post<User>('http://localhost:3003/api/reset-password/' + token, body);
  }
  public Register(user: any) {
    return this.httpUser.post<User>('http://localhost:3003/api/register', user);

  }

  public findUserByEmail(email: any) {
  return new Promise<number>((resolve, reject) => {
    this.httpUser.get<User>('http://localhost:3003/api/getUser/'+email).subscribe(
      (res: any) => {
        resolve(res.Utilisateur.id); }
        ,
      (err: any) => {
        reject(err); // Reject the promise if there's an error
      }
    );
  });
}
}
