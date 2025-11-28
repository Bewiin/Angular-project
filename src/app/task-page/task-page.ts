import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task, TaskItem } from '../core/services/task';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './task-page.html',
  styleUrl: './task-page.css',
})
export class TaskPage {


  tasks$!: ReturnType<Task['getTasks']>;
  editingId: number | null = null;
  editingTitle = '';

  constructor(private task: Task) {
    this.tasks$ = this.task.task$;
  }

  addTask(title: string) {
    this.task.addTasks(title);
  }

  startEdit(t: TaskItem) {
    this.editingId = t.id;
    this.editingTitle = t.title;
  }

  saveEdit() {
    if (this.editingId !== null && this.editingTitle.trim() !== '') {
      this.task.updateTask(this.editingId, this.editingTitle.trim());
    }
    this.editingId = null;
    this.editingTitle = '';
  }

  cancelEdit() {
    this.editingId = null;
    this.editingTitle = '';
  }
}
