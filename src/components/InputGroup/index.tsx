import React, {forwardRef, useState, useMemo} from 'react';
import Input, { InputProps } from '@liwe/react-input';
import Button, { ButtonProps } from '@liwe/react-button';

export interface TypeInputGroupButton extends ButtonProps {
    position: 'prepend' | 'append';
};

type TypeInputGroupButtons = [TypeInputGroupButton, TypeInputGroupButton?];
export interface InputGroupProps extends InputProps {
    buttons?: TypeInputGroupButtons;
}

/**
 * InputGroup
 * This component make use of Input and Button components.
 * It will accept as main props the props of Input component and an array of buttons with their own props.
 * The buttons will be displayed before or after the input depending on the position property.
 * 
 * @param {InputGroupProps} props
 * @returns {React.FC}
 */
const InputGroup = forwardRef((props: InputGroupProps, ref: any) => {
    const { buttons, ...inputProps } = props;
    const { label, value, name } = inputProps;
    const [inputValue, setInputValue] = useState(value);
    inputProps.label = '';

    const buttonsAppend = useMemo(() => {
        return buttons?.map((button, index) => {
            return button?.position === 'append' ? <Button key={index} disabled={true} {...button} size={'xs'} /> : null;
        });
    }, [buttons]);

    const buttonsPrepend = useMemo(() => {
        return buttons?.map((button, index) => {
            return button?.position === 'prepend' ? <Button key={index} disabled={true} {...button} size={'xs'} /> : null;
        });
    }, [buttons]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const prepend = 
            (buttons?.[0]?.position === 'prepend' && typeof buttons?.[0].label === 'string' ? buttons?.[0]?.label : '') + 
            (buttons?.[1]?.position === 'prepend' && typeof buttons?.[1].label === 'string' ? buttons?.[1]?.label : '');
        const append = 
            (buttons?.[0]?.position === 'append' && typeof buttons?.[0].label === 'string' ? buttons?.[0]?.label : '') + 
            (buttons?.[1]?.position === 'append' && typeof buttons?.[1].label === 'string' ? buttons?.[1]?.label : '');
        const value =  prepend + e.target.value + append;
        setInputValue(value);
        inputProps.onChange && inputProps.onChange(value);
    };

    return (
        <div className="liwe3-input-group-container">
            <div className='liwe3-input-group-label'>{label}</div>
            <div className="liwe3-input-group">
                <div className="liwe3-input-group-prepend">
                    {buttonsPrepend}
                </div>
                <Input {...inputProps} ref={ref} onChange={handleOnChange} name={`__${name}`}/>
                <div className="liwe3-input-group-append">
                    {buttonsAppend}
                </div>
            </div>
            <input value={inputValue} name={name} type="hidden" />
        </div>
    );
});

export default InputGroup;