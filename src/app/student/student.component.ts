import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  loginStudent() {
    this.apiService.loginStudent(this.loginData)
      .subscribe(response => {
        console.log('Login successful:', response);

        this.router.navigate(['/studentdash'])
        // Handle success, e.g., redirect to a dashboard
      },
      
      error => {
        console.error('Login failed:', error);
        // Handle error, e.g., show an error message
      });
  }
}