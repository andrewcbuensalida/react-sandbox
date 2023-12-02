import {
	PropsWithChildren,
	createContext,
	useState,
} from "react";

export const ThemeContext = createContext({
	theme: "light",
	handleChangeTheme: () => {},
});

function ThemeContextProvider({ children }: PropsWithChildren) {
	const [theme, setTheme] = useState("light");

	function handleChangeTheme() {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}
	return (
		<ThemeContext.Provider value={{ theme, handleChangeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;
