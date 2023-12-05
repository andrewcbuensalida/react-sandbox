import React, { useEffect, useState } from "react";
import { CharacterType } from "../types";

import { createGalactic } from "galactic-state";

const [useCharacter]:any = createGalactic({})
const [useRefetch]:any = createGalactic(true)
const [useLoading]:any = createGalactic(true)

function useSwapi() {
	const [character, setCharacter] = useCharacter();
	const [refetch, setRefetch] = useRefetch();
	const [loading, setLoading] = useLoading();

	useEffect(() => {
		async function fetchCharacter() {
			const response = await fetch(
				`https://swapi.dev/api/people/${Math.floor(
					Math.random() * 100
				)}`
			);
			const responseJson = await response.json();
			setCharacter(responseJson);
			setRefetch(false);
			setLoading(false);
		}
		if (refetch) {
			setLoading(true);
			fetchCharacter();
		}
		return () => {
			return;
		};
	}, [refetch]);

	return { character, setRefetch, loading };
}

export default useSwapi;
