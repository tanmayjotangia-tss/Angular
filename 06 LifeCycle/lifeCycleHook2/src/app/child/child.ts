import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  data = ' '
  ngAfterContentInit() {
    console.log('Child ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('Child ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('Child ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('Child ngAfterViewChecked called');
  } 

  //ngOnChanges is not called in this case because there are no input properties in the Child component. ngOnChanges is only called when there are changes to input properties. Since the Child component does not have any @Input() properties, ngOnChanges will not be triggered.
  ngOnChanges() {
    console.log('Child ngOnChanges called');
  }

  ngOnDestroy() {
    console.log('Child ngOnDestroy called');
  }
}
