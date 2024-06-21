import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users';
  private apiUrl2 = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }
  
  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl2}/login`;
    return this.http.post<any>(loginUrl, { email, password }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }
  
  logout(): void {
    localStorage.removeItem('token');
  }
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
