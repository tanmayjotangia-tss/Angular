import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('product-page');

  products=[
{id:1,name:"Watch",color:"Black",price:250,available:"Available",image:"Clock.jpg"},

{id:2,name:"Mobile",color:"Blue",price:500,available:"Available",image:"Phone.jpg"},

{id:3,name:"Refrigerator",color:"Gray",price:3000,available:"Not Available",image:"Fridge.jpg"},

{id:4,name:"Television",color:"White",price:4000,available:"Available",image:"Tv.jpg"},
]

buy(product:any){
  alert(`Bought ${product.name} for ${product.price}`);
}
notify(product:any){
  alert("Will notify when available")
}
viewDetail(product:any){
  alert(`Details of ${product.name}`)
}
}
