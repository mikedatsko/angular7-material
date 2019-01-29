import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host: string = 'https://hiberbackend.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  get(path) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ${btoa('admin:admin')}`
      })
    };
    return this.http.get(`${this.host}/${path}`, httpOptions);
  }
}
