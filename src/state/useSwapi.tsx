import React, { useEffect, useState } from "react";
import { CharacterType } from "../types";

import { createGalactic } from "galactic-state";

const [useCharacter]: any = createGalactic({});
const [useError]: any = createGalactic(null);
const [useLoading]: any = createGalactic(false);

function useSwapi() {
	// shouldn't use useState because it won't be shared state, unless that's what you want
	const [character, setCharacter] = useCharacter();
	const [error, setError] = useError();
	const [loading, setLoading] = useLoading();
	console.log("in useswapi");

	async function fetchCharacter() {
		setLoading(true);
		console.log("after setloading true");
		try {
			const response = await fetch(
				`https://swapi.dev/api/people/${Math.floor(
					Math.random() * 100
				)}`
			);
			const responseJson = await response.json();
			console.log("after fetch");
			setCharacter(responseJson);
			setError(null);
			console.log("after set character");
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		console.log("in useeffect in useswapi");
		fetchCharacter();
	}, []);

	function refetch() {
		console.log("in refetch");

		fetchCharacter();
	}

	return { character, refetch, error, loading };
}

export default useSwapi;
