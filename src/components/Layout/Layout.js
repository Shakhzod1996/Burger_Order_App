import React from 'react';
import Aux from '../../hoc/Aux1';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraiver from '../Navigation/Toolbar/SideDraiver/SideDraiver';


export default function Layout(props) {
    return (
        <Aux>
            <Toolbar/>
            <SideDraiver/>
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    )
}
