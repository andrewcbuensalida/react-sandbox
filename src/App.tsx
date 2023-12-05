import "./App.css";
import { useCallback, useContext, useState } from "react";
import { ThemeContext } from "./state/ThemeContextProvider";
import Character from "./components/Character";
import Starships from "./components/Starships";
import MyCallback from "./components/MyCallback";
import MyRef from "./components/MyRef";
import GalacticCharacter from "./components/GalacticCharacter";

function App() {
	const { theme, handleChangeTheme } = useContext(ThemeContext);

	console.log("In app");
	return (
		<div style={{ textAlign: "center" }}>
			<button onClick={() => handleChangeTheme()}>Change theme</button>
			<div className={`App theme-${theme}`}>
				<MyRef />
				<Character />
				<GalacticCharacter />
				<Starships />
				<MyCallback />
			</div>
		</div>
	);
}

export default App;
