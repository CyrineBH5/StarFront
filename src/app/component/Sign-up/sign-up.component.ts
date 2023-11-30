import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router'; // Import Router
import { User } from 'src/app/models/User/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css', './css/style.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  showSpinner = false;
  isActive: boolean = false;
  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
  }

  public showPassword: boolean = false;
  public password: string = '';
  public confirmPassword: string;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  public register(signumform) {
    let nom_prenom = signumform.value['nomprenom'];
    let addres = signumform.value['addres'];
    let grade = signumform.value['grade'];
    let email = signumform.value['email'];
    let password = signumform.value['password'];
    let confirmPassword = signumform.value['confirmPassword'];
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    console.log(nom_prenom, addres, grade, email, password, confirmPassword);
    this.userService.Register(new User(nom_prenom, addres, null/*photo*/, grade, null/*role*/, email, password)).subscribe(
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
