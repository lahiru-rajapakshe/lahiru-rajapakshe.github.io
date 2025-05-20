import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-terminal',
  template: `
    <div class="terminal-window w-full">
      <div class="terminal-header">
        <div class="terminal-circle red"></div>
        <div class="terminal-circle yellow"></div>
        <div class="terminal-circle green"></div>
        <div class="ml-4 text-gray-300 text-sm">~/portfolio</div>
      </div>
      <div class="terminal-body">
        <div *ngFor="let line of displayedLines" class="mb-2">
          <span *ngIf="line.isCommand" class="terminal-prompt text-green-400">{{ line.text }}</span>
          <span *ngIf="!line.isCommand" [ngClass]="{'text-white': !line.isOutput, 'text-gray-300': line.isOutput}">{{ line.text }}</span>
        </div>
        <div class="flex" *ngIf="showCursor">
          <span class="terminal-prompt">{{ activeCommand }}</span>
          <span class="terminal-cursor"></span>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TerminalComponent implements OnInit, AfterViewInit {
  @Input() commands: { command: string, output: string[] }[] = [];
  @Input() typingSpeed: number = 50;
  @Input() delayBetweenCommands: number = 1000;
  @Input() autoStart: boolean = true;
  @Input() loop: boolean = false;

  displayedLines: { text: string, isCommand: boolean, isOutput: boolean }[] = [];
  activeCommand: string = '';
  currentCommandIndex: number = 0;
  currentOutputIndex: number = 0;
  showCursor: boolean = true;
  isTyping: boolean = false;

  @ViewChild('terminal') terminalElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    if (this.commands.length === 0) {
      this.commands = [
        { 
          command: 'java -version', 
          output: ['java version "17.0.7" 2023-04-18 LTS', 'Java(TM) SE Runtime Environment (build 17.0.7+8-LTS-224)', 'Java HotSpot(TM) 64-Bit Server VM (build 17.0.7+8-LTS-224, mixed mode, sharing)'] 
        },
        { 
          command: 'mvn --version', 
          output: ['Apache Maven 3.9.1', 'Maven home: /usr/share/maven', 'Java version: 17.0.7, vendor: Oracle Corporation', 'Default locale: en_US, platform encoding: UTF-8'] 
        },
        { 
          command: 'cd spring-projects', 
          output: [] 
        },
        { 
          command: 'ls -la', 
          output: [
            'total 76',
            'drwxr-xr-x  8 dev dev 4096 May 19 09:30 .',
            'drwxr-xr-x 18 dev dev 4096 May 19 09:15 ..',
            'drwxr-xr-x  8 dev dev 4096 May 19 09:20 microservice-a',
            'drwxr-xr-x  8 dev dev 4096 May 19 09:22 microservice-b',
            'drwxr-xr-x  5 dev dev 4096 May 19 09:25 api-gateway',
            '-rw-r--r--  1 dev dev 2758 May 19 09:27 docker-compose.yml'
          ] 
        },
        { 
          command: 'spring init --name=new-project --dependencies=web,data-jpa,postgresql', 
          output: ['Project initialized successfully!', 'Location: ./new-project'] 
        },
        { 
          command: 'cat experience.json | jq .', 
          output: [
            '{',
            '  "experience": [',
            '    {',
            '      "company": "Tech Solutions Inc.",',
            '      "position": "Senior Backend Engineer",',
            '      "duration": "2023 - Present",',
            '      "technologies": ["Spring Boot", "Java 17", "Microservices", "Docker", "Kubernetes"]',
            '    },',
            '    {',
            '      "company": "Financial Systems Ltd.",',
            '      "position": "Java Developer",',
            '      "duration": "2021 - 2023",',
            '      "technologies": ["Java", "Spring", "Hibernate", "Postgres", "REST API"]',
            '    }',
            '  ]',
            '}'
          ] 
        }
      ];
    }

    if (this.autoStart) {
      setTimeout(() => this.startTyping(), 1000);
    }
  }

  ngAfterViewInit(): void {
    // Any post-initialization logic
  }

  startTyping(): void {
    if (this.isTyping) return;
    this.isTyping = true;
    this.typeNextCommand();
  }

  typeNextCommand(): void {
    if (this.currentCommandIndex >= this.commands.length) {
      if (this.loop) {
        this.currentCommandIndex = 0;
        this.displayedLines = [];
        setTimeout(() => this.typeNextCommand(), this.delayBetweenCommands);
      } else {
        this.isTyping = false;
        return;
      }
    } else {
      const command = this.commands[this.currentCommandIndex].command;
      this.typeCommand(command, 0);
    }
  }

  typeCommand(command: string, index: number): void {
    this.activeCommand = command.substring(0, index);
    
    if (index < command.length) {
      setTimeout(() => this.typeCommand(command, index + 1), this.typingSpeed);
    } else {
      this.displayedLines.push({ text: command, isCommand: true, isOutput: false });
      this.activeCommand = '';
      this.showOutput();
    }
  }

  showOutput(): void {
    const outputs = this.commands[this.currentCommandIndex].output;
    
    if (outputs.length === 0 || this.currentOutputIndex >= outputs.length) {
      this.currentCommandIndex++;
      this.currentOutputIndex = 0;
      setTimeout(() => this.typeNextCommand(), this.delayBetweenCommands);
    } else {
      this.displayedLines.push({ 
        text: outputs[this.currentOutputIndex], 
        isCommand: false, 
        isOutput: true 
      });
      this.currentOutputIndex++;
      setTimeout(() => this.showOutput(), 100); // Show output lines faster than commands
    }
  }

  reset(): void {
    this.displayedLines = [];
    this.activeCommand = '';
    this.currentCommandIndex = 0;
    this.currentOutputIndex = 0;
    this.isTyping = false;
  }
}