import { Component, OnInit } from '@angular/core';
import { Task } from './../../Task'
import { TASKS } from './../../mock-task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //mock data
  tasks: Task[] = TASKS

  constructor() { }

  ngOnInit(): void {
  }

}
