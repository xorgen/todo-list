import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [AppComponent, TodoListComponent, TodoDetailsComponent, TodoFormComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		BrowserAnimationsModule,
		DragDropModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		FormsModule,
		MatCheckboxModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
	],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
