import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';
import { TodoListService } from 'src/app/services/todo-list.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  isCompleted = false;
  isBlurred: boolean = false;
  display: boolean = false;
  faEdit = faEdit;
  faTrashRestore = faTrashRestore;
  displayModal?: boolean;
  displayBasic?: boolean;
  isUpdate = false;
  updateTodoID: String = '';

  list = [];

  newTodo = new FormGroup({
    title: new FormControl('', [Validators.required]),
  });

  constructor(private todoService: TodoListService) {}
  ngOnInit() {
    this.getAllTodos();
  }

  onIsCompleted(event: any) {
    this.isCompleted = event.target.checked;
    console.log('is Completed: ', this.isCompleted);
  }
  onShow() {
    this.display = true;
    this.isBlurred = true;
  }
  onClose() {
    this.isBlurred = false;
  }
  onEdit(id: String) {
    this.todoService.getTodo(id).subscribe((res: any) => {
      this.updateTodoID = res.data.todo._id;

      this.newTodo.controls.title.setValue(res.data.todo.title);
    });

    this.display = true;
    this.isBlurred = true;
    this.isUpdate = true;
  }
  onDelete(id: String) {
    this.todoService.deleteTodo(id);
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getTodos().subscribe((todos: any) => {
      this.list = todos.data.todoLists;
      console.log(this.list);
    });
  }

  onSubmit() {
    if (this.isUpdate) {
      let updatedTodoItem = this.newTodo.value.title || '';
      this.todoService
        .udpateTodo(this.updateTodoID, updatedTodoItem)
        .subscribe((res) => {
          console.log(res);
          this.getAllTodos();
        });
      this.isUpdate = false;
    } else {
      let newTodoItem = this.newTodo.value.title || '';
      this.todoService.addTodo(newTodoItem).subscribe((res) => {
        console.log(res);
        this.getAllTodos();
      });
    }
    this.newTodo.reset();
    this.display = false;
    this.isBlurred = false;
  }
}
