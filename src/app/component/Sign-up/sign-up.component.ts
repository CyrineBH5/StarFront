import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css', './css/style.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public showPassword: boolean = false;
  public password: string = '';
  public confirmPassword: string;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  public register(signumform) {
    let response = this.userService.Register(signumform.value);
    response.subscribe(
      (res) => {
        console.log(res);
        alert("Signup done successfully");
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
        alert("Signup failed");
      }
    );
  }
}
