import { TodoService } from './todo.service';
import { ITodo } from '../models/todo.model';
import { todoList } from './mock-todos';

describe('TodoService', () => {
	let service: TodoService;

	beforeEach(() => {
		service = new TodoService();
	});

	it('should return todo list', (done) => {
		service.getTodoList().subscribe((todos: ITodo[]) => {
			expect(todos).toEqual(todoList);
			done();
		});
	});

	it('should return a specific todo by id', (done) => {
		const id = 1;
		const expectedTodo = todoList.find((todo) => todo.id === id);

		service.getTodo(id).subscribe((todo: ITodo) => {
			expect(todo).toEqual(expectedTodo);
			done();
		});
	});

	it('should add a new todo item', () => {
		const initialLength = todoList.length;
		const title = 'New Task';
		const description = 'New Task Description';

		service.addTodoItem(title, description);

		expect(todoList.length).toBe(initialLength + 1);
		expect(todoList[0].title).toBe(title);
		expect(todoList[0].description).toBe(description);
		expect(todoList[0].isCompleted).toBe(false);
	});

	it('should move active task to top', () => {
		const id = 2;
		const initialIndex = todoList.findIndex((todo) => todo.id === id);

		service.moveActiveTaskToTop(id);

		const newIndex = todoList.findIndex((todo) => todo.id === id);
		expect(newIndex).toBeLessThan(initialIndex);
	});

	it('should move completed task to bottom', () => {
		const id = 1;
		const initialIndex = todoList.findIndex((todo) => todo.id === id);
		todoList[initialIndex].isCompleted = true;

		service.moveCompletedTaskToBottom(id);

		const newIndex = todoList.findIndex((todo) => todo.id === id);
		expect(newIndex).toBeGreaterThan(initialIndex);
	});
});
