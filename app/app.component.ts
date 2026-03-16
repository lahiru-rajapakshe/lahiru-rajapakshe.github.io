import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-white">
      <app-navbar></app-navbar>
      <main class="pt-16">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Lahiru Rajapakshe | Backend Engineer';

  ngOnInit() {
    // Initialize any global scripts here
  }
}
