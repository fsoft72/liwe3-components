import React from 'react';
export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
	label: string;
	//size?: 'xs' | 'sm' | 'md' | 'ld' | 'xl' | 'block';
	mode?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
    status?: 'error' | 'success' | 'warning' | 'info';
    message?: string;
	attrs?: {};
}

const Input = ( props: InputProps ) => {
	const { label, size, mode, status, message, attrs, ...rest } = props;	
	const prepCssClasses = () => {
        const res= { input: '', status: '' };
		//res.input = `liwe3-input ${(size ? 'liwe3-input-' + size : '')} ${(mode ? 'liwe3-input-' + mode : '')} ${status}`;
		res.input = `liwe3-form-input ${(mode ? 'liwe3-bg-' + mode : '')} ${status}`;
		res.status = `liwe3-form-hint liwe3-txt-${(status ? status : '')} ${(status ? 'show' : '')}`;
        return res;
	};
    let cssClasses = prepCssClasses();

	return (
        <div className="liwe3-input-container">
            <label className="liwe3-input-label">{label}</label>
            <input 
                className={cssClasses.input} 
                {...attrs} 
                {...rest}
            />
            <div className={cssClasses.status}>{message}</div>
        </div>
	);
};

export default Input;