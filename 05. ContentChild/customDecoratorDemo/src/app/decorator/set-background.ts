import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetBackground]',
  standalone: false
})
export class SetBackground {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'lightblue';
  }
}