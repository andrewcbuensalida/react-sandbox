import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./state/ThemeContextProvider";
import { ThemeContextType } from "./types";
import Character from "./components/Character";
import Starships from "./components/Starships";

function App() {
	const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

	function handleChangeTheme() {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}

	return (
		<div className={`App theme-${theme}`}>
			<button onClick={handleChangeTheme}>Change theme</button>
      <Character/>
      <Starships/>
		</div>
	);
}

export default App;
