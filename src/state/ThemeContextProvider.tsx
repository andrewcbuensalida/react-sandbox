import { ReactElement, createContext, useState } from "react";
import { ThemeContextType } from "../types";

export const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeContextProvider({ children }: { children: ReactElement }) {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;
