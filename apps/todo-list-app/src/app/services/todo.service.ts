import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Injectable({
	providedIn: 'root',
})
export class TodoService {
	private todo: ITodo[] = [
		{
			id: 1,
			state: false,
			title: 'Go to sport',
		},
		{
			id: 2,
			state: false,
			title: 'Meditate',
			description: 'Take a break for 20 minutes',
		},
		{
			id: 3,
			state: false,
			title: 'Raid World of Warcraft',
			description: 'Wednesday 20:00, tanking',
		},
		{
			id: 4,
			state: false,
			title: 'Read a book',
			description: 'Cracking the coding interview',
		},
	];

	public getTodos(): ITodo[] {
		return this.todo;
	}
}
