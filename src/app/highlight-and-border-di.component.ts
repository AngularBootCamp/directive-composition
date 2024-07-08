import { Component, inject } from '@angular/core';

import { BorderDirective } from './border.directive';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-highlight-and-border-di',
  standalone: true,
  template: `
    <p>
      Component defining border and highlight with dependency
      injection
    </p>
  `,
  hostDirectives: [HighlightDirective, BorderDirective]
})
export class HighlightAndBorderDiComponent {
  highlight = inject(HighlightDirective);
  border = inject(BorderDirective);

  constructor() {
    this.highlight.color = 'pink';
    this.border.color = 'purple';
  }
}
