import React from "react";
import useSwapi from "../useSwapi";

function Character() {
	const { character, setRefetch, loading } = useSwapi();

	return (
		<div>
			<button onClick={() => setRefetch((prev) => !prev)}>Refetch</button>
			<br />
			{loading ? (
				<div>Loading....</div>
			) : (
				character && JSON.stringify(character)
			)}
		</div>
	);
}

export default Character;
