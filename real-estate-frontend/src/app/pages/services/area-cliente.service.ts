import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaClienteService {

  private baseUrl = 'http://localhost:8080/api'; // URL base do backend

  constructor(private http: HttpClient) { }

  // Método para obter dados do cliente
  getClientData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/area-cliente`);
  }

  // Método para atualizar dados do cliente
  updateClientData(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/area-cliente`, data);
  }

}
