import { Route } from '@angular/router';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const appRoutes: Route[] = [
	{
		path: 'todo-list',
		component: TodoListComponent,
	},
	{
		path: 'todo/:id',
		component: TodoDetailsComponent,
	},
	{
		path: 'todo-new',
		component: TodoFormComponent,
	},
	{
		path: '**',
		redirectTo: 'todo-list',
	},
];
