import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [];
  title = 'To Do App';

  addtodo(value) {
    this.todos.push(value);
    console.log("value added");
    
    
  }

  delete(todo) {

    for ( let i = 0; i <= this.todos.length; i++) {
      if (todo == this.todos[i]) {
        this.todos.splice(i, 1);
        console.log("delete");
      }
    }
    
  }

  todoSubmit(value: any) {
    if (value !== "") { }
    this.todos.push(value.todo);
    console.log(value.todo);
  }
}
