import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-todo-form',
	templateUrl: './todo-form.component.html',
	styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
	public todoForm: FormGroup;

	constructor(private _todoService: TodoService, private _formBuilder: FormBuilder) {
		this.todoForm = this._formBuilder.group({
			title: ['', Validators.required],
			description: [''],
		});
	}

	public addTodoItem(title: string, description: string): void {
		this._todoService.addTodoItem(title, description);
	}
}
