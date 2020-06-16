import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  id: number,
  title: string,
  userId: number
  complated: boolean
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http: HttpClient) { }
  
  getTodos() {
    return this.http.get('http://localhost:3000/api/todos');
  }  
  // getTodos(): Observable<Todo[]> {
  //   const todos = this.http.get<Todo[]>('http://localhost:3000/api/todos')
  //   debugger;
  //   return todos;
  // }

  // updateTodo(todo: Todo): Observable<void> {
  //   return this.http.put<void>(
  //     'http://localhost:3000/api/todos/' + todo.id, todo
  //   )
  // }
}


