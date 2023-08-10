import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  task: Task = new Task();
  tabTask: Task[] = [];
  addTaskValue: string = '';
  editTaskValue: string = '';
  constructor(private tasksService: CrudService) {
    
  }
  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.task = new Task();
    this.tabTask = [];
    this.getAllTask();
  }

  addTask(): void {
    this.task.task_name = this.addTaskValue;
    this.tasksService.addTask(this.task).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue = '';
    }, err => {
      alert(err);
    } );
  }
  getAllTask() {
    this.tasksService.getAllTask().subscribe(res => { 
      this.tabTask = res;
    }, err => {
      alert('Unable to get all tasks');
    });
    
  }

  editTask() {
    this.task.task_name = this.editTaskValue
    this.tasksService.editTask(this.task).subscribe(res => { 
      this.ngOnInit();
    }, err => {
      alert('Failed to edit task');
    });
  }

  deleteTask(task: Task) {
    this.tasksService.deleteTask(task).subscribe(res => { 
      this.ngOnInit();
    }, err => {
      alert('Failed to delete task');
    });
  }
 
  call(task: Task) {
    this.task = task;
    this.editTaskValue = task.task_name;
  }


}
