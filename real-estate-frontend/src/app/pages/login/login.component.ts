import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.apiService.login(email, password).subscribe(
        response => {
          console.log('Resposta do login:', response);
        
          this.router.navigate(['/']);
        },
        error => {
          console.error('Erro ao fazer login:', error);
          this.errorMessage = 'Erro ao fazer login. Verifique suas credenciais.';
        }
      );
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

 
  getErrors(controlName: string): string {
    const control = this.loginForm.get(controlName);
    if (control?.errors) { 
      if (control.errors['required'] && control.touched) {
        return 'Campo obrigatório.';
      } else if (control.errors['email'] && control.touched) {
        return 'Email inválido.';
      }
    }
    return '';
  }
  
}
