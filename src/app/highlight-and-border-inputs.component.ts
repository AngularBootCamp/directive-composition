import { Component } from '@angular/core';

import { BorderDirective } from './border.directive';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-highlight-and-border-inputs',
  standalone: true,
  template: `
    <p>Component receiving border and highlight from parent</p>
  `,
  hostDirectives: [
    {
      directive: HighlightDirective,
      inputs: ['color: highlightColor']
    },
    {
      directive: BorderDirective,
      inputs: ['color: border']
    }
  ]
})
export class HighlightAndBorderInputsComponent {}
