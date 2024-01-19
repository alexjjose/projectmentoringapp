import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentorlogin',
  templateUrl: './mentorlogin.component.html',
  styleUrls: ['./mentorlogin.component.css']
})
export class MentorloginComponent implements OnInit {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  loginMentor() {
    this.apiService.loginMentor(this.loginData)
      .subscribe(response => {
        console.log('Login successful:', response);

        this.router.navigate(['/mentordash'])
        // Handle success, e.g., redirect to a dashboard
      }, error => {
        console.error('Login failed:', error);
        // Handle error, e.g., show an error message
      });
  }
}