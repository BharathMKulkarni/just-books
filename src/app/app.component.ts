import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase.config';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'just-books';

  constructor(private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  isAuthenticated(): boolean {
    return this.authService.checkAuth();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
