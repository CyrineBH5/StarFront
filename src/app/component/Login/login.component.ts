import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './css/style.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  showSpinner = false;
  isActive: boolean = false;
  loginError: boolean = false;
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

        localStorage.setItem('loggedIn', 'true');
        //console.log(String(await this.userService.findUserByEmail(email)));
        localStorage.setItem(
          'idUtilisateur',
          String(await this.userService.findUserByEmail(email))
        );
        localStorage.setItem('email', email);
        console.log(box);

        if (box == true) {
          localStorage.setItem('remeberMe', 'true');
        } else {
          let isTabClosed = false;

          window.addEventListener('beforeunload', (event) => {
            if (!isTabClosed) {
              localStorage.clear();
            }
          });

          window.addEventListener('unload', () => {
            isTabClosed = true;
          });

          window.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
              // The tab is being closed or minimized
              isTabClosed = true;
            }
          });
        }
        this.router.navigate(['/']);
        this.loginError = false;
      },
      (err: any) => {
        console.error('Login failed:', err);
        // alert('Login failed');
        // Handle login error
        this.loginError = true;
      }
    );
  }
}
