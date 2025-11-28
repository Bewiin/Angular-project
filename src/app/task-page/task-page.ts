import { Component } from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {Task} from '../core/services/task';

@Component({
  selector: 'app-task-page',
    imports: [
        AsyncPipe
    ],
  templateUrl: './task-page.html',
  styleUrl: './task-page.css',
})
export class TaskPage {

  // Observable exposé par le service
  tasks$!: ReturnType<Task['getTasks']>;

  constructor(private task: Task) {
    this.tasks$ = this.task.getTasks();

  }

  addTask(title: string) {
    this.task.addTasks(title);
  }
}
