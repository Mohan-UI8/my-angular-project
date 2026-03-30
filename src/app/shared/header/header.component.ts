import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  logout() {
    console.log('Logout clicked');

    // Clear data (optional)
    localStorage.clear();

    // Redirect
    this.router.navigate(['/login']);
  }
}