import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/Shared/services/auth-guard.service';
import { UserModel } from 'src/app/Shared/models/user.model';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authGuardService: AuthGuardService) { }

  ngOnInit() {
  }

  authenticate() {
    this.authGuardService.authenticate(new UserModel('dragon', 'sicredi'));
  }

}
