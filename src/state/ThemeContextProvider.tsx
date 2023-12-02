import {
	PropsWithChildren,
	createContext,
	useState,
} from "react";

export const ThemeContext = createContext({
	theme: "light",
	setTheme: (theme: string) => {},
});

function ThemeContextProvider({ children }: PropsWithChildren) {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;
