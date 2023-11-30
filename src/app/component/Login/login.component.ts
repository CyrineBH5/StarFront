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
  showSpinner = false;
  isActive: boolean = false;
  ngOnInit(): void {
    // Automatically show the spinner for 1 second
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
  }




  public showPassword: boolean = false;
  public password: string = '';

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async login(formAC) {
    let email = formAC.value['email'];
    let password = formAC.value['password'];
    let box = formAC.value['box'];

    this.userService.login(email, password).subscribe(
      async (res: any) => {
        console.log('Login successful', res);
        this.router.navigate(['/']);
        (box === true) ? localStorage.setItem('logedIN', 'true') : null;
        console.log(String(await this.userService.findUserByEmail(email)));
        localStorage.setItem('idUtilisateur', String(await this.userService.findUserByEmail(email)));
        localStorage.setItem('email', email);
      },
      (err: any) => {
        console.error('Login failed:', err);
        alert('Login failed');
        // Handle login error
      }
    );
  }
}
