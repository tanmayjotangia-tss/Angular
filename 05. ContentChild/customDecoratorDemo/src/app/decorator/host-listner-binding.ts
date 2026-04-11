import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListenerBinding]',
  standalone: false
})
export class HostListenerBinding {

  constructor(private element:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement,"backgroundColor", "blue");
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
    this.renderer.setStyle(this.element.nativeElement,'margin','10px 10px');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement,"backgroundColor", "transparent");
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
    this.renderer.setStyle(this.element.nativeElement,'margin','0px 0px');
  }

  @HostListener('mouseenter') onMouseEnter2(){
    this.renderer.addClass(this.element.nativeElement, 'hovered');
  }

  @HostListener('mouseleave') onMouseLeave2(){
    this.renderer.removeClass(this.element.nativeElement, 'hovered');
  }
}
