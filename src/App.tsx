import "./App.css";
import { useCallback, useContext, useState } from "react";
import { ThemeContext } from "./state/ThemeContextProvider";
import Character from "./components/Character";
import Starships from "./components/Starships";
import MyCallback from "./components/MyCallback";

function App() {
	const { theme, handleChangeTheme } = useContext(ThemeContext);

	console.log("In app");
	return (
		<div className={`App theme-${theme}`}>
			<button onClick={() => handleChangeTheme()}>Change theme</button>

			<Character />
			<Starships />
			<MyCallback />
		</div>
	);
}

export default App;
