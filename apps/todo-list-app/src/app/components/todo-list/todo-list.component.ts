import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ITodo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
	public currentTask?: ITodo;
	public todoList$!: Observable<ITodo[]>;
	selectedId = 0;

	constructor(private _todoService: TodoService, private _route: ActivatedRoute) {}

	ngOnInit(): void {
		this.todoList$ = this._route.paramMap.pipe(
			switchMap((params) => {
				this.selectedId = parseInt(params.get('id') as string, 10);
				return this._todoService.getTodoList();
			}),
		);
	}

	public updateTaskPosition(todo: ITodo): void {
		this._todoService.moveCompletedTaskToBottom(todo.id);
	}

	public showTaskDetails(todo: ITodo): void {
		this.currentTask = todo;
	}
}
