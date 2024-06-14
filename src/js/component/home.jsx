import React, { useState } from "react";


const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1><b>ToDoList Tasks</b></h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							console.log(e)
							if (e.key === "Enter") {
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}

						}}
						placeholder="Agregar tarea..."></input>
				</li>
				{todos.map((item, index) => (
					<li key={
						item
					}>
						{item}{" "}
						<i className="fas fa-trash-alt"
							onClick={() =>
								setTodos(todos.filter(
									(name, currentIndex) => {
										return index != currentIndex;
									}
								))
							}></i>
					</li>
				))}
			</ul>
			<div>
				<b>{todos.length} tasks</b>
			</div>
		</div >
	);
}

export default Home;
