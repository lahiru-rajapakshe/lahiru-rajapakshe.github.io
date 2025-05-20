import { Component, OnInit } from '@angular/core';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  codeSnippet?: {
    code: string;
    language: string;
    filename: string;
  };
  architecture?: {
    image: string;
    description: string;
  };
}

@Component({
  selector: 'app-projects',
  template: `
    <div class="min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="mb-12">
          <h1 class="text-4xl font-bold mb-2">
            <span class="text-white">Spring Boot</span>
            <span class="text-spring-green">Projects</span>
          </h1>
          <p class="text-gray-300">A showcase of my backend engineering work with Java and Spring Boot</p>
        </div>
        
        <!-- Project Filter Navigation -->
        <div class="mb-8">
          <div class="flex flex-wrap gap-4">
            <button 
              *ngFor="let category of categories" 
              (click)="setActiveCategory(category)"
              [ngClass]="{'bg-spring-green text-spring-dark': activeCategory === category, 'bg-spring-dark text-gray-300 hover:bg-gray-700': activeCategory !== category}"
              class="px-4 py-2 rounded-md transition-colors font-medium">
              {{ category }}
            </button>
          </div>
        </div>
        
        <!-- Projects Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div *ngFor="let project of filteredProjects" class="bg-terminal-black rounded-lg shadow-xl overflow-hidden">
            <div class="p-8">
              <h2 class="text-2xl font-bold text-white mb-4">{{ project.title }}</h2>
              <p class="text-gray-300 mb-6">{{ project.description }}</p>
              
              <!-- Technologies used -->
              <div class="mb-6">
                <h3 class="text-spring-green text-lg mb-3">Technologies</h3>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of project.technologies" class="px-3 py-1 bg-spring-dark text-gray-300 rounded-full text-sm">
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <!-- Project Features -->
              <div class="mb-6">
                <h3 class="text-spring-green text-lg mb-3">Key Features</h3>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li *ngFor="let feature of project.features">{{ feature }}</li>
                </ul>
              </div>
              
              <!-- Project Links -->
              <div class="flex space-x-4">
                <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" 
                   class="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a *ngIf="project.demoUrl" [href]="project.demoUrl" target="_blank"
                   class="inline-flex items-center px-4 py-2 bg-spring-green text-spring-dark rounded-md shadow hover:shadow-lg transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
            
            <!-- Code Snippet if available -->
            <div *ngIf="project.codeSnippet" class="px-8 pb-8">
              <app-code-snippet 
                [code]="project.codeSnippet.code" 
                [language]="project.codeSnippet.language" 
                [filename]="project.codeSnippet.filename">
              </app-code-snippet>
            </div>
          </div>
        </div>
        
        <!-- Open Source Contributions -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold mb-8">
            <span class="text-white">Open Source</span>
            <span class="text-spring-green">Contributions</span>
          </h2>
          
          <div class="bg-terminal-black rounded-lg shadow-xl p-8">
            <p class="text-gray-300 mb-6">
              I'm an active contributor to the Spring ecosystem and other open-source Java projects.
              Here are some of my notable contributions:
            </p>
            
            <div class="space-y-6">
              <div class="border-l-4 border-spring-green pl-4">
                <h3 class="text-white text-xl mb-2">Spring Boot Starter</h3>
                <p class="text-gray-300 mb-2">Created a custom Spring Boot starter for simplified integration with a popular payment gateway.</p>
                <a href="#" class="text-spring-green hover:underline">View on GitHub</a>
              </div>
              
              <div class="border-l-4 border-spring-green pl-4">
                <h3 class="text-white text-xl mb-2">Bug Fix Contributions</h3>
                <p class="text-gray-300 mb-2">Fixed several bugs in Spring Data JPA, improving query performance and fixing edge case failures.</p>
                <a href="#" class="text-spring-green hover:underline">View Pull Requests</a>
              </div>
              
              <div class="border-l-4 border-spring-green pl-4">
                <h3 class="text-white text-xl mb-2">Documentation Improvements</h3>
                <p class="text-gray-300 mb-2">Enhanced Spring Security documentation with practical examples for OAuth2 and JWT authentication.</p>
                <a href="#" class="text-spring-green hover:underline">View Contributions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProjectsComponent implements OnInit {
  categories: string[] = ['All', 'Microservices', 'Data Processing', 'Security', 'APIs'];
  activeCategory: string = 'All';
  
  projects: Project[] = [
    {
      id: 'microservices-platform',
      title: 'E-Commerce Microservices Platform',
      description: 'A scalable e-commerce platform built with Spring Boot microservices architecture, featuring service discovery, API gateway, and event-driven messaging.',
      technologies: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Kafka', 'Docker', 'Kubernetes', 'PostgreSQL'],
      features: [
        'Service Discovery with Eureka',
        'API Gateway with Spring Cloud Gateway',
        'Event-driven architecture with Kafka',
        'Circuit breaking with Resilience4j',
        'Distributed tracing with Sleuth & Zipkin'
      ],
      githubUrl: 'https://github.com/',
      codeSnippet: {
        code: `@SpringBootApplication
@EnableEurekaClient
@EnableCircuitBreaker
public class OrderServiceApplication {
  
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
    
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    
    @Bean
    public Sampler defaultSampler() {
        return Sampler.ALWAYS_SAMPLE;
    }
}`,
        language: 'java',
        filename: 'OrderServiceApplication.java'
      }
    },
    {
      id: 'batch-processing',
      title: 'Financial Data Batch Processing System',
      description: 'A robust batch processing system for financial data, handling millions of transactions with Spring Batch, ensuring reliability and tracking.',
      technologies: ['Java 17', 'Spring Boot', 'Spring Batch', 'MySQL', 'RabbitMQ', 'Docker'],
      features: [
        'Multi-threaded batch processing',
        'Job monitoring and management',
        'Transaction retry mechanism',
        'Detailed audit logging',
        'Error handling and notification'
      ],
      githubUrl: 'https://github.com/',
      codeSnippet: {
        code: `@Configuration
@EnableBatchProcessing
public class BatchConfiguration {

    @Autowired
    public JobBuilderFactory jobBuilderFactory;

    @Autowired
    public StepBuilderFactory stepBuilderFactory;
    
    @Bean
    public Job importTransactionsJob(Step step1, JobCompletionNotificationListener listener) {
        return jobBuilderFactory.get("importTransactionsJob")
            .incrementer(new RunIdIncrementer())
            .listener(listener)
            .flow(step1)
            .end()
            .build();
    }
    
    @Bean
    public Step step1(ItemReader<Transaction> reader, 
                      ItemProcessor<Transaction, ProcessedTransaction> processor, 
                      ItemWriter<ProcessedTransaction> writer) {
        return stepBuilderFactory.get("step1")
            .<Transaction, ProcessedTransaction>chunk(10)
            .reader(reader)
            .processor(processor)
            .writer(writer)
            .faultTolerant()
            .retry(Exception.class)
            .retryLimit(3)
            .build();
    }
}`,
        language: 'java',
        filename: 'BatchConfiguration.java'
      }
    },
    {
      id: 'secure-api-gateway',
      title: 'Secure API Gateway with OAuth2',
      description: 'A secure API gateway service that handles authentication, authorization, and rate limiting for a suite of microservices.',
      technologies: ['Java 17', 'Spring Boot', 'Spring Security', 'OAuth2', 'JWT', 'Redis', 'Docker'],
      features: [
        'OAuth2 authentication flow',
        'JWT token validation',
        'Resource-based access control',
        'Rate limiting with Redis',
        'Request/response transformation'
      ],
      githubUrl: 'https://github.com/',
      codeSnippet: {
        code: `@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests()
                .antMatchers("/api/public/**").permitAll()
                .antMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            .and()
            .oauth2ResourceServer().jwt()
                .jwtAuthenticationConverter(jwtAuthenticationConverter());
    }
    
    private Converter<Jwt, AbstractAuthenticationToken> jwtAuthenticationConverter() {
        JwtAuthenticationConverter jwtConverter = new JwtAuthenticationConverter();
        jwtConverter.setJwtGrantedAuthoritiesConverter(jwt -> {
            List<String> authorities = jwt.getClaimAsStringList("authorities");
            
            if (authorities == null) {
                return Collections.emptyList();
            }
            
            JwtGrantedAuthoritiesConverter scopesConverter = new JwtGrantedAuthoritiesConverter();
            Collection<GrantedAuthority> grantedAuthorities = scopesConverter.convert(jwt);
            
            authorities.stream()
                .map(SimpleGrantedAuthority::new)
                .forEach(grantedAuthorities::add);
                
            return grantedAuthorities;
        });
        
        return jwtConverter;
    }
}`,
        language: 'java',
        filename: 'SecurityConfig.java'
      }
    },
    {
      id: 'real-time-analytics',
      title: 'Real-time Analytics Dashboard',
      description: 'A real-time data analytics system processing streams of events and displaying insights through a reactive dashboard.',
      technologies: ['Java 17', 'Spring Boot', 'Spring WebFlux', 'Project Reactor', 'WebSockets', 'MongoDB', 'Apache Kafka'],
      features: [
        'Reactive data processing pipeline',
        'Real-time data aggregation',
        'WebSocket streaming to clients',
        'Configurable alerts and notifications',
        'Historical data comparison'
      ],
      githubUrl: 'https://github.com/',
      codeSnippet: {
        code: `@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    public AnalyticsController(AnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
    }

    @GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<AnalyticsEvent> streamEvents() {
        return analyticsService.getEventStream()
            .map(this::enrichEvent)
            .delayElements(Duration.ofMillis(100));
    }
    
    @GetMapping("/metrics")
    public Mono<MetricsSummary> getMetricsSummary() {
        return analyticsService.getAggregatedMetrics()
            .flatMap(this::enhanceWithHistoricalData);
    }
    
    private AnalyticsEvent enrichEvent(AnalyticsEvent event) {
        // Enrich event with additional context information
        return event;
    }
    
    private Mono<MetricsSummary> enhanceWithHistoricalData(MetricsSummary summary) {
        return analyticsService.getHistoricalData()
            .map(historicalData -> {
                summary.setHistoricalComparison(historicalData);
                return summary;
            });
    }
}`,
        language: 'java',
        filename: 'AnalyticsController.java'
      }
    }
  ];
  
  filteredProjects: Project[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize with all projects
    this.filteredProjects = [...this.projects];
  }
  
  setActiveCategory(category: string): void {
    this.activeCategory = category;
    
    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      // Simple filter implementation - in a real app, you'd have more sophisticated categorization
      this.filteredProjects = this.projects.filter(project => {
        const lowercaseCategory = category.toLowerCase();
        
        if (lowercaseCategory === 'microservices' && 
            (project.title.toLowerCase().includes('microservice') || 
             project.technologies.some(tech => tech.toLowerCase().includes('cloud')))) {
          return true;
        }
        
        if (lowercaseCategory === 'data processing' && 
            (project.title.toLowerCase().includes('data') || 
             project.technologies.some(tech => tech.toLowerCase().includes('batch') || tech.toLowerCase().includes('kafka')))) {
          return true;
        }
        
        if (lowercaseCategory === 'security' && 
            (project.title.toLowerCase().includes('secur') || 
             project.technologies.some(tech => tech.toLowerCase().includes('security') || tech.toLowerCase().includes('oauth')))) {
          return true;
        }
        
        if (lowercaseCategory === 'apis' && 
            (project.title.toLowerCase().includes('api') || 
             project.technologies.some(tech => tech.toLowerCase().includes('rest') || tech.toLowerCase().includes('webflux')))) {
          return true;
        }
        
        return false;
      });
    }
  }
}