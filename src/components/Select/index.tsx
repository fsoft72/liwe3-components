import React, { useState } from 'react';
import DropdownButton, { MenuItemProps, MenuItemType, DropdownButtonProps } from '@liwe/react-dropdown-button';

interface SelectProps extends DropdownButtonProps {
    name: string;
    value: string;
};

export type OptionItemType = MenuItemType & React.ComponentPropsWithoutRef<"li">;

/**
 * Select component
 * This component will be used to render a select field.
 * It will receive the name, value, label, items and itemTemplate as props.
 * It will optionally receive the itemTemplate prop, which will be used to render each item.
 * If no itemTemplate is passed, the default template will be used.
 * It will accepts all the props that can be passed to a li element.
 * 
 * @param props : SelectProps
 * props = {
 * name: string,
 * value: string,
 * label: string,
 * items: OptionItemType[],
 * itemTemplate?: React.FC<MenuItemProps>,
 * }
 * @returns React.ReactNode
 **/
export default function Select(props: SelectProps) {
    const { name, value, label, items, itemTemplate, ...rest } = props;
    const [selectedValue, setSelectedValue] = useState(props.value);

    // assign value to the hidden input and select label
    const assignValue = (value:string | number | undefined) => {
        if(!value) value = '';
        setSelectedValue(value.toString());
    };
    // add to items list the first item, which will be the default selected item
    const defaultItem = {label: label, val: value} as OptionItemType;
    const itemsWithDefault = [defaultItem, ...items];

    // default option item template
    const OptionTemplate = (item: MenuItemProps) => {
        return (
            <li onClick={()=>assignValue(item.val)}>
                <div className="liwe3-select-option">
                    <span>{item.label}</span>
                </div>
            </li>
        );
    };
    
    return (
        <div className='liwe3-select-container'>
            <input type="hidden" name={name} value={selectedValue} />
            <DropdownButton 
                label={selectedValue} 
                items={itemsWithDefault} 
                itemTemplate={OptionTemplate} 
                className='liwe3-select-button' 
                size='md'
                mode='light'
                {...rest} 
            />
        </div>
    )
}