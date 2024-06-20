import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'; // Ajuste conforme necessário


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.userService.registerUser(this.signupForm.value).subscribe(
        response => {
          console.log('User registered successfully:', response);
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error registering user:', error);
        }
      );
    }
  }
}
