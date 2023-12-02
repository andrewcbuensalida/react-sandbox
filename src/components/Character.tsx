import React from "react";
import useSwapi from "../state/useSwapi";

function Character() {
	const { character, setRefetch, loading } = useSwapi();
	console.log("in character");

	return (
		<section>
			<button onClick={() => setRefetch((prev) => !prev)}>Refetch</button>
			<br />
			{loading ? (
				<h1>Loading character....</h1>
			) : (
				character && <h1>{character.name}</h1>
			)}
		</section>
	);
}

export default Character;
