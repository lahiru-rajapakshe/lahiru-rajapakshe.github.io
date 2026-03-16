import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <nav [class]="isScrolled ? 'navbar-fixed' : 'bg-primary'" class="transition-all duration-300 z-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center group">
              <div class="w-10 h-10 bg-accent flex items-center justify-center mr-3 group-hover:bg-white transition-colors">
                <span class="text-primary font-bold text-xl">L</span>
              </div>
              <div class="hidden sm:block">
                <span class="text-white font-bold text-lg tracking-wide">LAHIRU</span>
                <span class="text-accent font-bold text-lg tracking-wide ml-1">RAJAPAKSHE</span>
              </div>
            </a>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden lg:flex items-center space-x-8">
            <a *ngFor="let item of navItems"
               [routerLink]="item.path"
               routerLinkActive="text-accent"
               [routerLinkActiveOptions]="{exact: item.path === '/'}"
               class="text-white hover:text-accent transition-colors font-medium relative group">
              {{ item.label }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a routerLink="/contact" class="btn-primary ml-4">
              Hire Me
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="lg:hidden">
            <button (click)="toggleMobileMenu()" class="text-white hover:text-accent focus:outline-none p-2">
              <svg *ngIf="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg *ngIf="mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div *ngIf="mobileMenuOpen" class="lg:hidden bg-primary-dark py-4 animate-fade-in">
          <div class="flex flex-col space-y-1">
            <a *ngFor="let item of navItems"
               [routerLink]="item.path"
               routerLinkActive="bg-accent text-primary"
               [routerLinkActiveOptions]="{exact: item.path === '/'}"
               (click)="closeMobileMenu()"
               class="text-white hover:bg-accent hover:text-primary transition-colors py-3 px-4 font-medium">
              {{ item.label }}
            </a>
            <a routerLink="/contact"
               (click)="closeMobileMenu()"
               class="bg-accent text-primary py-3 px-4 font-semibold mt-4 mx-4 text-center">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }
  `]
})
export class NavbarComponent implements OnInit {
  mobileMenuOpen: boolean = false;
  isScrolled: boolean = false;

  navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (window.innerWidth >= 1024) {
      this.mobileMenuOpen = false;
    }
  }
}
