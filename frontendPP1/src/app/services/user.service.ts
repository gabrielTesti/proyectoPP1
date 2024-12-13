import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }


 /*  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  } */


    register(user: any) {
      return this.http.post('http://localhost:8080/users/register', user, { responseType: 'text' });
    }
 


  login(credentials: { username: string, password: string }) {
   return this.http.post('http://localhost:8080/users/login', credentials, { responseType: 'text' });
  }


  // metodo para obtener usuarios
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }



}
