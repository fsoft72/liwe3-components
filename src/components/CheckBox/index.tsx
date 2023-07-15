import React from "react";
import { useState } from "react";

interface CheckBoxProps {
    /** Form element name */
    name: string;

    /** checkbox label */
    label: string;

    /** if checkbox is a required field */
    required?: boolean;

    /** Whether the checkbox is checked or not */
    checked?: boolean;

    /** Custom styles */
    sx?: Record<string, any>;

    /** checkbox type: squared or rounded */
    type?: "squared" | "rounded";

    /** optional callback to be called when checkbox change status */
    onChange?: ( checked: boolean ) => {}
}

interface CheckBoxInternal extends CheckBoxProps {
    cbState: boolean;
    setCbState: ( cbState: boolean ) => void;
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}


const Rounded: React.FC<CheckBoxInternal> = (props) => {
    return (
        <label htmlFor={props.name} className="liwe3-container" style={props.sx ?? {}}>
            {props.label ? <span className="label">{props.label}</span> : null}
            <input 
                id={props.name}
                name={props.name}	
                type="checkbox" 
                checked={props.cbState}
                onChange={props.handleChange}
            />
            <div className="checkmark" />
        </label>
    );
}

const Squared = (props: CheckBoxInternal) => {
    return (
        <label className="liwe3-container" style={props.sx ?? {}}>
            {props.label ? <span className="label">{props.label}</span> : null}
            <input
                id={props.name}
                name={props.name}	
                type="checkbox" 
                checked={props.cbState}
                onChange={props.handleChange}
            />
            <svg viewBox="0 0 75 75">
                <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
            </svg>
        </label>
    );
}

const CheckBox = ( props: CheckBoxProps ) => {
    const {onChange} = props;
    const initialCbState = props.checked ?? false;
    const [cbState, setCbState] = useState(initialCbState);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCbState(e.target.checked);
        onChange?.(e.target.checked);
    }

    const CheckBoxComponent = props.type === "squared" ? Squared : Rounded;

    return (
        <CheckBoxComponent
            {...props}
            cbState={cbState}
            setCbState={setCbState}
            handleChange={handleChange}
        />
    );
};

export default CheckBox;