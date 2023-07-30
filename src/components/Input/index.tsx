import React, { useRef, forwardRef } from 'react';

type TypeInputProps = Omit<React.ComponentPropsWithRef<'input'>, 'size'> & {
	label: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'block';
	mode?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
    status?: 'error' | 'success' | 'warning' | 'info';
    message?: string;
	attrs?: {};
}

export interface InputProps extends TypeInputProps {};

const sizeMap = {
    xs: 'liwe3-col2',
    sm: 'liwe3-col4',
    md: 'liwe3-col6',
    lg: 'liwe3-col8',
    xl: 'liwe3-col10',
    block: 'liwe3-col12',
};

/**
 * Input component
 * This is a basic input component adding some feauters to the deafult one. 
 * This component has styling and sizing options based on the main and internal css files (liwe3-styles.css / liwe3-styles.min.css / styles.css) 
 * and a basic status managment.
 * 
 * @param props: InputProps
 * @param ref: React.Ref<HTMLInputElement>
 * @returns React.FC
 */
const Input = forwardRef(( props: InputProps, ref: React.Ref<HTMLInputElement>) => {
	const { label, size, mode, status, message, attrs, ...rest } = props;	
	const prepCssClasses = () => {
        const res= { input: '', status: '', container: '' };
        res.container = `liwe3-input-container liwe3-row`;
		res.input = `liwe3-form-input ${(mode ? 'liwe3-bg-' + mode : '')} ${(status ? status : '')} ${sizeMap[size ? size : 'block']}`;
		res.status = `liwe3-form-hint liwe3-txt-${(status ? status : '')} ${(status ? 'show' : '')}`;
        return res;
	};
    let cssClasses = prepCssClasses();
	return (
        <div className={cssClasses.container}>
            <label className="liwe3-input-label">{label}</label>
            <input 
                className={cssClasses.input} 
                ref = {ref}
                {...attrs} 
                {...rest}
            />
            <div className={cssClasses.status}>{message}</div>
        </div>
	);
});

export default Input;