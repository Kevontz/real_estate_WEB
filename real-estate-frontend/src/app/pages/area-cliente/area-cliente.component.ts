import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.component.html',
  styleUrls: ['./area-cliente.component.css']
})
export class AreaClienteComponent implements OnInit {

  user: any; 

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getClientData().subscribe(
      (userInfo) => {
        console.log(userInfo); // Exibe informações do usuário
        this.user = userInfo;
      },
      (error) => {
        console.error('Erro ao obter informações do usuário', error);
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }
}
