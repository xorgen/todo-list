import { Route } from '@angular/router';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
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
		path: '**',
		redirectTo: 'todo-list',
	},
];
