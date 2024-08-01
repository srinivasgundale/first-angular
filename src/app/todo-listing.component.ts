// todo-listings.component.ts
import { Component } from '@angular/core';
import { TodoListItem } from "./todo-list-item.component";
@Component({
  standalone: true,
  selector: 'todo-listing',
  imports: [TodoListItem],
  template: `
    <ul>
      <todo-list-item />
    </ul>
  `,
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListing{
  taskTitle = 'Test';
  isComplete = false;

  completeTask() {
    this.isComplete = true;
  }

  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }
}
