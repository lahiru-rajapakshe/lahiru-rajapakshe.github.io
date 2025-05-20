import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="max-w-lg w-full">
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-circle red"></div>
            <div class="terminal-circle yellow"></div>
            <div class="terminal-circle green"></div>
            <div class="ml-4 text-gray-300 text-sm">~/error</div>
          </div>
          <div class="terminal-body p-6">
            <div class="terminal-prompt mb-3">cd {{ currentPath }}</div>
            <div class="text-red-500 mb-4">
              <span class="text-yellow-500">Exception</span>: PathNotFoundException - The requested resource could not be found.
            </div>
            
            <div class="terminal-prompt mb-3">http-status</div>
            <div class="font-code text-gray-300 mb-4">
              HTTP Status: <span class="text-red-500">404</span> Not Found
            </div>
            
            <div class="terminal-prompt mb-3">debug --show-stacktrace</div>
            <div class="font-code text-gray-400 text-sm mb-6">
              at ResourceResolver.findResource(ResourceResolver.java:102)<br>
              at RouterPathMatcher.matchPath(RouterPathMatcher.java:45)<br>
              at RouterOutlet.activateRoute(RouterOutlet.java:118)<br>
              ...
            </div>
            
            <div class="terminal-prompt mb-3">suggest-solution</div>
            <div class="mb-6">
              <div class="text-spring-green mb-2">Suggested solutions:</div>
              <ul class="space-y-2 text-gray-300">
                <li>• Return to the <span class="text-spring-green cursor-pointer hover:underline" (click)="navigateToHome()">home page</span></li>
                <li>• Check the URL for typos</li>
                <li>• Contact the <span class="text-spring-green cursor-pointer hover:underline" (click)="navigateToContact()">administrator</span></li>
              </ul>
            </div>
            
            <div class="terminal-prompt">exit</div>
            <div class="text-gray-300">
              Closing error handler. Redirecting to navigation...
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {
  currentPath: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Display the path that wasn't found
    this.currentPath = window.location.pathname || '/unknown-path';
  }
  
  navigateToHome(): void {
    this.router.navigate(['/']);
  }
  
  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}