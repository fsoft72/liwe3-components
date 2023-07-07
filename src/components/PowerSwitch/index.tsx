import React from 'react';
import { useEffect, useState } from 'react';

const SWITCH_DEFAULT_HEIGHT = 195;

interface PowerSwitchProps {
    /** Form element name */
    name?: string;

    /** Whether the switch is checked or not */
    checked?: boolean;

    /** Custom styles */
    sx?: Record<string, any>;

    /** height of the switch in pixels, default is 195. If specified, the switch will be scaled to the specified height */
    height?: number;

    /** optional callback to be called when the switch is toggled */
    onChange?: ( checked: boolean ) => void;
}

const PowerSwitch = ( { name, checked = false, onChange, height, sx }: PowerSwitchProps ) => {
    const [ isChecked, setChecked ] = useState( checked );
    const [ ratio, setRatio ] = useState( 1 );

    useEffect( () => {
        // if the height is specified we need to scale the switch
        // by the ratio of the height to the default height
        if ( !height ) return;

        const ratio = height / SWITCH_DEFAULT_HEIGHT;

        setRatio( ratio );
    }, [] );

    const onChangeHandler = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setChecked( e.target.checked );
        onChange?.( e.target.checked );
    };

    return (
        <div style={{ ...sx, transform: `scale(${ ratio })` }}>
            <label className="liwe3-switch">
                <input name={name} checked={isChecked} type="checkbox" onChange={onChangeHandler} />
                <div className="button">
                    <div className="light"></div>
                    <div className="dots"></div>
                    <div className="characters"></div>
                    <div className="shine"></div>
                    <div className="shadow"></div>
                </div>
            </label>
        </div>
    );
};

export default PowerSwitch;