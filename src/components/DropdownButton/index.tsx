import React, {useState, useMemo} from "react";
/* Button component will be added to collection and it wil then imported from there */
import Button from "./Button";

export type MenuItemType = {
    action: string;
    label: string;
    target?: "_blank" | "_self" | "_parent" | "_top" | "";
};

interface DropdownButtonProps {
    label: string;
    items: MenuItemType[];
    itemTemplate?: React.ReactElement;
};

interface DropdownMenuProps {
    items: DropdownButtonProps["items"];
    dropdown: boolean;
    singleElement?: React.ReactElement;
};

interface MenuItemProps extends MenuItemType {
    key: number;
    singleElement?: React.ReactElement;
}

const MenuItem = ( props: MenuItemProps)  => {
    const { action, label, target, key, singleElement } = props;
    const Template = singleElement ? singleElement : <a href={action} target={target}>{label}</a>;
    return (
        <li key={key}>
            {Template}
        </li>
    )
}

const DropdownMenu = (props:DropdownMenuProps) => {
    return (
        <ul className={`liwe3-dropdown-menu ${props.dropdown ? "show" : ""}`}>
            {props.items.map((item, index) => (
                <MenuItem singleElement={props.singleElement} key={index} {...item} />
            ))}
        </ul>
    )
};

export default function DropdownButton(props: DropdownButtonProps) {
    const { label, items } = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((prev) => !prev);
    return (
        <div className="liwe3-dropdown-button">
            <Button label={label} onClick={toggle} extraAttrs={{'aria-expanded': isOpen ? "true" : "false"}}/>
            <DropdownMenu items={items} dropdown={isOpen}/>
        </div>
    );
};