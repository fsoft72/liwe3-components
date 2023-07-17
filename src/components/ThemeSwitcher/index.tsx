import React from 'react';
interface ThemeSwitcherProps {
	lightTheme?: string,
	darkTheme?: string,
}
// Create a component that allows the user to switch between the light and dark theme
export  default function ThemeSwitcher ( {lightTheme = 'liwe-light-theme', darkTheme = 'liwe-dark-theme'}: ThemeSwitcherProps) {
	const toggleTheme = ( e: any ) => {
		const body = document.querySelector( 'body' );
		const classes = body?.getAttribute('class');
		let newClasses = '';
		if ( e.target.checked ) {
			newClasses = classes?.replace( lightTheme, darkTheme) || darkTheme;
			body?.setAttribute('class', newClasses );
		} else {
			newClasses = classes?.replace( darkTheme, lightTheme ) || 'liwe-light-theme';
			body?.setAttribute('class', newClasses );
		}
	};

	return (
		<label className="liwe3-themeswitch">
			<input type="checkbox" onChange={toggleTheme}/>
			<span className="liwe3-themeswitch-slider"></span>
		</label>
	);
}
