import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux1'


export default function Modal(props) {
    return (
        <Aux>
            <div className={props.show ? classes.Modal : classes.ModalHide}>
                {props.children}
            </div>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
        </Aux>

    )
}
