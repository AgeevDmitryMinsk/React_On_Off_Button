import React from 'react';
import classes from "./LampCSS.module.css";

type LampPropsType = {
    pressed : boolean
}

export const Lamp = (props:LampPropsType) => {

    return (
        <>
            {props.pressed&&<div className={`${classes.lamp} ${classes.green}`}></div>}
            {!props.pressed&&<div className={`${classes.lamp} ${classes.red}`}></div>}
        </>

    )
        ;
};

