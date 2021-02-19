import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  baseUrl = 'http://localhost:3333/';

  constructor(private httpClient: HttpClient) { }

  login(email:string, password:string) {
    const url = `${this.baseUrl}/login`
    return this.httpClient.post<{token: string}>(url, {email, password}).pipe(tap(res => {
      localStorage.setItem('token', res.token);
    }))
  }
  register(name: string, email: string, password:string){
    const url = `${this.baseUrl}/register`
    return this.httpClient.post<{token: string}>(url, {name, email, password}).pipe(tap(res => {
      this.login(email, password);
    }));
  }
  logout() {
    localStorage.removeItem('token');
  }
  public get loggedIn(): boolean{
    return localStorage.getItem('token') !==  null;
  }
}
