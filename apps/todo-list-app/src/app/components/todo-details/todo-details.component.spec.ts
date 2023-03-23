import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { TodoDetailsComponent } from './todo-details.component';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/todo.model';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TodoDetailsComponent', () => {
	let component: TodoDetailsComponent;
	let fixture: ComponentFixture<TodoDetailsComponent>;
	let todoServiceSpy: jest.Mocked<TodoService>;
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
		todoServiceSpy = {
			getTodo: jest.fn().mockReturnValue(of(mockTodoList)),
		} as unknown as jest.Mocked<TodoService>;

		await TestBed.configureTestingModule({
			imports: [CommonModule, BrowserAnimationsModule, MatDividerModule, MatButtonModule, RouterTestingModule],
			declarations: [TodoDetailsComponent],
			providers: [
				{
					provide: TodoService,
					useValue: todoServiceSpy,
				},
				{
					provide: ActivatedRoute,
					useValue: {
						paramMap: of(new Map([['id', '1']])),
					},
				},
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TodoDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should get the todo item based on the route parameter', () => {
		expect(todoServiceSpy.getTodo).toHaveBeenCalledWith(1);
	});
});
