import React, {useState, useMemo} from "react";
import Button from "@liwe/react-button";

export type MenuItemType = {
    action: string;
    label: string;
    target?: "_blank" | "_self" | "_parent" | "_top" | "";
};

interface DropdownButtonProps extends React.ComponentPropsWithoutRef<"div"> {
    label: string;
    items: MenuItemType[];
    itemTemplate?: React.ReactElement;
};

interface DropdownMenuProps {
    items: DropdownButtonProps["items"];
    expanded: boolean;
    singleElement?: React.ReactElement;
};

interface MenuItemProps extends MenuItemType, React.ComponentPropsWithoutRef<"li"> {
    key: number;
    singleElement?: React.ReactElement;
}

/**
 * MenuItem component
 * This component will be used to render each item.
 * It will receive the action, label and target as props.
 * It will optionally receive the singleElement prop, which will be used to render the item.
 * If no singleElement is passed, the default template will be used.
 * It will accepts all the props that can be passed to a li element.
 * 
 * @param props : MenuItemProps
 * @returns React.ReactElement
 */
const MenuItem = ( props: MenuItemProps)  => {
    const { action, label, target, key, singleElement, ...rest } = props;
    const Template = singleElement ? singleElement : <a href={action} target={target}>{label}</a>;
    return (
        <li key={key} {...rest}>
            {Template}
        </li>
    )
}

/**
 * DropdownMenu component
 * This component will be used to render the list of items.
 * It will receive the items and the expanded state as props.
 * It will optionally receive the singleElement prop, which will be used to render the items.
 * If no singleElement is passed, the default template will be used.
 * 
 * @param props : DropdownMenuProps
 * @returns React.ReactElement
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
 * @returns React.ReactElement
 */
export default function DropdownButton(props: DropdownButtonProps) {
    const { label, items, itemTemplate, ...rest } = props;
    // if a class name is passed, it will be added to the default class name
    const className = `liwe3-dropdown-button ${rest.className || ""}`;
    delete rest?.className;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((prev) => !prev);
    return (
        <div className={className} {...rest}>
            <Button label={label} size={'xl'} onClick={toggle} attrs={{'aria-expanded': isOpen ? "true" : "false"}}/>
            <DropdownMenu items={items} expanded={isOpen}/>
        </div>
    );
};