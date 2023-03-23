import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITodo } from '../models/todo.model';
import { todoList } from './mock-todos';
@Injectable({
	providedIn: 'root',
})
export class TodoService {
	public getTodoList(): Observable<ITodo[]> {
		return of(todoList);
	}

	public getTodo(id: number): Observable<ITodo> {
		return of(todoList.filter((todo) => todo.id === id)[0]);
	}

	public addTodoItem(title: string, description: string): void {
		const maxId = todoList.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);
		const newId = maxId + 1;
		const newTodo: ITodo = {
			id: newId,
			title: title,
			description: description,
			isCompleted: false,
		};
		todoList.unshift(newTodo);
	}

	public moveActiveTaskToTop(id: number): void {
		const index = todoList.findIndex((todo) => todo.id === id);
		const activeTask = todoList.splice(index, 1)[0];
		const lastActiveItemIndex = todoList.findIndex((todo) => todo.isCompleted === true) - 1;

		if (lastActiveItemIndex < 0) {
			todoList.unshift(activeTask);
		} else {
			todoList.splice(lastActiveItemIndex, 0, activeTask);
		}
	}

	public moveCompletedTaskToBottom(id: number): void {
		const index = todoList.findIndex((todo) => todo.id === id);
		const completedTask = todoList.splice(index, 1)[0];
		const firstCompletedItemIndex = todoList.findIndex((todo) => todo.isCompleted === true);

		if (firstCompletedItemIndex === -1) {
			todoList.push(completedTask);
		} else {
			todoList.splice(firstCompletedItemIndex, 0, completedTask);
		}
	}
}
