import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  checkLogin(userName: string, password: string): void {
    if (!userName && !password) {
      return;
    }
    if (userName === 'admin') {
      this.authService.loginAdmin();
    } else if (userName === 'user') {
      this.authService.login();
    }
  }

}
