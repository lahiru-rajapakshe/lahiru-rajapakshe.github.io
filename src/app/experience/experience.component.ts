import { Component, OnInit } from '@angular/core';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  logo?: string;
}

@Component({
  selector: 'app-experience',
  template: `
    <div class="min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="mb-12">
          <h1 class="text-4xl font-bold mb-2">
            <span class="text-white">Professional</span>
            <span class="text-spring-green">Experience</span>
          </h1>
          <p class="text-gray-300">My journey as a Spring Boot Backend Engineer</p>
        </div>
        
        <!-- Terminal Career Timeline -->
        <div class="mb-16">
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="terminal-circle red"></div>
              <div class="terminal-circle yellow"></div>
              <div class="terminal-circle green"></div>
              <div class="ml-4 text-gray-300 text-sm">~/career_timeline</div>
            </div>
            <div class="terminal-body p-6">
              <div class="terminal-prompt mb-3">cat career_timeline.json | jq</div>
              <div class="mb-2 font-code text-white">{{'{'}}}</div>
              <div class="mb-2 font-code ml-4 text-green-400">"name": "Your Name",</div>
              <div class="mb-2 font-code ml-4 text-green-400">"role": "Spring Boot Engineer",</div>
              <div class="mb-2 font-code ml-4 text-green-400">"years_of_experience": 3,</div>
              <div class="mb-2 font-code ml-4 text-blue-400">"timeline": [</div>
              
              <div *ngFor="let exp of experiences; let last = last">
                <div class="mb-1 font-code ml-8 text-white">{{'{'}}}</div>
                <div class="mb-1 font-code ml-12 text-yellow-400">"company": "{{'{{'}} exp.company {{'}}'}}"</div>
                <div class="mb-1 font-code ml-12 text-yellow-400">"position": "{{'{{'}} exp.position {{'}}'}}"</div>
                <div class="mb-1 font-code ml-12 text-yellow-400">"period": "{{'{{'}} exp.period {{'}}'}}"</div>
                <div class="mb-1 font-code ml-8 text-white">{{'}'}}{{'{{'}} last ? '' : ',' {{'}}'}}</div>
              </div>
              
              <div class="mb-2 font-code ml-4 text-blue-400">]</div>
              <div class="mb-2 font-code text-white">{{'}'}}}</div>
            </div>
          </div>
        </div>
        
        <!-- Detailed Experience -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold mb-12">
            <span class="text-white">Work</span>
            <span class="text-spring-green">History</span>
          </h2>
          
          <div class="space-y-16">
            <div *ngFor="let exp of experiences" class="flex flex-col md:flex-row bg-terminal-black rounded-lg shadow-xl overflow-hidden">
              <div class="md:w-1/3 p-8 bg-spring-dark flex items-center justify-center">
                <div class="text-center">
                  <div class="text-3xl font-bold text-white mb-2">{{'{{'}} exp.company {{'}}'}}</div>
                  <div class="text-xl text-spring-green mb-1">{{'{{'}} exp.position {{'}}'}}</div>
                  <div class="text-gray-400">{{'{{'}} exp.period {{'}}'}}</div>
                  
                  <div class="mt-6 flex flex-wrap justify-center gap-2">
                    <span *ngFor="let tech of exp.technologies.slice(0, 5)" class="px-3 py-1 bg-spring-dark border border-spring-green text-spring-green rounded-full text-xs">
                      {{'{{'}} tech {{'}}'}}
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="md:w-2/3 p-8">
                <p class="text-gray-300 mb-6">{{'{{'}} exp.description {{'}}'}}</p>
                
                <div class="mb-6">
                  <h3 class="text-spring-green text-lg mb-3">Key Achievements</h3>
                  <ul class="space-y-2">
                    <li *ngFor="let achievement of exp.achievements" class="flex items-start">
                      <span class="terminal-circle green mt-1 mr-2"></span>
                      <span class="text-gray-300">{{'{{'}} achievement {{'}}'}}</span>
                    </li>
                  </ul>
                </div>
                
                <div *ngIf="exp.technologies.length > 5" class="mt-4">
                  <h3 class="text-spring-green text-lg mb-3">Additional Technologies</h3>
                  <div class="flex flex-wrap gap-2">
                    <span *ngFor="let tech of exp.technologies.slice(5)" class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                      {{'{{'}} tech {{'}}'}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Education Section -->
        <div class="mt-20">
          <h2 class="text-3xl font-bold mb-12">
            <span class="text-white">Education &</span>
            <span class="text-spring-green">Training</span>
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-terminal-black rounded-lg shadow-xl p-8">
              <h3 class="text-2xl font-bold text-white mb-3">Bachelor of Science in Computer Science</h3>
              <div class="text-spring-green mb-2">University Name</div>
              <div class="text-gray-400 mb-6">2017 - 2021</div>
              
              <p class="text-gray-300 mb-4">Graduated with honors, specializing in software engineering and distributed systems. Completed coursework in algorithms, data structures, database design, and software architecture.</p>
              
              <div class="mt-4 pt-4 border-t border-gray-800">
                <div class="text-spring-green mb-2">Relevant Coursework</div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="text-gray-300 text-sm">• Data Structures & Algorithms</div>
                  <div class="text-gray-300 text-sm">• Object-Oriented Programming</div>
                  <div class="text-gray-300 text-sm">• Database Systems</div>
                  <div class="text-gray-300 text-sm">• Distributed Computing</div>
                  <div class="text-gray-300 text-sm">• Software Engineering</div>
                  <div class="text-gray-300 text-sm">• Web Application Development</div>
                </div>
              </div>
            </div>
            
            <div class="bg-terminal-black rounded-lg shadow-xl p-8">
              <h3 class="text-2xl font-bold text-white mb-3">Professional Development</h3>
              
              <div class="space-y-6">
                <div>
                  <div class="text-spring-green font-bold mb-1">Spring Framework 5 & Spring Boot 2 Certification</div>
                  <div class="text-gray-400 mb-2">Pivotal Education, 2023</div>
                  <p class="text-gray-300 text-sm">Comprehensive training in Spring Framework 5 and Spring Boot 2, covering dependency injection, Spring MVC, data access, security, and microservices.</p>
                </div>
                
                <div>
                  <div class="text-spring-green font-bold mb-1">Oracle Certified Professional: Java SE 11 Developer</div>
                  <div class="text-gray-400 mb-2">Oracle, 2022</div>
                  <p class="text-gray-300 text-sm">Certification covering advanced Java programming concepts, including modular applications, functional interfaces, and API enhancements.</p>
                </div>
                
                <div>
                  <div class="text-spring-green font-bold mb-1">Microservices Architecture and Implementation</div>
                  <div class="text-gray-400 mb-2">O'Reilly Learning, 2023</div>
                  <p class="text-gray-300 text-sm">In-depth training on microservices patterns, decomposition strategies, resilience, and deployment models with Spring Cloud.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Backend Engineer',
      period: '2023 - Present',
      description: 'Lead backend developer for a high-traffic financial services platform built with Spring Boot microservices. Design and implement scalable, resilient services processing thousands of transactions per minute.',
      technologies: ['Java 17', 'Spring Boot 3', 'Spring Cloud', 'Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
      achievements: [
        'Redesigned the payment processing service, reducing latency by 40% and improving throughput by 300%',
        'Implemented a new event-driven architecture using Kafka that improved system resilience and decoupled critical services',
        'Led migration from monolith to microservices, resulting in 50% faster deployment cycles and improved system stability',
        'Mentored junior developers and established coding standards and best practices for the backend team'
      ]
    },
    {
      company: 'Financial Systems Ltd.',
      position: 'Java Developer',
      period: '2021 - 2023',
      description: 'Developed and maintained Java/Spring Boot applications for a financial reporting platform used by major banks. Worked in an agile team to deliver new features and ensure high availability of critical services.',
      technologies: ['Java 11', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'RabbitMQ', 'Docker', 'Jenkins', 'JUnit', 'Mockito'],
      achievements: [
        'Developed a new reporting engine that processed data 3x faster than the previous solution',
        'Implemented comprehensive test coverage increasing it from 45% to 85%, significantly reducing production bugs',
        'Created a new batch processing system using Spring Batch, optimizing database operations and reducing processing time by 60%',
        'Contributed to the migration from legacy authentication to OAuth2/JWT, improving security posture'
      ]
    },
    {
      company: 'Web Ventures',
      position: 'Junior Backend Developer',
      period: '2020 - 2021',
      description: 'Worked on RESTful API development for various client projects using Java and Spring Boot. Gained experience in the full software development lifecycle while working in an agile environment.',
      technologies: ['Java 8', 'Spring Boot', 'Spring MVC', 'MySQL', 'REST API', 'Git', 'Maven'],
      achievements: [
        'Built RESTful APIs for multiple client applications, handling authentication, data validation, and business logic',
        'Implemented database schema design and optimization for improved query performance',
        'Developed and maintained unit tests with JUnit and integration tests with Spring Test',
        'Contributed to internal code libraries that increased team productivity'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}