import { Component } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Complete Angular Tutorial',
      dueDate: new Date('2023-12-31'),
      priority: 'High',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Create Task Management App',
      dueDate: new Date('2023-10-20'),
      priority: 'Medium',
      status: 'To Do'
    },
  ];

  isAddTaskFormVisible = false;

  toggleAddTaskForm() {
    this.isAddTaskFormVisible = !this.isAddTaskFormVisible;
  }

  onTaskAdded(newTask: Task) {
    // Add the new task to your tasks array or perform any required operations
    this.tasks.push(newTask);

    // Hide the 'add-task' form after adding the task
    this.isAddTaskFormVisible = false;
  }
}




