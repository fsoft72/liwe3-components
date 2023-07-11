import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;

	required?: boolean;
	placeholder?: string;
	sx?: Record<string, any>;

	validChars?: string;

	onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
	onBlur?: ( event: React.FocusEvent<HTMLInputElement> ) => void;
	onFocus?: ( event: React.FocusEvent<HTMLInputElement> ) => void;
	onKeyDown?: ( event: React.KeyboardEvent<HTMLInputElement> ) => void;
	onKeyUp?: ( event: React.KeyboardEvent<HTMLInputElement> ) => void;
	onInput?: ( event: React.FormEvent<HTMLInputElement> ) => void;
	onReset?: ( event: React.FormEvent<HTMLInputElement> ) => void;
}

const TextInput = ( props: TextInputProps ) => {
	const re = props.validChars ? new RegExp( `[${ props.validChars }]` ) : null;

	const onkeydown = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
		if ( event.key.length > 1 ) {
			//console.log( "=== EVT: ", event.key );
			props.onKeyDown?.( event );
			return;
		}

		if ( re ) {
			if ( !re.test( event.key ) ) {
				event.preventDefault();
				return;
			}
		}

		props.onKeyDown?.( event );
	};

	return (
		<div className="liwe3-text-input">
			<input
				type="text"
				name={props.name}
				required={props.required}
				style={props.sx ?? {}}
				onChange={props.onChange}
				onBlur={props.onBlur}
				onFocus={props.onFocus}
				onKeyDown={onkeydown}
				onKeyUp={props.onKeyUp}
				onInput={props.onInput}
				onReset={props.onReset}
			/>
			<label htmlFor={props.name} className="label">{props.placeholder}</label>
			<div className="underline"></div>
		</div>

	);
};

export default TextInput;