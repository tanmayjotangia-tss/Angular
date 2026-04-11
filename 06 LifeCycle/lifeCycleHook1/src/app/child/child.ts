import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() comingData!: string;

  constructor(){
    console.log("Child Component Constructor", this.comingData);
    
  }

  ngOnInit(){
    console.log("Child Component ngOnInit", this.comingData);
  }

  ngDoCheck(){
    console.log("Child Component ngDoCheck", this.comingData);
  }
}
