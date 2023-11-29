import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './css/style.css',]
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  login(formAC) {
    let email = formAC.value['email'];
    let password = formAC.value['password'];
    let box = formAC.value['box'];

    this.userService.login(email, password).subscribe(
      (res: any) => {
        console.log('Login successful', res);
        this.router.navigate(['/']);
        (box.checked === true) ? localStorage.setItem('logedIN', 'true') : null;
      },
      (err: any) => {
        console.error('Login failed:', err);
        alert('Login failed');
        // Handle login error
      }
    );
  }
  public showPassword: boolean = false;
  public password: string = '';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
