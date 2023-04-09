import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { College } from './college';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  private baseURL = "http://localhost:10000/api/college";

  constructor(private httpClient: HttpClient) { }
  
  getCollegesList(): Observable<College[]>{
    return this.httpClient.get<College[]>(`${this.baseURL}`);
  }

  createCollege(college: College): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, college);
  }

  getCollegeBycollegeName(collegeName: String): Observable<College>{
    return this.httpClient.get<College>(`${this.baseURL}/${collegeName}`);
  }

  updateCollege(collegeName: string, college: College): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${collegeName}`, college);
  }

  deleteCollege(collegeName: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${collegeName}`);
  }
}
