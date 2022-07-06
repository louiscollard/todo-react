import React from "react";
import AddTodoList from "./AddTodoList";

const App = () => {
	return (
		<>
			<AddTodoList />
			<button>Clear Completed </button>
			<div>0 left to do</div>
		</>
	);
};

export default App;
