import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private isAuthenticated = false;

  constructor(private router: Router) { }

  canActivate() {
    if (this.isAuthenticated) {
      return this.isAuthenticated;
    }
    this.router.navigate(['login']);
    return false;
  }

  authenticate(user: UserModel): boolean {
    if (user.username === 'dragon') {
      if (user.password === 'sicredi') {
        this.isAuthenticated = true;
        this.router.navigate(['list']);
        return true;
      }
    }
    return false;
  }
}
