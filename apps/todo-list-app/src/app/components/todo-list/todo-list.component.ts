import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
	public todo: ITodo[] = [];

	constructor(private _todo: TodoService) {}

	ngOnInit(): void {
		this.todo = this._todo.getTodos();
	}
}
