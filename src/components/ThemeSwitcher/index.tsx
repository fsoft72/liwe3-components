import React, {useState} from 'react';
interface ThemeSwitcherProps {
	lightTheme?: string,
	darkTheme?: string,
	setDark?: boolean	
}
// Create a component that allows the user to switch between the light and dark theme
export  default function ThemeSwitcher ( {lightTheme = 'liwe-light-theme', darkTheme = 'liwe-dark-theme',  setDark= false}: ThemeSwitcherProps) {
	const [isDark, setIsDark] = useState( setDark );
	const toggleTheme = ( e: any ) => {
		console.log( e.target.checked );
		const body = document.querySelector( 'body' );
		const classes = body?.getAttribute('class');
		let newClasses = '';
		if ( e.target.checked ) {
			setIsDark( true );
			newClasses = classes?.replace( lightTheme, darkTheme) || darkTheme;
			body?.setAttribute('class', newClasses );
		} else {
			setIsDark( false );
			newClasses = classes?.replace( darkTheme, lightTheme ) || 'liwe-light-theme';
			body?.setAttribute('class', newClasses );
		}
	};

	return (
		<label className="liwe3-themeswitch">
			<input type="checkbox" onChange={toggleTheme} checked={isDark} />
			<span className="liwe3-themeswitch-slider"></span>
		</label>
	);
}
