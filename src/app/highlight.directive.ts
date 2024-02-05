import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() color = 'yellow';

  @HostBinding('style.backgroundColor') get borderColor() {
    return this.color;
  }
}
