import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor() { }
  login(user: any){
    //Simulando login
    return new Promise((resolve)=>{
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    })
  }
}
