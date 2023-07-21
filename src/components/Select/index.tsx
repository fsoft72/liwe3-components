import React, { useState } from 'react';
import DropdownButton, { MenuItemProps, MenuItemType, DropdownButtonProps } from '@liwe/react-dropdown-button';

interface SelectProps extends DropdownButtonProps {
    name: string;
    value: string;
};

export type OptionItemType = MenuItemType & React.ComponentPropsWithoutRef<"li">;

/**
 * Select component.
 * This component will be used to render a select field.
 * It will receive the name, value, label, items and itemTemplate as props.
 * It will optionally receive the itemTemplate prop, which will be used to render each item.
 * If no itemTemplate is passed, the default template will be used.
 * It will accepts all the props that can be passed to a li element.
 * 
 * @param props : SelectProps
 * props = {
 *  name: string,
 *  value: string,
 *  label: string,
 *  items: OptionItemType[],
 *  itemTemplate?: React.FC<MenuItemProps>,
 * }
 * @returns React.ReactNode
 **/
export default function Select(props: SelectProps) {
    const { name, value, label, items, itemTemplate, ...rest } = props;
    const [selectedValue, setSelectedValue] = useState({value:props.value, label:props.label});

    // assign value to the hidden input and select label
    const assignValue = (item:MenuItemProps) => {
        const value = (item.val) ? item.val : '';
        const label = (item.label) ? item.label : '';
        setSelectedValue({value:value.toString(), label:label});
    };
    // add to options list the first option which will be the default selected option
    const defaultItem = {label: label, val: value} as OptionItemType;
    const itemsWithDefaults = [defaultItem, ...items];

    // default option item template
    const OptionTemplate = (item: MenuItemProps) => {
        return (
            <li onClick={()=>assignValue(item)}>
                <div className="liwe3-select-option">
                    <span>{item.label}</span>
                </div>
            </li>
        );
    };
    
    return (
        <div className='liwe3-select-container'>
            <input type="hidden" name={name} value={selectedValue.value} />
            <DropdownButton 
                label={selectedValue.label} 
                items={itemsWithDefaults} 
                itemTemplate={OptionTemplate} 
                className='liwe3-select-button' 
                size='block'
                {...rest} 
            />
        </div>
    )
}