import React from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	label: string | React.ReactNode;
	size?: 'xs' | 'sm' | 'md' | 'ld' | 'xl' | 'block';
	mode?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | 'ghost';
	attrs?: {};
}

const Button = ( props: ButtonProps ) => {
	const { label, size, mode, attrs, onClick, ...rest } = props;	
	const prepCssClasses = () => {
		return `liwe3-button ${(size ? 'liwe3-button-' + size : '')} ${(mode ? 'liwe3-button-' + mode : '')}`;
	};

	return (
		<button onClick={onClick} className={prepCssClasses()} {...attrs} {...rest}>{label}</button>
	);
};

export default Button;