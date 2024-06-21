import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaClienteService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  // Método para obter dados do cliente
  getClientData(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.baseUrl}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

  // Método para atualizar dados do cliente
  updateClientData(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.put(`${this.baseUrl}`, data, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }
}
