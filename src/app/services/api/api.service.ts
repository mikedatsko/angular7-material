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
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa('admin:admin')}`
      })
    };
    console.log('httpOptions', httpOptions);
    return this.http.get(`${this.host}/${path}`, httpOptions);
  }
}
