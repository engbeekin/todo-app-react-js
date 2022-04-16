import React from 'react';
import Todo from './components/Todo';
function App() {
	const Dummy_Todo = [
		{ id: 1, title: 'building React js project', date: new Date('2022-04-16') },
		{ id: 2, title: 'Gym', date: new Date('2022-04-10') },
		{ id: 3, title: 'reading book', date: new Date('2022-03-1') },
		{ id: 4, title: 'family time', date: new Date('2022-02-27') }
	];
	return (
		<div className="App">
			<Todo items={Dummy_Todo} />
		</div>
	);
}

export default App;
