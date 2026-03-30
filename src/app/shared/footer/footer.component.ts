import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  constructor(private router: Router) {}

  logout() {
    console.log('Logout clicked');

    localStorage.clear();
    this.router.navigate(['/login']);
  }
}