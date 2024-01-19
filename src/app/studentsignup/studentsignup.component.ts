import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.css']
})
export class StudentsignupComponent implements OnInit {

  name = ""
  email = ""
  phonenum = ""
  password = ""
  confirmpass = ""
  gender = ""

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  read=()=>{
      let data={
      "name": this.name,
      "email": this.email,
      "phonenum": this.phonenum,
      "password": this.password,
      "confirmpass": this.confirmpass,
      "gender": this.gender,
     }

    console.log(data)
    this.api.reg(data).subscribe(
      (response:any)=>{
  
        console.log(response)
        alert("Submitted successfully")
        this.router.navigate(['/']);


      }
    )
    }
  }
