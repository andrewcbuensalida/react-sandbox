import "./App.css";
import { useCallback, useContext, useState } from "react";
import { ThemeContext } from "./state/ThemeContextProvider";
import Character from "./components/Character";
import Starships from "./components/Starships";
import MyCallback from "./components/MyCallback";
import MyRef from "./components/MyRef";
import GalacticCharacter from "./components/GalacticCharacter";
import Todo from "./components/Todo";
import j from './j.json'

function App() {
	const { theme, handleChangeTheme } = useContext(ThemeContext);

	console.log("In app");

	return (
		<div style={{ textAlign: "center" }}>
			<button onClick={() => handleChangeTheme()}>Change theme</button>
			<div className={`App theme-${theme}`}>
				<MyRef theme={theme} />
				<Character />
				<GalacticCharacter />
				<Starships />
				<MyCallback>
					text in MyCallback<div>in div in between MyCallback</div>
				</MyCallback>
        <Todo/>
			</div>
		</div>
	);
}

export default App;
