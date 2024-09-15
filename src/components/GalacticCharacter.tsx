import useSwapi from "../state/useSwapi";

function GalacticCharacter() {
	const { character, refetch, loading } = useSwapi();
	console.log("in galactic character");

	return (
		<section>
			Galactic Character <button onClick={() => refetch()}>Refetch</button>
			<br />
			{loading ? (
				<h1>Loading character....</h1>
			) : (
				character && <h1>{character.name}</h1>
			)}
		</section>
	);
}

export default GalacticCharacter;
