import React, { useState } from 'react';
import Todo from './components/Todos/Todo';
import NewTodo from './components/NewTodo/NewTodo';

const Dummy_Todo = [
	{ id: 1, title: 'building React js project', date: new Date('2022-04-16') },
	{ id: 2, title: 'Gym', date: new Date('2022-04-10') },
	{ id: 3, title: 'reading book', date: new Date('2022-03-1') },
	{ id: 4, title: 'family time', date: new Date('2022-02-27') }
];
function App() {
	const [ todos, setTodos ] = useState(Dummy_Todo);

	const addedNewTodoDataHandler = (newTodo) => {
		setTodos((todos) => [ newTodo, ...todos ]);
	};

	return (
		<div className="App container">
			<NewTodo onAddeNewTodoData={addedNewTodoDataHandler} />
			<Todo items={todos} />
		</div>
	);
}

export default App;
