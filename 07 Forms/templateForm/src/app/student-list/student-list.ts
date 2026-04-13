import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  @Input() students: Student[] = [];
}
