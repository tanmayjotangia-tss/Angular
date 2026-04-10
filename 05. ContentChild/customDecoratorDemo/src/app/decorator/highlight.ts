import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class Highlight {

  constructor(private element:ElementRef, private renderer: Renderer2) {
   }

   ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
    this.renderer.addClass(this.element.nativeElement, 'highlighted');
   }

}
