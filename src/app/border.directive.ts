import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBorder]',
  standalone: true
})
export class BorderDirective {
  @Input() color = 'red';

  @HostBinding('style.border') get borderColor() {
    return `2px solid ${this.color}`;
  }
}
