import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

// Create a component that allows the user to switch between the light and dark theme
export  default function ThemeSwitcher (props) {
	const setTheme = props.setTheme;
	console.log('---  ThemeSwitcher', typeof setTheme);

	const toggleTheme = ( e: any ) => {
		if ( e.target.checked ) {
			setTheme( 'liwe-dark-theme' );
		} else {
			setTheme( 'liwe-light-theme' );
		}
	};

	return (
		<label className="switch">
			<input type="checkbox" onChange={toggleTheme} />
			<span className="slider"></span>
		</label>
	);
}
