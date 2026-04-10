import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
@ContentChild('contentRef') contentData!:ElementRef;

  data=""
  ngAfterContentInit(){
  this.data=this.contentData.nativeElement.textContent;  }
}
