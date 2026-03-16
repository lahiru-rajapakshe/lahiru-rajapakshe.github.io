import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <!-- Page Header -->
    <section class="bg-primary py-24 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 border-4 border-accent"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-accent"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center">
          <p class="text-accent font-semibold uppercase tracking-wider mb-4">Get In Touch</p>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h1>
          <p class="text-white/70 max-w-2xl mx-auto">
            Let's discuss your project or opportunity. I'm always open to new challenges and collaborations.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Contact Form -->
          <div class="lg:w-2/3">
            <div class="bg-light-gray p-8 md:p-12">
              <h2 class="text-2xl font-bold text-primary mb-2">Send a Message</h2>
              <p class="text-dark-gray mb-8">Fill out the form below and I'll get back to you as soon as possible.</p>

              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-primary font-medium mb-2" for="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      class="form-input"
                      placeholder="John Doe">
                  </div>
                  <div>
                    <label class="block text-primary font-medium mb-2" for="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      class="form-input"
                      placeholder="john@example.com">
                  </div>
                </div>

                <div>
                  <label class="block text-primary font-medium mb-2" for="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    class="form-input"
                    placeholder="How can I help you?">
                </div>

                <div>
                  <label class="block text-primary font-medium mb-2" for="message">Your Message</label>
                  <textarea
                    id="message"
                    rows="6"
                    class="form-input resize-none"
                    placeholder="Tell me about your project..."></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    class="btn-primary w-full md:w-auto">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Contact Info Sidebar -->
          <div class="lg:w-1/3 space-y-8">
            <!-- Contact Details Card -->
            <div class="bg-primary p-8 text-white">
              <h3 class="text-xl font-bold mb-6">Contact Information</h3>

              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-accent flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-white/60 text-sm mb-1">Email</p>
                    <a href="mailto:lahiru@example.com" class="text-white hover:text-accent transition-colors">
                      lahiru@example.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-12 h-12 bg-accent flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-white/60 text-sm mb-1">Location</p>
                    <p class="text-white">Sri Lanka / Remote Worldwide</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-12 h-12 bg-accent flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-white/60 text-sm mb-1">Response Time</p>
                    <p class="text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div class="mt-8 pt-8 border-t border-white/20">
                <p class="text-white/60 text-sm mb-4">Connect with me</p>
                <div class="flex space-x-3">
                  <a href="https://github.com/lahiru-rajapakshe" target="_blank" class="w-10 h-10 bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/lahiru-rajapakshe" target="_blank" class="w-10 h-10 bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/lahiru_dev" target="_blank" class="w-10 h-10 bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Available For Card -->
            <div class="bg-accent p-8">
              <h3 class="text-xl font-bold text-primary mb-6">Available For</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-primary">Full-time Positions</p>
                    <p class="text-primary/70 text-sm">Backend engineering roles</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-primary">Contract Work</p>
                    <p class="text-primary/70 text-sm">Project-based contracts</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-primary">Consulting</p>
                    <p class="text-primary/70 text-sm">Spring Boot & microservices</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-primary">Technical Mentoring</p>
                    <p class="text-primary/70 text-sm">Java & Spring mentorship</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
