import React, { useState } from 'react';
import { useEffect } from 'react';
interface ThemeSwitcherProps {
	lightTheme?: string,
	darkTheme?: string,
}
// Create a component that allows the user to switch between the light and dark theme
export default function ThemeSwitcher ( { lightTheme = 'liwe3-light-theme', darkTheme = 'liwe3-dark-theme' }: ThemeSwitcherProps ) {
	const [ isDark, setIsDark ] = useState( false );

	useEffect( () => {
		// check in the body class if the dark theme is set
		const body = document.querySelector( 'body' );
		const classes = body?.getAttribute( 'class' );

		if ( classes?.includes( darkTheme ) ) {
			setIsDark( true );
		} else {
			setIsDark( false );
		}
	}, [] );

	const toggleTheme = ( e: any ) => {
		console.log( e.target.checked );
		const body = document.querySelector( 'body' );
		const classes = body?.getAttribute( 'class' );
		let newClasses = '';
		if ( e.target.checked ) {
			setIsDark( true );
			newClasses = classes?.replace( lightTheme, darkTheme ) || darkTheme;
			body?.setAttribute( 'class', newClasses );
		} else {
			setIsDark( false );
			newClasses = classes?.replace( darkTheme, lightTheme ) || lightTheme;
			body?.setAttribute( 'class', newClasses );
		}
	};

	return (
		<label className="liwe3-themeswitch">
			<input type="checkbox" onChange={toggleTheme} checked={isDark} />
			<span className="liwe3-themeswitch-slider"></span>
		</label>
	);
}
