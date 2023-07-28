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
 * Component props as reference (see Input component for more details):
 *  label: string;
 *  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'block';
 *  mode?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
 *  status?: 'error' | 'success' | 'warning' | 'info';
 *  message?: string;
 *  attrs?: {};
 *  buttons: TypeInputGroupButtons;
 * 
 * Single item (TypeInputGroupButton) in buttons list props as reference (see Button component for more details):
 *  label: string;
 *  size?: 'xs' | 'sm' | 'md' | 'ld' | 'xl' | 'block';
 *  mode?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
 *  attrs?: {};
 *  position: 'prepend' | 'append';
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
            return button?.position === 'append' ? <Button key={index} {...button} size={'xs'} /> : null;
        });
    }, [buttons]);

    const buttonsPrepend = useMemo(() => {
        return buttons?.map((button, index) => {
            return button?.position === 'prepend' ? <Button key={index} {...button} size={'xs'} /> : null;
        });
    }, [buttons]);


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (inputProps.onChange) {
            inputProps.onChange(e);
        }
        const prepend = (buttons?.[0]?.position === 'prepend' ? buttons?.[0]?.label : '') + (buttons?.[1]?.position === 'prepend' ? buttons?.[1]?.label : '');
        const append = (buttons?.[0]?.position === 'append' ? buttons?.[0]?.label : '') + (buttons?.[1]?.position === 'append' ? buttons?.[1]?.label : '');
        const value =  prepend + e.target.value + append;
        setInputValue(value); 
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