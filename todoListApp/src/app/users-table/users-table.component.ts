import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})

export class UsersTableComponent implements OnInit {
  groupedTodos: any;
  headers: any;

  constructor(private todoService : TodoService) { }

  groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
  ngOnInit(): void {
 
    this.todoService
    .getTodos()
      .subscribe(data => {
        this.groupedTodos = this.groupBy(data, 'userId'); 
        this.headers = Object.keys(this.groupedTodos);
            // debugger;
      });

  }

}
