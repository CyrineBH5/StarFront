import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css', './css/style.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  step: number = 1;
  email: string = '';
  code: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  ngOnInit(): void {
  }
  forgetPassword(formAC) {
    let email = formAC.value['email'];
    this.userService.forgotPassword(email).subscribe(
      (res: any) => {
        console.log(res);
        this.nextStep();
      },
      (err: any) => {
        console.error('Forgot password failed:', err);
        alert('Forgot password failed');
      }
    );
  }




  verifyCode(form: any) {
    console.log('Verification Code:', this.code);

    this.userService.isTokenValid(this.code).subscribe(
      (res: any) => {
        console.log(res);

        if (res.isValid) {
          console.log("nice");
          this.nextStep()

        } else {
          console.log("8alett el code");

        }

      },
      (err: any) => {
        console.error('Login failed:', err);

        // Handle login error
      }
    );
  }

  setNewPassword(form: any) {
    console.log('New Password:', this.newPassword);
    console.log('Confirmed Password:', this.confirmPassword);

    // Simulate server communication for updating the password
    // Replace this with actual server communication
    if (this.newPassword === this.confirmPassword) {
      this.userService.resetPassword(this.code, this.newPassword).subscribe(
        (res: any) => {
          console.log(res);
          this.router.navigate(['/']);
        },
        (err: any) => {
          console.error('Login failed:', err);
          alert('Login failed');
          // Handle login error
        }
      );
      this.email = '';
      this.code = '';
      this.newPassword = '';
      this.confirmPassword = '';
      this.step = 1;
    } else {
      // Handle error, show error message, etc.
    }
  }

  nextStep() {
    // Move to the next step
    this.step++;
  }


}
