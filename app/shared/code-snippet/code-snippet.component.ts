import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  template: `
    <div class="code-snippet font-code text-sm">
      <div class="flex justify-between items-center mb-2">
        <span class="text-gray-400 text-xs">{{ filename }}</span>
        <div class="flex space-x-2 text-xs">
          <span class="bg-gray-700 px-2 py-1 rounded text-gray-300">{{ language }}</span>
          <button class="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition-colors" title="Copy code">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
      <pre class="text-white" [innerHTML]="formattedCode"></pre>
    </div>
  `,
  styles: []
})
export class CodeSnippetComponent implements OnInit {
  @Input() code: string = '';
  @Input() language: string = 'java';
  @Input() filename: string = 'Example.java';
  
  formattedCode: string = '';

  constructor() { }

  ngOnInit(): void {
    // Basic syntax highlighting
    this.highlightCode();
  }

  highlightCode() {
    // This is a very basic highlighting - in a real app, use a library like highlight.js or prism
    if (this.language === 'java') {
      this.formattedCode = this.code
        .replace(/\b(public|private|protected|class|interface|enum|extends|implements|static|final|void|abstract|default|throws)\b/g, '<span class="text-purple-400">$1</span>')
        .replace(/\b(String|int|boolean|double|float|long|char|byte|short)\b/g, '<span class="text-blue-400">$1</span>')
        .replace(/\b(new|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|this|super)\b/g, '<span class="text-red-400">$1</span>')
        .replace(/\b(true|false|null)\b/g, '<span class="text-yellow-400">$1</span>')
        .replace(/\/\/(.*)/g, '<span class="text-gray-500">\/\/$1</span>')
        .replace(/(".*?")/g, '<span class="text-green-400">$1</span>');
    } else if (this.language === 'xml' || this.language === 'html') {
      this.formattedCode = this.code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
        .replace(/(&lt;\/?[a-z0-9]+)/gi, '<span class="text-red-400">$1</span>')
        .replace(/(&lt;!--.*?--&gt;)/g, '<span class="text-gray-500">$1</span>');
    } else {
      this.formattedCode = this.code;
    }
  }
}