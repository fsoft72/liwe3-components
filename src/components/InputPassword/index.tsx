import React, { useState } from 'react';
import {InputProps} from '@liwe/react-input';
import InputGroup, {InputGroupProps} from '@liwe/react-input-group';
import MkIcon from '../../icons/Eye';

type ReservedProps = 'buttons' 
type InputPasswordPropsType = Omit<InputGroupProps, ReservedProps> & {};
export interface InputPasswordProps extends InputPasswordPropsType {};

const filterRegExp: string = '[a-zA-Z0-9._%+-@]';
const myIcon = MkIcon({w:15 , h:15});
console.log(myIcon);


const InputPassword = (props: InputPasswordProps) => {
    const [show, setShow] = useState(false);
    const { filter, ...inputProps } = props;
    const defaultFilter: string = filter || filterRegExp;
    return (
        <InputGroup
            {...inputProps}
            filter = {defaultFilter} 
            buttons = {[
                {
                    position: 'append',
                    label: myIcon,
                    onClick: () => setShow(!show)
                }
            ]}
        />
    );
}