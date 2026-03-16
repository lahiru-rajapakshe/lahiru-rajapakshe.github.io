import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- Hero Section with Cover Image -->
    <section class="hero-section" style="background-image: url('img/meAndCar.png');">
      <div class="hero-overlay"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between min-h-screen py-32">
          <!-- Left Content -->
          <div class="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-slide-up">
            <p class="text-accent font-semibold text-lg mb-4 tracking-wider uppercase">Welcome to my portfolio</p>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              I'm <span class="text-accent">Lahiru Rajapakshe</span>
            </h1>
            <h2 class="text-2xl md:text-3xl font-medium text-white/90 mb-6">
              Backend Engineer & Spring Boot Expert
            </h2>
            <p class="text-white/80 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Building robust, scalable microservices and enterprise applications
              with Java, Spring Boot, and cloud-native technologies.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a routerLink="/projects" class="btn-primary">
                View My Work
              </a>
              <a routerLink="/contact" class="btn-secondary text-white border-white hover:bg-white hover:text-primary">
                Get In Touch
              </a>
            </div>
          </div>

          <!-- Right Content - Profile Image -->
          <div class="lg:w-1/2 flex justify-center lg:justify-end animate-slide-in-right">
            <div class="relative">
              <div class="absolute -inset-4 bg-accent/20 rounded-full blur-2xl"></div>
              <img
                src="img/Lahiru_Rajapakshe.png"
                alt="Lahiru Rajapakshe"
                class="profile-image profile-image-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-accent">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div *ngFor="let stat of stats" class="animate-fade-in">
            <div class="text-4xl md:text-5xl font-bold text-primary mb-2">{{ stat.value }}</div>
            <div class="text-primary/80 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2">
            <div class="relative">
              <div class="absolute -top-4 -left-4 w-full h-full bg-accent"></div>
              <img
                src="img/meAndCar.png"
                alt="About Me"
                class="relative z-10 w-full h-auto object-cover shadow-card"
              />
            </div>
          </div>
          <div class="lg:w-1/2">
            <p class="text-accent font-semibold uppercase tracking-wider mb-2">About Me</p>
            <h2 class="section-title">Professional Backend Engineer</h2>
            <p class="text-dark-gray mb-6 leading-relaxed">
              With over 3 years of experience in backend development, I specialize in building
              enterprise-grade applications using Java and Spring Boot ecosystem. My passion lies
              in creating clean, maintainable code and architecting scalable microservices.
            </p>
            <p class="text-dark-gray mb-8 leading-relaxed">
              I have extensive experience working with distributed systems, RESTful APIs,
              message queues, and cloud platforms. I believe in continuous learning and
              staying updated with the latest technologies and best practices.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="flex items-center">
                <span class="w-2 h-2 bg-accent mr-3"></span>
                <span class="text-primary font-medium">Microservices</span>
              </div>
              <div class="flex items-center">
                <span class="w-2 h-2 bg-accent mr-3"></span>
                <span class="text-primary font-medium">Spring Boot</span>
              </div>
              <div class="flex items-center">
                <span class="w-2 h-2 bg-accent mr-3"></span>
                <span class="text-primary font-medium">REST APIs</span>
              </div>
              <div class="flex items-center">
                <span class="w-2 h-2 bg-accent mr-3"></span>
                <span class="text-primary font-medium">Cloud Native</span>
              </div>
            </div>
            <a routerLink="/experience" class="btn-primary">
              View Experience
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services/Expertise Section -->
    <section class="section bg-light-gray">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <p class="text-accent font-semibold uppercase tracking-wider mb-2">What I Do</p>
          <h2 class="section-title center mx-auto">My Expertise</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services" class="card group hover:bg-primary transition-colors duration-300">
            <div class="w-16 h-16 bg-accent flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="service.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 group-hover:text-white transition-colors">{{ service.title }}</h3>
            <p class="text-dark-gray group-hover:text-white/80 transition-colors">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="section section-dark">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <p class="text-accent font-semibold uppercase tracking-wider mb-2">Technologies</p>
          <h2 class="text-3xl md:text-4xl font-bold text-white">Tech Stack</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Backend Stack -->
          <div class="bg-primary-light p-8 hover:bg-primary-dark transition-colors">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-accent flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">Backend</h3>
            </div>
            <ul class="space-y-3">
              <li *ngFor="let tech of backendTech" class="flex items-center text-white/80">
                <span class="w-2 h-2 bg-accent mr-3"></span>
                {{ tech }}
              </li>
            </ul>
          </div>

          <!-- Database Stack -->
          <div class="bg-primary-light p-8 hover:bg-primary-dark transition-colors">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-accent flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">Database</h3>
            </div>
            <ul class="space-y-3">
              <li *ngFor="let tech of databaseTech" class="flex items-center text-white/80">
                <span class="w-2 h-2 bg-accent mr-3"></span>
                {{ tech }}
              </li>
            </ul>
          </div>

          <!-- DevOps Stack -->
          <div class="bg-primary-light p-8 hover:bg-primary-dark transition-colors">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-accent flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">DevOps</h3>
            </div>
            <ul class="space-y-3">
              <li *ngFor="let tech of devopsTech" class="flex items-center text-white/80">
                <span class="w-2 h-2 bg-accent mr-3"></span>
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="section bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div>
            <p class="text-accent font-semibold uppercase tracking-wider mb-2">Portfolio</p>
            <h2 class="section-title">Featured Projects</h2>
          </div>
          <a routerLink="/projects" class="btn-secondary mt-6 lg:mt-0">
            View All Projects
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of featuredProjects" class="card group overflow-hidden p-0">
            <div class="h-48 bg-primary relative overflow-hidden">
              <div class="absolute inset-0 bg-accent/20 group-hover:bg-accent/40 transition-colors"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{{ project.title }}</h3>
              <p class="text-dark-gray mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tech of project.technologies" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-accent">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Start a Project?</h2>
        <p class="text-primary/80 text-lg mb-8 max-w-2xl mx-auto">
          Looking for a backend engineer with expertise in Java and Spring Boot?
          Let's discuss how I can help build your next robust, scalable application.
        </p>
        <a routerLink="/contact" class="btn-accent">
          Let's Work Together
        </a>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '15+', label: 'Happy Clients' },
    { value: '99%', label: 'Success Rate' }
  ];

  services = [
    {
      title: 'Backend Development',
      description: 'Building robust and scalable backend systems using Java, Spring Boot, and microservices architecture.',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2'
    },
    {
      title: 'API Development',
      description: 'Designing and implementing RESTful APIs with proper documentation, security, and best practices.',
      icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      title: 'Database Design',
      description: 'Creating efficient database schemas and implementing data access layers with optimal performance.',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
    },
    {
      title: 'Cloud Integration',
      description: 'Deploying and managing applications on cloud platforms like AWS, Azure, and GCP.',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
    },
    {
      title: 'System Architecture',
      description: 'Designing scalable, maintainable system architectures following industry best practices.',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      title: 'Performance Optimization',
      description: 'Analyzing and optimizing application performance for better user experience and efficiency.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    }
  ];

  backendTech = ['Java 17/21', 'Spring Boot 3.x', 'Spring Cloud', 'Spring Security', 'Spring Data JPA'];
  databaseTech = ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'];
  devopsTech = ['Docker & Kubernetes', 'CI/CD Pipelines', 'AWS / Azure', 'Git & GitFlow', 'Prometheus & Grafana'];

  featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A scalable microservices-based e-commerce platform with service discovery and API gateway.',
      technologies: ['Spring Boot', 'Kafka', 'Redis']
    },
    {
      title: 'Financial API System',
      description: 'Secure financial transaction processing system with real-time data synchronization.',
      technologies: ['Java', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Real-time Analytics',
      description: 'High-performance analytics dashboard with reactive data streaming capabilities.',
      technologies: ['Spring WebFlux', 'MongoDB', 'K8s']
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
