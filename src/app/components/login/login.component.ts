import { AccountService } from './../../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  }
  constructor(private router: Router, private accountService: AccountService) { }
  
 
  ngOnInit(): void {
  }
  async onSubmit(){
    console.log('Login ativado');
    try {
      const result = await this.accountService.login(this.login);
      console.log('Login efetuado');
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }
}
