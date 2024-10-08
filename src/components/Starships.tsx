import useStarshipsState from "../state/useStarshipsState";
import { StarshipType } from "../types";

function Starships() {
	const { state, dispatch } = useStarshipsState();
	const { starships, loading } = state;
	// console.log("in starships");
	return (
		<section>STARSHIPS no context
			<button onClick={() => dispatch({ type: "FETCH_LOADING" })}>
				Refetch
			</button>
			{loading && <div>Loading starships...</div>}
			{starships.map((starship: StarshipType) => {
				return <h1 key={starship.name}>{starship.name}</h1>;
			})}
		</section>
	);
}

export default Starships;
