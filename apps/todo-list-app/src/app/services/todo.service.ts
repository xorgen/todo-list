import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Injectable({
	providedIn: 'root',
})
export class TodoService {
	private todoList: ITodo[] = [
		{
			id: 1,
			isCompleted: false,
			title: '1 Go to sport',
		},
		{
			id: 2,
			isCompleted: false,
			title: '2 Meditate',
			description: 'Take a break for 20 minutes',
		},
		{
			id: 3,
			isCompleted: false,
			title: '3 Raid World of Warcraft',
			description: 'Wednesday 20:00, tanking',
		},
		{
			id: 4,
			isCompleted: false,
			title: '4 Read a book',
			description: 'Cracking the coding interview',
		},
	];

	public getTodos(): ITodo[] {
		return this.todoList;
	}

	public moveActiveTaskToTop(id: number): void {
		const index = this.todoList.findIndex((todo) => todo.id === id);
		const activeTask = this.todoList.splice(index, 1)[0];
		const lastActiveItemIndex = this.todoList.findIndex((todo) => todo.isCompleted === true) - 1;

		if (lastActiveItemIndex < 0) {
			this.todoList.unshift(activeTask);
		} else {
			this.todoList.splice(lastActiveItemIndex, 0, activeTask);
		}
	}

	public moveCompletedTaskToBottom(id: number): void {
		const index = this.todoList.findIndex((todo) => todo.id === id);
		const completedTask = this.todoList.splice(index, 1)[0];
		const firstCompletedItemIndex = this.todoList.findIndex((todo) => todo.isCompleted === true);

		if (firstCompletedItemIndex === -1) {
			this.todoList.push(completedTask);
		} else {
			this.todoList.splice(firstCompletedItemIndex, 0, completedTask);
		}
	}
}
