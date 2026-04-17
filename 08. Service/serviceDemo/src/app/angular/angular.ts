import { Component } from '@angular/core';
import { CourseService } from '../course-service';

@Component({
  selector: 'app-angular',
  standalone: false,
  templateUrl: './angular.html',
  styleUrl: './angular.css',
})
export class Angular {

  constructor(private courseService:CourseService){}

  title="Angular";
  onEnroll(){
    this.courseService.doRegister(this.title)
  }
}
