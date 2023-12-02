import React, { useEffect, useReducer } from "react";
import { StarshipType } from "../types";



type StarshipAction =
	| { type: "FETCH_SUCCESS"; payload: StarshipType }
	| { type: "FETCH_LOADING" };

type StarshipState = {
	loading: boolean;
	error: boolean;
	starships: StarshipType[];
};

const initialState = {
	loading: true,
	error: false,
	starships: [],
};

function starshipReducer(state: StarshipState, action: StarshipAction) {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				...state,
				loading: false,
				starships: [...state.starships, action.payload],
			};
		case "FETCH_LOADING":
			return {
				...state,
				loading: true,
			};
	}
}

function useStarshipsState() {
	const [state, dispatch] = useReducer(starshipReducer, initialState);

	useEffect(() => {
		async function fetchStarships() {
			// for some reason the api is missing some starships
			// TODO try catch and dispatch if error
			const response = await fetch(
				`https://swapi.dev/api/starships/${Math.floor(
					Math.random() * 4 + 9
				)}`
			);
			const responseJson = await response.json();
      // arguments becomme action in reducer
			dispatch({ type: "FETCH_SUCCESS", payload: responseJson });
		}
		if (state.loading) {
			fetchStarships();
		}
	}, [state.loading]);

	return { state, dispatch };
}

export default useStarshipsState;
