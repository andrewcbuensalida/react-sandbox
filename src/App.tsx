import "./App.css";
import { useCallback, useContext, useState } from "react";
import { ThemeContext } from "./state/ThemeContextProvider";
import Character from "./components/Character";
import MyCallback from "./components/MyCallback";
import MyRef from "./components/MyRef";
import GalacticCharacter from "./components/GalacticCharacter";
import Todo from "./components/Todo";
import j from "./j.json";
import StartshipsWithContext from "./components/StarshipsWithContext";
import Starships from "./components/Starships";

function App() {
	const { theme, handleChangeTheme } = useContext(ThemeContext);

	console.log("In app");

	return (
		<div style={{ textAlign: "center" }}>
			<button onClick={() => handleChangeTheme()}>Change theme</button>
			<div className={`App theme-${theme}`}>
				<MyRef theme={theme} />
        {/* Character and GalacticCharacter show the same character because they both use useSwapi which is a custom hook that uses galactic state */}
				<Character />
				<GalacticCharacter />
        {/* These show different starships because it uses a custom hook useStarshipState which has its own reducer. Custom hooks are there own instance for each component */}
				<Starships />
				<Starships />
        {/* this shows the same starships because it uses a shared context provider that uses a shared custom hook useStarshipState which uses a shared reducer */}
				<StartshipsWithContext />
				<StartshipsWithContext />
				<MyCallback>
					text in MyCallback<div>in div in between MyCallback</div>
				</MyCallback>
				<Todo />
			</div>
		</div>
	);
}

export default App;
