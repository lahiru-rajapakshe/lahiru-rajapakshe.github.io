import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { gsap } from 'gsap';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  template: `
    <div class="min-h-screen">
      <!-- Hero Section with Terminal Animation -->
      <section class="py-12 md:py-20 relative overflow-hidden">
        <!-- Particles Background -->
        <div id="particles-js" class="absolute inset-0 z-0"></div>
        
        <div class="container mx-auto px-4 relative z-10">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <h1 class="text-4xl md:text-5xl font-bold mb-4">
                <span class="text-white">Backend Engineer</span><br/>
                <span class="text-spring-green">Spring Boot Expert</span>
              </h1>
              <p class="text-gray-300 text-lg mb-6">
                Building robust, scalable microservices and applications with Java & Spring Boot
              </p>
              <div class="flex flex-wrap gap-4">
                <a routerLink="/projects" class="px-6 py-3 bg-spring-green text-spring-dark font-bold rounded-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  View Projects
                </a>
                <a routerLink="/contact" class="px-6 py-3 border-2 border-spring-green text-spring-green font-bold rounded-md hover:bg-spring-green hover:text-spring-dark transition-colors">
                  Get In Touch
                </a>
              </div>
            </div>
            
            <div class="md:w-1/2">
              <app-terminal 
                [commands]="introCommands" 
                [typingSpeed]="40"
                [autoStart]="true">
              </app-terminal>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Technology Stack Section -->
      <section class="py-12 bg-terminal-black">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">
            <span class="text-white">Tech</span>
            <span class="text-spring-green">Stack</span>
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Backend Stack Card -->
            <div class="module-card">
              <div class="text-spring-green text-2xl mb-4">Backend</div>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-center">
                  <span class="terminal-circle green mr-2"></span>
                  Java 17/21
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle green mr-2"></span>
                  Spring Boot 3.x
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle green mr-2"></span>
                  Spring Cloud
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle green mr-2"></span>
                  Spring Security
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle green mr-2"></span>
                  Spring Data JPA/JDBC
                </li>
              </ul>
            </div>
            
            <!-- Database Stack Card -->
            <div class="module-card">
              <div class="text-java-orange text-2xl mb-4">Database</div>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-center">
                  <span class="terminal-circle yellow mr-2"></span>
                  PostgreSQL
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle yellow mr-2"></span>
                  MySQL
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle yellow mr-2"></span>
                  MongoDB
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle yellow mr-2"></span>
                  Redis
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle yellow mr-2"></span>
                  Elasticsearch
                </li>
              </ul>
            </div>
            
            <!-- DevOps Stack Card -->
            <div class="module-card">
              <div class="text-java-blue text-2xl mb-4">DevOps</div>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-center">
                  <span class="terminal-circle blue mr-2"></span>
                  Docker & Kubernetes
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle blue mr-2"></span>
                  CI/CD (Jenkins, GitHub Actions)
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle blue mr-2"></span>
                  AWS / Azure
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle blue mr-2"></span>
                  Git & GitFlow
                </li>
                <li class="flex items-center">
                  <span class="terminal-circle blue mr-2"></span>
                  Monitoring (Prometheus, Grafana)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Featured Project -->
      <section class="py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12">
            <span class="text-white">Featured</span>
            <span class="text-spring-green">Project</span>
          </h2>
          
          <div class="flex flex-col md:flex-row bg-terminal-black rounded-lg shadow-xl overflow-hidden">
            <div class="md:w-1/2 p-8">
              <h3 class="text-2xl font-bold text-white mb-4">Microservices Platform</h3>
              <p class="text-gray-300 mb-6">
                A scalable e-commerce platform built with Spring Boot microservices architecture, 
                featuring service discovery, API gateway, and event-driven messaging with Kafka.
              </p>
              
              <div class="mb-6">
                <h4 class="text-spring-green mb-2">Key Features:</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li>Service Discovery with Eureka</li>
                  <li>API Gateway with Spring Cloud Gateway</li>
                  <li>Event-driven architecture with Kafka</li>
                  <li>Circuit breaking with Resilience4j</li>
                  <li>Distributed tracing with Sleuth & Zipkin</li>
                </ul>
              </div>
              
              <a routerLink="/projects" class="inline-block px-6 py-2 bg-spring-green text-spring-dark font-bold rounded-md shadow hover:shadow-lg transition-all">
                View Details
              </a>
            </div>
            
            <div class="md:w-1/2 p-8 flex justify-center items-center">
              <app-code-snippet 
                [code]="featuredProjectCode" 
                [language]="'java'" 
                [filename]="'OrderService.java'">
              </app-code-snippet>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Animated Spring Boot Architecture Display -->
      <section class="py-12 bg-terminal-black relative overflow-hidden">
        <div class="container mx-auto px-4 relative z-10">
          <h2 class="text-3xl font-bold mb-12 text-center">
            <span class="text-white">Spring Boot</span>
            <span class="text-spring-green">Architecture</span>
          </h2>
          
          <div class="flex justify-center">
            <div class="w-full md:w-3/4 lg:w-1/2">
              <div class="rounded-lg bg-spring-dark shadow-2xl p-6 relative">
                <!-- Animated Spring Framework Architecture SVG would go here -->
                <div class="text-center text-gray-300 my-2">Controller Layer</div>
                <div class="h-1 w-full bg-spring-green my-4 rounded"></div>
                
                <div class="text-center text-gray-300 my-2">Service Layer</div>
                <div class="h-1 w-full bg-spring-green my-4 rounded"></div>
                
                <div class="text-center text-gray-300 my-2">Repository Layer</div>
                <div class="h-1 w-full bg-spring-green my-4 rounded"></div>
                
                <div class="text-center text-gray-300 my-2">Database</div>
                
                <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-10">
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <path class="bean-path" d="M50,10 C70,10 80,30 80,50 C80,70 70,90 50,90 C30,90 20,70 20,50 C20,30 30,10 50,10 Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex flex-wrap justify-center mt-8 gap-4">
            <div class="bg-spring-dark p-4 rounded-lg shadow-lg">
              <div class="text-spring-green font-bold mb-2">Spring MVC</div>
              <p class="text-gray-300 text-sm">RESTful API development</p>
            </div>
            
            <div class="bg-spring-dark p-4 rounded-lg shadow-lg">
              <div class="text-spring-green font-bold mb-2">Spring Data</div>
              <p class="text-gray-300 text-sm">Data access repositories</p>
            </div>
            
            <div class="bg-spring-dark p-4 rounded-lg shadow-lg">
              <div class="text-spring-green font-bold mb-2">Spring Security</div>
              <p class="text-gray-300 text-sm">Authentication & Authorization</p>
            </div>
            
            <div class="bg-spring-dark p-4 rounded-lg shadow-lg">
              <div class="text-spring-green font-bold mb-2">Spring Cloud</div>
              <p class="text-gray-300 text-sm">Microservices coordination</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="py-16">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to discuss your project?</h2>
          <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Looking for a backend engineer with expertise in Java and Spring Boot? 
            Let's discuss how I can help build your next robust, scalable application.
          </p>
          
          <a routerLink="/contact" class="inline-block px-8 py-4 bg-spring-green text-spring-dark font-bold rounded-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg">
            Let's Connect
          </a>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('scene') private canvasRef!: ElementRef;
  
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private cube!: THREE.Mesh;
  
  introCommands = [
    {
      command: 'java -version',
      output: [
        'java version "17.0.7" 2023-04-18 LTS',
        'Java(TM) SE Runtime Environment (build 17.0.7+8-LTS-224)',
        'Java HotSpot(TM) 64-Bit Server VM (build 17.0.7+8-LTS-224, mixed mode, sharing)'
      ]
    },
    {
      command: 'cat profile.json',
      output: [
        '{',
        '  "name": "Your Name",',
        '  "role": "Backend Engineer",',
        '  "experience": "3+ years",',
        '  "expertise": ["Java", "Spring Boot", "Microservices", "RESTful APIs"]',
        '}'
      ]
    },
    {
      command: 'mvn spring-boot:run',
      output: [
        '[INFO] Scanning for projects...',
        '[INFO] -------------< com.example:portfolio-app >--------------',
        '[INFO] Building portfolio-app 0.0.1-SNAPSHOT',
        '[INFO] -----------------------[ jar ]--------------------------',
        '[INFO] ',
        '[INFO] >>> spring-boot-maven-plugin:3.1.0:run (default-cli) > test-compile @ portfolio-app >>>',
        '[INFO] ',
        '[INFO] --- spring-boot-maven-plugin:3.1.0:run (default-cli) @ portfolio-app ---',
        '[INFO] Attaching agents: []',
        '  .   ____          _            __ _ _',
        ' /\\\\ / ___\'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\',
        '( ( )\\___ | \'_ | \'_| | \'_ \\/ _` | \\ \\ \\ \\',
        ' \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )',
        '  \'  |____| .__|_| |_|_| |_\\__, | / / / /',
        ' =========|_|==============|___/=/_/_/_/',
        ' :: Spring Boot ::                (v3.1.0)',
        '',
        '2025-05-19 09:52:12.123  INFO 12345 --- [  main] c.e.portfolio.PortfolioApplication   : Starting PortfolioApplication v0.0.1-SNAPSHOT',
        '2025-05-19 09:52:13.456  INFO 12345 --- [  main] c.e.portfolio.PortfolioApplication   : No active profile set, falling back to default profiles: default',
        '2025-05-19 09:52:14.789  INFO 12345 --- [  main] o.s.b.w.embedded.tomcat.TomcatWebServer : Tomcat initialized with port(s): 8080 (http)',
        '2025-05-19 09:52:16.123  INFO 12345 --- [  main] c.e.portfolio.PortfolioApplication   : Started PortfolioApplication in 4.238 seconds (JVM running for 4.892)',
        '2025-05-19 09:52:16.456  INFO 12345 --- [  main] c.e.portfolio.PortfolioApplication   : Portfolio backend is now running on http://localhost:8080'
      ]
    }
  ];
  
  featuredProjectCode = `@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final KafkaTemplate<String, OrderEvent> kafkaTemplate;
    private final InventoryServiceClient inventoryClient;
    
    @Override
    @Transactional
    public OrderResponse createOrder(OrderRequest orderRequest) {
        // Check inventory availability
        boolean isAvailable = inventoryClient.checkInventory(
            orderRequest.getItems()
        );
        
        if (!isAvailable) {
            throw new InsufficientInventoryException(
                "Some items are out of stock"
            );
        }
        
        // Create and save order
        Order order = orderRequest.toEntity();
        Order savedOrder = orderRepository.save(order);
        
        // Publish order created event
        kafkaTemplate.send(
            "order-events", 
            new OrderEvent(
                savedOrder.getId(), 
                OrderEventType.CREATED,
                orderRequest.getItems()
            )
        );
        
        return OrderResponse.fromEntity(savedOrder);
    }
    
    @CircuitBreaker(name = "inventory", fallbackMethod = "getOrderFallback")
    @Override
    public OrderResponse getOrder(String orderId) {
        Order order = orderRepository.findById(orderId)
            .orElseThrow(() -> new OrderNotFoundException(
                "Order not found with id: " + orderId
            ));
            
        return OrderResponse.fromEntity(order);
    }
    
    public OrderResponse getOrderFallback(String orderId, Exception ex) {
        // Return cached order or basic information when inventory service is down
        return new OrderResponse(orderId, OrderStatus.UNKNOWN, Collections.emptyList());
    }
}`;

  constructor() { }

  ngOnInit(): void {
    // Initialize particles.js when component loads
  }

  ngAfterViewInit(): void {
    // Initialize particles.js background
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#6DB33F' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#6DB33F',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }
  }
}