import React from "react";
import useSwapi from "../useSwapi";

function Character() {
	const { character, setRefetch, loading } = useSwapi();

	return (
		<div>
			<button onClick={() => setRefetch((prev) => !prev)}>Refetch</button>
			<br />
			{loading ? (
				<h1>Loading....</h1>
			) : (
				character && <h1>{character.name}</h1>
			)}
		</div>
	);
}

export default Character;
