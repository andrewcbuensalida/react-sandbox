import React from 'react'
import useStarshipsState from '../state/useStarshipsState';
import useSwapi from '../state/useSwapi';

function ReduxComp() {
	const { character, setRefetch, loading } = useSwapi();
  return (
		<section>
			Character again{" "}
			<button onClick={() => setRefetch((prev:any) => !prev)}>Refetch</button>
			<br />
			{loading ? (
				<h1>Loading character....</h1>
			) : (
				character && <h1>{character.name}</h1>
			)}
		</section>
  );
}

export default ReduxComp