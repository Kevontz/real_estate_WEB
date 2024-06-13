import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private baseUrl = 'http://localhost:8080'; // Atualize com a URL do seu back-end

  constructor(private http: HttpClient) { }

  getAllProperties(): Observable<any> {
    return this.http.get(`${this.baseUrl}/properties`);
  }

  getPropertyById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/properties/${id}`);
  }

  addProperty(propertyData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/properties`, propertyData);
  }

  updateProperty(id: string, propertyData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/properties/${id}`, propertyData);
  }

  deleteProperty(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/properties/${id}`);
  }
}
