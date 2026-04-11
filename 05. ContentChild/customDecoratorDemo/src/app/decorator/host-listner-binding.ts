import { Directive, ElementRef, Host, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListenerBinding]',
  standalone: false
})
export class HostListenerBinding {

  constructor(private element:ElementRef, private renderer: Renderer2) { }

  // @HostListener('mouseenter') onMouseEnter(){
  //   this.renderer.setStyle(this.element.nativeElement,"backgroundColor", "blue");
  //   this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
  //   this.renderer.setStyle(this.element.nativeElement,'margin','10px 10px');
  // }

  // @HostListener('mouseleave') onMouseLeave(){
  //   this.renderer.setStyle(this.element.nativeElement,"backgroundColor", "transparent");
  //   this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
  //   this.renderer.setStyle(this.element.nativeElement,'margin','0px 0px');
  // }

  // @HostListener('mouseenter') onMouseEnter2(){
  //   this.renderer.addClass(this.element.nativeElement, 'hovered');
  // }

  // @HostListener('mouseleave') onMouseLeave2(){
  //   this.renderer.removeClass(this.element.nativeElement, 'hovered');
  // }
  @Input() defaultColor?:any;
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') onMouseEnter3(){
    this.backgroundColor = 'aquamarine';
    this.border = '1px solid black';
  }

  @HostListener('mouseleave') onMouseLeave3(){
    this.backgroundColor = this.defaultColor;
    this.border = 'none';
  }

}
