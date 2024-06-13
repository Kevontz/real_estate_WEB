import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  login(credentials: any): void {
    // Chamar método de login do serviço de autenticação
    this.authService.login(credentials);
  }
}
