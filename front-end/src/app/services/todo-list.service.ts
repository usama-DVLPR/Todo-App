import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private http: HttpClient) {}

  getTodos(): any {
    return this.http.get('http://127.0.0.1:3000/api/v1/todolist');
  }
  addTodo(title: String) {
    return this.http.post('http://127.0.0.1:3000/api/v1/todolist', {
      title: title,
    });
  }

  deleteTodo(id: String) {
    this.http
      .delete(`http://127.0.0.1:3000/api/v1/todolist/${id}`)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getTodo(id: String) {
    return this.http.get(`http://127.0.0.1:3000/api/v1/todolist/${id}`);
  }

  udpateTodo(id: String, title: String) {
    return this.http.patch(`http://127.0.0.1:3000/api/v1/todolist/${id}`, {
      title: title,
    });
  }
}
