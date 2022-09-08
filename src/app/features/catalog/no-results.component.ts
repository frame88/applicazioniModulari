import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-results',
  template: `
    <p>
      no-results!
    </p>

    <button routerLink="../">Back to catalog</button>
  `,
  styles: [
  ]
})
export class NoResultsComponent {

  constructor(private router: Router) { }

  back() {
    this.router.navigateByUrl('catalog')
  }
}
