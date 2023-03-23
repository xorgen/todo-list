import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/todo.model';
import { todoList } from '../../services/mock-todos';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
	let component: TodoListComponent;
	let fixture: ComponentFixture<TodoListComponent>;
	let todoService: TodoService;

	const mockTodoList: ITodo[] = [
		{
			id: 1,
			isCompleted: false,
			title: 'Go to sport',
		},
		{
			id: 2,
			isCompleted: false,
			title: 'Meditate',
			description: 'Take a break for 20 minutes',
		},
		{
			id: 3,
			isCompleted: false,
			title: 'Raid World of Warcraft',
			description: 'Wednesday 8.pm, tanking',
		},
		{
			id: 4,
			isCompleted: false,
			title: 'Read a book',
			description: 'Cracking the coding interview',
		},
	];

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TodoListComponent],
			imports: [FormsModule, MatListModule, MatCheckboxModule, NoopAnimationsModule, RouterTestingModule],
			providers: [
				TodoService,
				{
					provide: ActivatedRoute,
					useValue: {
						paramMap: of(mockTodoList),
					},
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(TodoListComponent);
		component = fixture.componentInstance;
		todoService = TestBed.inject(TodoService);
		fixture.detectChanges();
	});

	it('should display the todo list', () => {
		const mockTodoList = todoList;

		component.todoList$ = of(mockTodoList);
		fixture.detectChanges();

		const todoListItems = fixture.debugElement.nativeElement.querySelectorAll('.list-item');

		expect(todoListItems.length).toBe(4);
		expect(todoListItems[0].textContent).toContain(mockTodoList[0].title);
		expect(todoListItems[0].querySelector('.strike')).toBeFalsy();
		expect(todoListItems[1].textContent).toContain(mockTodoList[1].title);
		expect(todoListItems[1].querySelector('.strike')).toBeFalsy();
		expect(todoListItems[2].textContent).toContain(mockTodoList[2].title);
		expect(todoListItems[2].querySelector('.strike')).toBeFalsy();
	});
});
