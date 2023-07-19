import React from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button">{
	label: string;
	btnSize?: 'extra-small' | 'small' | 'medium' | 'large';
	btnStyle?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
	extraAttrs?: {};
}

const Button = ( props: ButtonProps ) => {
	const { label, btnSize, btnStyle, extraAttrs, onClick, ...rest } = props;	
	const prepCssClasses = () => {
		return `liwe3-button ${(btnSize ? 'liwe3-button-' + btnSize : '')} ${(btnStyle ? 'liwe3-button-' + btnStyle : '')}`;
	};

	return (
		<button onClick={onClick} className={prepCssClasses()} {...extraAttrs} {...rest}>{label}</button>
	);
};

export default Button;