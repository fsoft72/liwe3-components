import React, {useState} from "react";
import Button from "@liwe/react-button";

export type MenuItemType = {
    label: string;
    val?: string | number;
    target?: "_blank" | "_self" | "_parent" | "_top" | "";
};

export interface DropdownButtonProps extends React.ComponentPropsWithoutRef<"div"> {
    label: string;
    items: MenuItemType[];
    itemTemplate?: React.FC<MenuItemProps>;
};

interface PrivateDropdownButtonProps extends DropdownButtonProps {
    size?: 'xs' | 'sm' | 'md' | 'ld' | 'xl' | 'block';
    mode?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';  
};

interface DropdownMenuProps {
    items: DropdownButtonProps["items"];
    expanded: boolean;
    singleElement?: React.FC<MenuItemProps>;
};

export interface MenuItemProps extends MenuItemType, React.ComponentPropsWithoutRef<"li"> {
    key: number;
    singleElement?: React.FC<MenuItemProps>;
}

const defaultValuesMenuItem: MenuItemType = {
    label: '',
    val: '#',
};

/**
 * MenuItem component
 * This component will be used to render each item.
 * It will receive the action, label and target as props.
 * It will optionally receive the singleElement prop, which will be used to render the item.
 * If no singleElement is passed, the default template will be used.
 * It will accepts all the props that can be passed to a li element.
 * 
 * @param props : MenuItemProps
 * @returns React.ReactNode
 */
const MenuItem = ( props: MenuItemProps)  => {
    const defaultValues = {...defaultValuesMenuItem, ...props};
    const { label, val, target, key, ...rest } = defaultValues;
    const url = val?.toString();
    if(props.singleElement) 
        return <props.singleElement 
            label={label} 
            val={val} 
            target={target} 
            key={key} 
            {...rest} 
        />
    return (
        <li key={key} {...rest}>
            <a href={url} target={target}>{label}</a>
        </li>
    );
}

/**
 * DropdownMenu component
 * This component will be used to render the list of items.
 * It will receive the items and the expanded state as props.
 * It will optionally receive the singleElement prop, which will be used to render the items.
 * If no singleElement is passed, the default template will be used.
 * 
 * @param props : DropdownMenuProps
 * @returns React.ReactNode
 */
const DropdownMenu = (props:DropdownMenuProps) => {
    return (
        <ul className={`liwe3-dropdown-menu ${props.expanded ? "show" : ""}`}>
            {props.items.map((item, index) => (
                <MenuItem singleElement={props.singleElement} key={index} {...item} />
            ))}
        </ul>
    )
};

/**
 * DropdownButton component
 * Main component that will be exported wrapping DropdownMenu and Button components.
 * It will receive the label and items as props and will pass them to the child components.
 * It will optionally also receive the itemTemplate as a prop, which will be used to render the items.
 * If no itemTemplate is passed, the default template will be used.
 * It will accepts all the props that can be passed to a div element.
 * 
 * @param props : DropdownButtonProps
 * @returns React.ReactNode
 */
export default function DropdownButton(props: PrivateDropdownButtonProps) {
    const { label, items, itemTemplate, size, mode, ...rest } = props;
    // if a class name is passed, it will be added to the default class name
    const className = `liwe3-dropdown-button ${rest.className || ""}`;
    delete rest?.className;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((prev) => !prev);
    return (
        <div className={className} {...rest}>
            <Button label={label} size={size} mode={mode} onClick={toggle} attrs={{'aria-expanded': isOpen ? "true" : "false"}}/>
            <DropdownMenu 
                items={items} 
                singleElement={itemTemplate} 
                expanded={isOpen}/>
        </div>
    );
};