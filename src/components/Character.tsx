import React,{memo} from "react";
import useSwapi from "../state/useSwapi";

function Character() {
	const { character, refetch, error, loading } = useSwapi();
	console.log("in character");

	return (
		<section>
			Character <button onClick={() => refetch()}>Refetch</button>
			<br />
			{loading ? (
				<h1>Loading character....</h1>
			) : error ? (
				<h1>There was an error</h1>
			) : (
				character && <h1>{character.name}</h1>
			)}
		</section>
	);
}

// export default Character;
export default memo(Character);
