import { Component } from '@angular/core';
import { CourseService } from '../course-service';

@Component({
  selector: 'app-javascript',
  standalone: false,
  templateUrl: './javascript.html',
  styleUrl: './javascript.css',
})
export class Javascript {
    constructor(private courseService:CourseService){}
  title="Javascript";
  onEnroll(){
    this.courseService.doRegister(this.title);
  }

}
