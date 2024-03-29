import { Component,OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course [] =[{
    _id:'1',name:"Angular",category:'Front-end developer'
  }];
  displayedColumns = ['name','category']; // array of strings


  constructor(private coursesService:CoursesService){
    //this.courses = []; // initialize
    this.courses = this.coursesService.list();
  }


  ngOnInit(): void {

  }

}
