// todo-list-item.component.ts
import { Component, inject } from '@angular/core';
import { CalculatorService } from './calculator.service';
@Component({
  standalone: true,
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItem {
  taskTitle = 'Test';
  isComplete = false;

  completeTask() {
    this.isComplete = true;
  }

  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
    this.updateCost(10,20)
  }
  private calculatorService = inject(CalculatorService);
  totalCost = 0;
  updateCost(a: number, b: number) {
    this.totalCost = this.calculatorService.add(a, b);
  }
}
