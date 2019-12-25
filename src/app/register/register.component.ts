import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registForm:FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    public authService: AuthService) {
    this.registForm = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      confpassword:['',Validators.required]
    });
   }

   get f(){return this.registForm.controls;}

  ngOnInit(){}

   onRegister(){
     this.submitted= true;
     if(this.registForm.invalid){
       return;
     }else{
       localStorage.clear();
        console.log(this.registForm.value);
        this.authService.onRegister(JSON.stringify(this.registForm.value));
        this.router.navigateByUrl('/login');  
    }
  }
}
