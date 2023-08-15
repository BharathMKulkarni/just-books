import { Component } from '@angular/core';
import { RegisterForm } from 'src/types/types';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: RegisterForm = {} as RegisterForm;

  constructor(private authService: AuthService,
    private router: Router) {}

  onSubmit() {
    if (this.registerForm.password !== this.registerForm.confirmPassword) return
    this.authService.register(this.registerForm);
    this.router.navigate(['']);
  }

  isLoading(): boolean {
    return this.authService.isLoading;
  }
}
