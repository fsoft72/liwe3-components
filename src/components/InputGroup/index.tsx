import React from 'react';
import Input, { InputProps } from '@liwe/react-input';
import Button, { ButtonProps } from '@liwe/react-button';

export interface TypeInputGroupButton extends ButtonProps {
    position: 'prepend' | 'append';
    action: 'text' | 'button' | 'submit' | 'reset' | 'link' | 'icon';
};

type TypeInputGroupButtons = [TypeInputGroupButton, TypeInputGroupButton?];
export interface InputGroupProps extends InputProps {
    buttons?: TypeInputGroupButtons;
}

const InputGroup = (props: InputGroupProps) => {
    const { buttons, ...inputProps } = props;
    return (
        <div className="liwe3-input-group">
            <div className="liwe3-input-group-prepend">
                {buttons?.map((button, index) => {
                    return button?.position === 'prepend' ? <Button key={index} {...button} size={'xs'} /> : null;
                })}
            </div>
            <Input {...inputProps} />
            <div className="liwe3-input-group-append">
                {buttons?.map((button, index) => {
                    return button?.position === 'append' ? <Button key={index} {...button} size={'xs'} /> : null;
                })}
            </div>
        </div>
    );
}

export default InputGroup;