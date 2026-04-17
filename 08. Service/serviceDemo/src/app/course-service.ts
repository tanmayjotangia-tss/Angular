import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url:string = "http://localhost:8080/customer"
  doRegister(title:string){
    console.log(title);
  }
}
