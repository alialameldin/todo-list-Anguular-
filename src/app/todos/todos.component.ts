import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  showValidationErrors: boolean = false;

  constructor(private dataService : DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

  onSubmitForm(form: NgForm){

    if(form.invalid) return this.showValidationErrors = true

    // call add function elli mowgoda feldataService w eb3atlaha form.value.text
    this.dataService.addTodo(new Todo(form.value.text))
    // ha5ali showValidationErrors b false 34an eldonia kda mashia tmm w mesh3ayez ad5ol felerror messages
    this.showValidationErrors = false

    return form.reset()
  }

  toggleCompleted(todo : Todo){
    todo.completed = !todo.completed
  }

  editTodo(todo: Todo){
    const index = this.todos.indexOf(todo)

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width : '700px',
      data : todo
    })

    // 34an dah dialogRef fa elparameter result elli howa haya5do howa dah el updatedTodo elli mab3ota mn component EditTodoDialogComponent
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.dataService.updateTodo(index, result)
      }
    })

  }

  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }

}



