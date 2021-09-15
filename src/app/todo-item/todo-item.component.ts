import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  // 34an hab3at el todo mn component li component tani
  @Input() todo!: Todo;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()



  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  onTodoClicked(){
    this.todoClicked.emit()
  }

  onEditClicked(){
    this.editClicked.emit()
  }

  onDeleteClicked(){
    this.deleteClicked.emit()
  }

}
