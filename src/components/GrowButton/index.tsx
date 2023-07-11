import React from 'react';

export interface GrowButtonProps {
	label: string;

	onClick?: () => void;
}

const GrowButton = ( { label, onClick }: GrowButtonProps ) => {
	return (
		<button onClick={onClick} className="liwe3-grow-button.box">
			<span className="circle" aria-hidden="true">
				<span className="icon arrow"></span>
			</span>
			<span className="text">{label}</span>
		</button >
	);
};

export default GrowButton;