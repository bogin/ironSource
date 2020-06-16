import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  @Input() todos: Object;

  constructor() { }

  
  ngOnInit(): void {
    
  }

  catchChange(id, event) {
    const [todo] = 
      Object.keys(this.todos)
        .filter(key => this.todos[key].id === id);
    
    this.todos[todo].completed = !this.todos[todo].completed;
    
  }
}
