import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private service:AuthService){

  }
  canActivate(
    Next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log("before done");
      if( localStorage.getItem('loggedIn')=='true'){
        //console.log("done");

        return true;
      }else{
        this.router.navigate(['\login'])
      }

    return false;
  }

}
