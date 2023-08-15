import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from 'src/types/types';

@Injectable()
export class AuthService {

  isLoading: boolean = false;
  private isAuthenticated: boolean = false;

  login(form: LoginForm) {
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.emailId, form.password)
    .then((userCredential) => {
      console.log(userCredential)
      this.isAuthenticated = true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      this.isAuthenticated = false;
    }).finally(() => {
      this.isLoading = false;
    })
  }

  register(form: RegisterForm) {
    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.emailId, form.password)
    .then((userCredential) => {
      console.log(userCredential);
      this.isAuthenticated = true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.isAuthenticated = false;
    }).finally(() => {
      this.isLoading = false;
    })
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuthenticated = false;
    }).catch((error) => {
      this.isAuthenticated = true;
    });
  }

  checkAuth(): boolean {
    return this.isAuthenticated;
  }
}
