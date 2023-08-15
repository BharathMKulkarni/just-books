import { Component, Input } from '@angular/core';
import { LoginForm } from 'src/types/types';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: LoginForm = {} as LoginForm

  constructor(private authService: AuthService,
    private router: Router) {}

  onLoginFormSubmit() {
    this.authService.login(this.form);
    this.router.navigate(['']);
  }

  isLoading(): boolean {
    return this.authService.isLoading;
  }
}
