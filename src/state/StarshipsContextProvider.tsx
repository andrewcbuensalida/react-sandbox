import { PropsWithChildren, createContext, useState } from "react";
import useStarshipsState from "./useStarshipsState";

export const StarshipsContext = createContext(
	{} as ReturnType<typeof useStarshipsState>
);

function StarshipsContextProvider({ children }: PropsWithChildren) {
	return (
		<StarshipsContext.Provider value={useStarshipsState()}>
			{children}
		</StarshipsContext.Provider>
	);
}

export default StarshipsContextProvider;
