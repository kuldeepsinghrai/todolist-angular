import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;



  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const todo = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      isActive: true,
    }
    if (todo.title != null && todo.desc != null) {
      this.todoAdd.emit(todo);
    } else {
      alert("Please fill all the fields")
    }
  }

}
