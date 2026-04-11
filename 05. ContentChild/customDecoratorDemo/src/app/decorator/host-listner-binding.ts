import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListenerBinding]',
  standalone: false
})
export class HostListenerBinding {

  constructor(private element:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement,"backgroundColor", "blue");
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement,"backgroundColor", "transparent");
  }
}
