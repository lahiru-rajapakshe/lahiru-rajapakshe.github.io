import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="bg-terminal-black border-b border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center">
              <div class="terminal-circle green mr-2"></div>
              <span class="text-spring-green font-bold text-xl">DEV@PORTFOLIO</span>
              <span class="text-terminal-green animate-terminal-blink ml-1">_</span>
            </a>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a *ngFor="let item of navItems" 
               [routerLink]="item.path" 
               routerLinkActive="text-spring-green" 
               class="text-gray-300 hover:text-spring-green transition-colors">
              {{ item.label }}
            </a>
          </div>
          
          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button (click)="toggleMobileMenu()" class="text-gray-300 hover:text-spring-green focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path *ngIf="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path *ngIf="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div *ngIf="mobileMenuOpen" class="md:hidden py-4">
          <div class="flex flex-col space-y-4">
            <a *ngFor="let item of navItems" 
               [routerLink]="item.path" 
               routerLinkActive="text-spring-green" 
               (click)="closeMobileMenu()"
               class="text-gray-300 hover:text-spring-green transition-colors py-2">
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit, AfterViewInit {
  mobileMenuOpen: boolean = false;
  navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (window.innerWidth >= 768) {
      this.mobileMenuOpen = false;
    }
  }
}