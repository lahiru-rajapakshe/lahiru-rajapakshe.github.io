import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number; // 1-10
  category: string;
  description?: string;
  icon?: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  template: `
    <div class="min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="mb-12">
          <h1 class="text-4xl font-bold mb-2">
            <span class="text-white">Technical</span>
            <span class="text-spring-green">Skills</span>
          </h1>
          <p class="text-gray-300">My expertise as a Spring Boot Backend Engineer</p>
        </div>
        
        <!-- Terminal Visualization -->
        <div class="mb-16">
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="terminal-circle red"></div>
              <div class="terminal-circle yellow"></div>
              <div class="terminal-circle green"></div>
              <div class="ml-4 text-gray-300 text-sm">~/skills</div>
            </div>
            <div class="terminal-body p-6">
              <div class="terminal-prompt mb-3">java -jar skills-analyzer.jar --scan</div>
              <div class="text-green-400 font-bold mb-2">Analyzing backend engineering skills...</div>
              
              <div class="space-y-3 mt-4">
                <div *ngFor="let category of skillCategories" class="mb-6">
                  <div [ngClass]="'text-' + category.color" class="font-bold mb-2">{{ category.name }}:</div>
                  <div *ngFor="let skill of getSkillsByCategory(category.name)" class="flex items-center mb-2">
                    <span class="text-gray-300 w-1/4">{{ skill.name }}</span>
                    <div class="w-1/2 h-2 bg-gray-700 rounded-full">
                      <div 
                        [ngClass]="'bg-' + category.color"
                        class="h-full rounded-full" 
                        [ngStyle]="{'width': (skill.level * 10) + '%'}">
                      </div>
                    </div>
                    <span class="ml-3 text-sm text-gray-400">{{ skill.level }}/10</span>
                  </div>
                </div>
              </div>
              
              <div class="mt-6 text-gray-300">
                <div class="terminal-prompt">echo $EXPERTISE_SUMMARY</div>
                <p class="mt-2">Backend engineer with strong Spring Boot and Java development skills. Experienced in building microservices, RESTful APIs, and enterprise applications. Proficient in database design, security implementation, and DevOps integration.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Skills Details -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold mb-8">
            <span class="text-white">Skill</span>
            <span class="text-spring-green">Details</span>
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let skill of featuredSkills" class="module-card">
              <h3 class="text-xl font-bold text-white mb-3">{{ skill.name }}</h3>
              <div class="flex items-center mb-4">
                <div class="w-full h-2 bg-gray-700 rounded-full">
                  <div 
                    class="h-full bg-spring-green rounded-full" 
                    [ngStyle]="{'width': (skill.level * 10) + '%'}">
                  </div>
                </div>
                <span class="ml-3 text-sm text-gray-400">{{ skill.level }}/10</span>
              </div>
              <p class="text-gray-300 text-sm">{{ skill.description }}</p>
            </div>
          </div>
        </div>
        
        <!-- Spring Boot Expertise -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold mb-8 text-center">
            <span class="text-white">Spring Boot</span>
            <span class="text-spring-green">Expertise</span>
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Spring Architecture Expertise -->
            <div class="bg-terminal-black rounded-lg shadow-lg p-8">
              <h3 class="text-xl font-bold text-white mb-4">Architecture & Design</h3>
              
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="terminal-circle green mt-1 mr-2"></span>
                  <div>
                    <span class="text-spring-green font-medium">Microservices Architecture</span>
                    <p class="text-gray-300 text-sm mt-1">Designing and implementing scalable microservices using Spring Boot and Spring Cloud.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="terminal-circle green mt-1 mr-2"></span>
                  <div>
                    <span class="text-spring-green font-medium">RESTful API Design</span>
                    <p class="text-gray-300 text-sm mt-1">Creating well-structured, documented APIs following REST principles with Spring MVC.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="terminal-circle green mt-1 mr-2"></span>
                  <div>
                    <span class="text-spring-green font-medium">Event-Driven Architecture</span>
                    <p class="text-gray-300 text-sm mt-1">Building reactive systems with event sourcing and CQRS patterns.</p>
                  </div>
                </li>
              </ul>
              
              <div class="mt-6 pt-6 border-t border-gray-800">
                <div class="text-sm text-gray-400 font-code">
                  <div>// Code sample: Spring Cloud Configuration</div>
                  <div class="mt-2 text-green-400">@EnableDiscoveryClient</div>
                  <div class="text-purple-400">@SpringBootApplication</div>
                  <div>public class MicroserviceApplication {{ '{' }} ... {{ '}' }}</div>
                </div>
              </div>
            </div>
            
            <!-- Spring Boot Implementation Skills -->
            <div class="bg-terminal-black rounded-lg shadow-lg p-8">
              <h3 class="text-xl font-bold text-white mb-4">Implementation & Integration</h3>
              
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="terminal-circle green mt-1 mr-2"></span>
                  <div>
                    <span class="text-spring-green font-medium">Data Access & ORM</span>
                    <p class="text-gray-300 text-sm mt-1">Expertise with Spring Data JPA, JDBC, and various database technologies.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="terminal-circle green mt-1 mr-2"></span>
                  <div>
                    <span class="text-spring-green font-medium">Security Implementation</span>
                    <p class="text-gray-300 text-sm mt-1">Implementing robust authentication and authorization with Spring Security, OAuth2, and JWT.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="terminal-circle green mt-1 mr-2"></span>
                  <div>
                    <span class="text-spring-green font-medium">Testing Strategies</span>
                    <p class="text-gray-300 text-sm mt-1">Writing comprehensive unit, integration, and system tests using JUnit, Mockito, and Spring Test.</p>
                  </div>
                </li>
              </ul>
              
              <div class="mt-6 pt-6 border-t border-gray-800">
                <div class="text-sm text-gray-400 font-code">
                  <div>// Code sample: Spring Data Repository</div>
                  <div class="mt-2 text-green-400">@Repository</div>
                  <div>public interface UserRepository &lt;span class="text-blue-400"&gt;extends&lt;/span&gt; JpaRepository&lt;User, Long&gt; {{ '{' }}</div>
                  <div class="ml-4">Optional&lt;User&gt; findByEmail(String email);</div>
                  <div>{{ '}' }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Certifications -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold mb-8">
            <span class="text-white">Certifications &</span>
            <span class="text-spring-green">Training</span>
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-terminal-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div class="text-spring-green text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">Spring Professional Certification</h3>
              <p class="text-gray-300 text-sm">Certified Spring Professional with expertise in core Spring and Spring Boot.</p>
            </div>
            
            <div class="bg-terminal-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div class="text-java-orange text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">Oracle Certified Professional: Java SE 11</h3>
              <p class="text-gray-300 text-sm">Certified Java developer with deep understanding of language features and JVM.</p>
            </div>
            
            <div class="bg-terminal-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div class="text-java-blue text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">AWS Certified Developer - Associate</h3>
              <p class="text-gray-300 text-sm">Expertise in deploying and managing Java applications on AWS cloud infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [
    { name: 'Programming Languages', icon: 'code', color: 'spring-green' },
    { name: 'Frameworks & Libraries', icon: 'package', color: 'spring-green' },
    { name: 'Databases', icon: 'database', color: 'java-orange' },
    { name: 'DevOps & Deployment', icon: 'server', color: 'java-blue' },
    { name: 'Tools & Methodologies', icon: 'tool', color: 'white' }
  ];
  
  skills: Skill[] = [
    { name: 'Java', level: 9, category: 'Programming Languages' },
    { name: 'Kotlin', level: 7, category: 'Programming Languages' },
    { name: 'JavaScript/TypeScript', level: 6, category: 'Programming Languages' },
    { name: 'SQL', level: 8, category: 'Programming Languages' },
    { name: 'Groovy', level: 5, category: 'Programming Languages' },
    
    { name: 'Spring Boot', level: 9, category: 'Frameworks & Libraries' },
    { name: 'Spring Cloud', level: 8, category: 'Frameworks & Libraries' },
    { name: 'Spring Data', level: 9, category: 'Frameworks & Libraries' },
    { name: 'Spring Security', level: 8, category: 'Frameworks & Libraries' },
    { name: 'Hibernate/JPA', level: 9, category: 'Frameworks & Libraries' },
    { name: 'JUnit/Mockito', level: 8, category: 'Frameworks & Libraries' },
    { name: 'Apache Kafka', level: 7, category: 'Frameworks & Libraries' },
    { name: 'Project Reactor', level: 6, category: 'Frameworks & Libraries' },
    
    { name: 'PostgreSQL', level: 9, category: 'Databases' },
    { name: 'MySQL', level: 8, category: 'Databases' },
    { name: 'MongoDB', level: 7, category: 'Databases' },
    { name: 'Redis', level: 7, category: 'Databases' },
    { name: 'Elasticsearch', level: 6, category: 'Databases' },
    
    { name: 'Docker', level: 8, category: 'DevOps & Deployment' },
    { name: 'Kubernetes', level: 7, category: 'DevOps & Deployment' },
    { name: 'CI/CD Pipelines', level: 8, category: 'DevOps & Deployment' },
    { name: 'AWS Services', level: 7, category: 'DevOps & Deployment' },
    { name: 'Azure Services', level: 6, category: 'DevOps & Deployment' },
    { name: 'Jenkins', level: 7, category: 'DevOps & Deployment' },
    { name: 'GitHub Actions', level: 8, category: 'DevOps & Deployment' },
    
    { name: 'Microservices Design', level: 9, category: 'Tools & Methodologies' },
    { name: 'RESTful API Design', level: 9, category: 'Tools & Methodologies' },
    { name: 'Git/Version Control', level: 9, category: 'Tools & Methodologies' },
    { name: 'Agile/Scrum', level: 8, category: 'Tools & Methodologies' },
    { name: 'Test-Driven Development', level: 8, category: 'Tools & Methodologies' },
    { name: 'Design Patterns', level: 8, category: 'Tools & Methodologies' },
    { name: 'Performance Optimization', level: 7, category: 'Tools & Methodologies' }
  ];
  
  featuredSkills: Skill[] = [
    { 
      name: 'Spring Boot', 
      level: 9, 
      category: 'Frameworks & Libraries',
      description: 'Extensive experience building production-ready applications with Spring Boot, including custom starters, auto-configuration, and advanced features.'
    },
    { 
      name: 'Microservices Architecture', 
      level: 9, 
      category: 'Tools & Methodologies',
      description: 'Proficient in designing and implementing microservices, including service discovery, API gateway, circuit breaking, and distributed tracing.'
    },
    { 
      name: 'RESTful API Design', 
      level: 9, 
      category: 'Tools & Methodologies',
      description: 'Expert in designing and implementing RESTful APIs following best practices, including HATEOAS, proper resource modeling, and versioning.'
    },
    { 
      name: 'Database Design & ORM', 
      level: 8, 
      category: 'Databases',
      description: 'Strong skills in database design, optimization, and integration with Spring Data JPA, JDBC, and native queries for complex operations.'
    },
    { 
      name: 'Security Implementation', 
      level: 8, 
      category: 'Frameworks & Libraries',
      description: 'Advanced implementation of authentication and authorization using Spring Security, OAuth2, JWT, and role-based access control.'
    },
    { 
      name: 'Docker & Kubernetes', 
      level: 8, 
      category: 'DevOps & Deployment',
      description: 'Experience containerizing Spring Boot applications and deploying them to Kubernetes clusters with proper configuration and scaling.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}