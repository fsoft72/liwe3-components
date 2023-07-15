import React from 'react';

interface RadioButtonProps {
    /** Radios button array */
    radios: RadioButtonModel[];

    /** Form element name */
    name: string;

    /** Radio button type: squared or rounded (rounded as default) */
    type?: "squared" | "rounded";

    /** Display radio buttones vertically or horizzontally (vertically as default)*/
    direction?: "row" | "column";

    /** Custom styles */
    sx?: Record<string, any>;

    /** optional callback to be called when radio button change status */
    onChange?: ( radio: string ) => {};
}

type RadioButtonModel = {
    /** Radio button label */
    label: string;

    /** if radio button is a required field */
    required?: boolean;

    /** Whether the radio button is checked or not */
    checked?: boolean;

    /** Radio button value */
    value?: string;
};

type RadioButtonModelInternal = RadioButtonModel & {
    prefix: string;
    index: number;
    name: string;
    handleChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void;
};

const Rounded = ( props: RadioButtonModelInternal ) => {
    const { prefix, index, name, label, value, handleChange } = props;
    return (
        <label className="label rounded" htmlFor={`${ prefix }_${ index }`}>
            <input
                className="radio-input"
                type="radio"
                key={index}
                value={value}
                name={name}
                id={`${ prefix }_${ index }`}
                onChange={handleChange}
            />
            <div className="radio-design rounded"></div>
            <div className="label-text">{label}</div>
        </label>
    );
};

const Squared = ( props: RadioButtonModelInternal ) => {
    const { prefix, index, name, label, value, handleChange } = props;
    return (
        <label className="label squared" htmlFor={`${ prefix }_${ index }`}>
            <input
                className="radio-input"
                type="radio"
                key={index}
                value={value}
                name={name}
                id={`${ prefix }_${ index }`}
                onChange={handleChange}
            />
            <div className="radio-design squared"></div>
            <div className="label-text">{label}</div>
        </label>
    );
};

const RadioButton = ( props: RadioButtonProps ) => {
    const { onChange, radios, direction = 'column' } = props;
    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( "=== e.target.checked", e.target.value );
        onChange?.( e.target.value );
    };
    let dir = `radio-input-wrapper ${ direction }`;
    const prefix = props.name;

    return (
        <div className={dir} style={props.sx}>
            {radios.map( ( radio, index ) => {
                return (
                    ( props.type === "squared" ) ?
                        <Squared
                            key={index}
                            index={index}
                            prefix={prefix}
                            name={props.name}
                            label={radio.label}
                            value={radio.value}
                            handleChange={handleChange}
                        />
                        :
                        <Rounded
                            key={index}
                            index={index}
                            prefix={prefix}
                            name={props.name}
                            label={radio.label}
                            value={radio.value}
                            handleChange={handleChange}
                        />
                );
            } )}
        </div>
    );
};

export default RadioButton;