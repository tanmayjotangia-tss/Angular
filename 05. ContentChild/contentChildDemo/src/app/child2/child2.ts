import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: false,
  templateUrl: './child2.html',
  styleUrl: './child2.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Child2 {

}
