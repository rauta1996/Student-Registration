import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) {}
   
  onRegister(value){
    return localStorage.setItem('userData', value);
  }
  
  onLogin(email,password){
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);

    if(userData.email === email && userData.password === password){
      this.router.navigateByUrl('/home');
    }else{
      alert("Invalid email or password given !!!");
    }
  }

}
