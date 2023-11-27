import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './css/style.css',]
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }
  email: string = '';
  password: string = '';
  ngOnInit(): void {
  }
  login() {

    /*this.userService.login(this.email, this.password).subscribe(
      (res: any) => {
        console.log('Login successful', res);
        // Do something with the response if needed
      },
      (err: any) => {
        console.error('Login failed:', err);
        // Handle login error
      }
    );*/
  }
}
