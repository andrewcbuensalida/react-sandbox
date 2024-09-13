import { useEffect, useState } from "react";

const ToDo = (props: any) => (
	<tr>
		<td>
			<label>{props.id}</label>
		</td>
		<td>
			<input />
		</td>
		<td>
			<label>{props.createdAt}</label>
		</td>
	</tr>
);

enum myEnum {
	enum1 = "hello",
	enum2 = "hello",
}

function Todo() {
  console.log('enum',myEnum['enum1']);
  
	const [name, setName] = useState("a");
	console.log(`Example name: `, name);
	const [todos, setTodos] = useState([
		{
			id: "todo1",
			createdAt: "18:00",
		},
		{
			id: "todo2",
			createdAt: "20:30",
		},
	]);

	// runs twice
	useEffect(() => {
		console.log("in effect...........");

		setName("b");
	}, [name]);

	const reverseOrder = () => {
		// Reverse is a mutative operation, so we need to create a new array first.
		setTodos([...todos].reverse());
	};

	return (
		<section>
			<button onClick={reverseOrder}>Reverse</button>
			{todos.map((todo, index) => (
				<ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
			))}
		</section>
	);
}

export default Todo;
