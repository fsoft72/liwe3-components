import { createContext } from 'react';

interface ThemeContextProps {
	theme: string;
};

// Create a context to store the current theme and the setTheme function
export const ThemeContext = createContext( {
	theme: 'liwe-light-theme',
} as ThemeContextProps );

export default ThemeContext;