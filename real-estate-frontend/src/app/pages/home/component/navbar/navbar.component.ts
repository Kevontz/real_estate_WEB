import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.userService.isAuthenticated();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
