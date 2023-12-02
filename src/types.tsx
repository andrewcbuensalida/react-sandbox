export type ThemeContextType = {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export interface CharacterType {
	name: string;
}
