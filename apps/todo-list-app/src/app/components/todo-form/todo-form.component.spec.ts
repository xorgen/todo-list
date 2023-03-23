import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';
import { TodoService } from '../../services/todo.service';
import { FormBuilder } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

describe('TodoFormComponent', () => {
	let component: TodoFormComponent;
	let fixture: ComponentFixture<TodoFormComponent>;
	let todoServiceSpy: jest.Mocked<TodoService>;

	beforeEach(async () => {
		todoServiceSpy = {
			addTodoItem: jest.fn(),
		} as unknown as jest.Mocked<TodoService>;

		await TestBed.configureTestingModule({
			imports: [
				CommonModule,
				BrowserAnimationsModule,
				ReactiveFormsModule,
				FormsModule,
				MatFormFieldModule,
				MatListModule,
				RouterTestingModule,
				MatCheckboxModule,
				MatDividerModule,
				MatInputModule,
				MatButtonModule,
			],
			declarations: [TodoFormComponent],
			providers: [FormBuilder, { provide: TodoService, useValue: todoServiceSpy }],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TodoFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show title required error when title is empty', () => {
		const titleInput = fixture.debugElement.query(By.css('input[name="title"]')).nativeElement;
		titleInput.dispatchEvent(new Event('input'));
		titleInput.dispatchEvent(new Event('blur'));
		fixture.detectChanges();
		const errorElement = fixture.nativeElement.querySelector('.title-required-error');
		expect(errorElement).toBeTruthy();
	});

	it('should not show title required error when title is not empty', () => {
		const titleInput = fixture.debugElement.query(By.css('input[name="title"]')).nativeElement;
		titleInput.value = 'Test title';
		titleInput.dispatchEvent(new Event('input'));
		titleInput.dispatchEvent(new Event('blur'));
		fixture.detectChanges();
		const errorElement = fixture.nativeElement.querySelector('.title-required-error');
		expect(errorElement).toBeFalsy();
	});

	it('should call addTodoItem method on todoService when form is submitted', fakeAsync(() => {
		const title = 'Test title';
		const description = 'Test description';
		const titleInput = fixture.nativeElement.querySelector('input[name="title"]');
		const descriptionInput = fixture.nativeElement.querySelector('input[name="description"]');
		titleInput.value = title;
		titleInput.dispatchEvent(new Event('input'));
		descriptionInput.value = description;
		descriptionInput.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		const addTodoItemSpy = jest.spyOn(component, 'addTodoItem').mockImplementation(() => {});
		const formDebugElement = fixture.debugElement.query(By.css('form'));
		formDebugElement.triggerEventHandler('ngSubmit', null);
		tick();
		fixture.detectChanges();
		expect(addTodoItemSpy).toHaveBeenCalledWith(title, description);
	}));

	it('should not call addTodoItem method on todoService when form is invalid', () => {
		const titleInput = fixture.nativeElement.querySelector('input[name="title"]');
		titleInput.value = '';
		titleInput.dispatchEvent(new Event('input'));
		titleInput.dispatchEvent(new Event('blur'));
		const form = fixture.nativeElement.querySelector('form');
		form.dispatchEvent(new Event('submit'));
		fixture.detectChanges();
		expect(todoServiceSpy.addTodoItem).not.toHaveBeenCalled();
	});
});
