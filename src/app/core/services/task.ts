import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TaskItem {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class Task {

  private task: TaskItem[] = [
    { id: 1, title: 'Préparer un cour Angular' },
    { id: 2, title: 'Rédiger module RxJS' },
    { id: 3, title: 'Corriger les Tp' }
  ];

  private lastId = 3;

  private taskSubject = new BehaviorSubject<TaskItem[]>(this.task);
  task$ = this.taskSubject.asObservable();

  getTasks() {
    return this.task$;
  }

  addTasks(title: string) {
    const newTask: TaskItem = { id: ++this.lastId, title };
    this.task = [...this.task, newTask];
    this.taskSubject.next(this.task);
  }

  updateTask(id: number, title: string) {
    this.task = this.task.map(t =>
      t.id === id ? { ...t, title } : t
    );
    this.taskSubject.next(this.task);
  }
}
