import React, { useCallback, useContext } from 'react'
import { StarshipsContext } from '../state/StarshipsContextProvider'
import { StarshipType } from '../types';

function StartshipsWithContext() {
  const { state, dispatch } = useContext(StarshipsContext);
	const { starships, loading } = state;
	return (
		<section>
			STARSHIPS WITH context
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

export default StartshipsWithContext