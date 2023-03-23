import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ITodo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
	selector: 'app-todo-details',
	templateUrl: './todo-details.component.html',
	styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent implements OnInit {
	todo$!: Observable<ITodo>;

	constructor(private _route: ActivatedRoute, private _todoService: TodoService) {}

	ngOnInit(): void {
		this.todo$ = this._route.paramMap.pipe(
			switchMap((params: ParamMap) => this._todoService.getTodo(params.get('id') as string)),
		);
	}
}
