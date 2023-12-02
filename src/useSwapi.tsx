import React, { useEffect, useState } from "react";
import { CharacterType } from "./types";

function useSwapi() {
	const [character, setCharacter] = useState<null | CharacterType>(null);
	const [refetch, setRefetch] = useState(true);
	const [loading, setLoading] = useState(true);

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
