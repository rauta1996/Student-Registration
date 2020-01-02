import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.homeForm = this.fb.group({
      id:'',
      sname:'',
      email:'',
      class:'',
      year:'',
      city:'',
      country:''
    });
   }

  data:any=[];

  ngOnInit() {}
  
  onSave(value){
    this.data.push(this.homeForm.value);
    return localStorage.setItem('StudentData', value);
  }
  userData(){
    this.homeForm.reset();
  }
}
