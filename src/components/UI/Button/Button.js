import React from 'react'
import Aux from '../../../hoc/Aux1';
import classes from './Button.module.css'


export default function Button(props) {
    return (
        <Aux>
            <button 
                className={[classes.Button, classes[props.btnType]].join(' ')} 
                onClick={props.clicked}>{props.children}
            </button>
        </Aux>
    )
}
