import { ITodo } from '../models/todo.model';

export const todoList: ITodo[] = [
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
	{
		id: 5,
		isCompleted: true,
		title: 'Birthday Party',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
];
