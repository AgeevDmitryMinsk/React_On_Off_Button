import React from 'react';
import classes from "./ButtonsOnOff.module.css";

type ButtonsOnOffTypeProps = {
    ButtonPressed: (name:boolean) => void;
    name: boolean
}

export const ButtonsOnOff = (props: ButtonsOnOffTypeProps) => {
    let onButtonPressed = props.name ? classes.active : ''
    let offButtonPressed = !props.name ? classes.active : ''

    return (
        <div>
            <button className={onButtonPressed} onClick={()=>props.ButtonPressed(true)}>On</button>
            <button className={offButtonPressed} onClick={()=>props.ButtonPressed(false)}>Off</button>

        </div>
    );
};

