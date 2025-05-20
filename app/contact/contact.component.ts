import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="mb-12">
          <h1 class="text-4xl font-bold mb-2">
            <span class="text-white">Get in</span>
            <span class="text-spring-green">Touch</span>
          </h1>
          <p class="text-gray-300">Let's discuss your project or opportunity</p>
        </div>
        
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Contact Form -->
          <div class="lg:w-2/3">
            <div class="bg-terminal-black rounded-lg shadow-xl p-8">
              <h2 class="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-gray-300 mb-2" for="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      class="w-full px-4 py-3 bg-spring-dark border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:border-spring-green"
                      placeholder="Your name">
                  </div>
                  <div>
                    <label class="block text-gray-300 mb-2" for="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      class="w-full px-4 py-3 bg-spring-dark border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:border-spring-green"
                      placeholder="your.email@example.com">
                  </div>
                </div>
                
                <div>
                  <label class="block text-gray-300 mb-2" for="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    class="w-full px-4 py-3 bg-spring-dark border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:border-spring-green"
                    placeholder="What is this regarding?">
                </div>
                
                <div>
                  <label class="block text-gray-300 mb-2" for="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="6" 
                    class="w-full px-4 py-3 bg-spring-dark border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:border-spring-green"
                    placeholder="Your message here..."></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    class="w-full px-6 py-3 bg-spring-green text-spring-dark font-bold rounded-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    Send Message
                  </button>
                </div>
              </form>
              
              <div class="terminal-window mt-8">
                <div class="terminal-header">
                  <div class="terminal-circle red"></div>
                  <div class="terminal-circle yellow"></div>
                  <div class="terminal-circle green"></div>
                  <div class="ml-4 text-gray-300 text-sm">~/message_status</div>
                </div>
                <div class="terminal-body p-4">
                  <div class="terminal-prompt">send-message --to <span class="text-spring-green">backend-engineer</span></div>
                  <div class="text-gray-300">
                    <span class="text-spring-green">$</span> Message initialized...
                  </div>
                  <div class="text-gray-300">
                    <span class="text-spring-green">$</span> Validating fields<span class="loading-dots"></span>
                  </div>
                  <div class="text-gray-300">
                    <span class="text-spring-green">$</span> Ready to send! Just hit the button above.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div class="lg:w-1/3 space-y-8">
            <div class="bg-terminal-black rounded-lg shadow-xl p-8">
              <h2 class="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="text-spring-green mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-gray-400 text-sm">Email</div>
                    <a href="mailto:contact@example.com" class="text-white hover:text-spring-green">contact@example.com</a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-spring-green mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-gray-400 text-sm">Location</div>
                    <div class="text-white">Available Remotely / Worldwide</div>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="text-spring-green mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-gray-400 text-sm">Specializing in</div>
                    <div class="text-white">Spring Boot, Microservices, API Development</div>
                  </div>
                </div>
              </div>
              
              <div class="mt-8 pt-8 border-t border-gray-800">
                <div class="text-gray-300 mb-4">Connect with me</div>
                <div class="flex space-x-4">
                  <a href="https://github.com/" target="_blank" class="text-gray-400 hover:text-spring-green transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" class="text-gray-400 hover:text-spring-green transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/" target="_blank" class="text-gray-400 hover:text-spring-green transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="bg-terminal-black rounded-lg shadow-xl p-8">
              <h2 class="text-2xl font-bold text-white mb-6">Available For</h2>
              
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="terminal-circle green mt-1 mr-2"></span>
                  <div>
                    <span class="text-white font-medium">Full-time Positions</span>
                    <p class="text-gray-400 text-sm">Looking for backend engineering roles</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="terminal-circle green mt-1 mr-2"></span>
                  <div>
                    <span class="text-white font-medium">Contract Work</span>
                    <p class="text-gray-400 text-sm">Available for project-based contracts</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="terminal-circle green mt-1 mr-2"></span>
                  <div>
                    <span class="text-white font-medium">Consulting</span>
                    <p class="text-gray-400 text-sm">Spring Boot and microservices consulting</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="terminal-circle green mt-1 mr-2"></span>
                  <div>
                    <span class="text-white font-medium">Technical Mentoring</span>
                    <p class="text-gray-400 text-sm">Spring Boot and Java mentorship</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}