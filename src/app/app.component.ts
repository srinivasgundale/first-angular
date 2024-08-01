// app.component.ts
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListing } from './todo-listing.component';
import { TodoListItem } from './todo-list-item.component';
import { CalculatorService } from './calculator.service';
import { AppsComponent } from './test.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListItem , TodoListing, AppsComponent ], // Import TodoList here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'first-angular';
  private calculatorService = inject(CalculatorService);
  totalCost = 0;
  updateCost(a: number, b: number) {
    this.totalCost = this.calculatorService.add(a, b);
  }
}
