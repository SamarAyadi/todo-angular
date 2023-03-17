import { Component } from '@angular/core';
import { TodoItem } from './model/todoItem';
import { TodoList } from './model/todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList('Samar AYADI', [
    new TodoItem('Go to Gym', true),
    new TodoItem('Go for Run'),
    new TodoItem('Go to Cinema'),
  ]);

  showComplete: boolean = false;

  get username(): string {
    return this.list.user;
  }

  get itemcount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  } 

  addItem(itemTask: string) {
    if(itemTask != '') {
      this.list.addItems(itemTask);
    }
  }
}