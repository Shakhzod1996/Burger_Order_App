import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'

export default function Toolbar() {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
                <div className={classes.Logo}>
                    <Logo/> 
                </div>
            <nav className={classes.DesktopOn}>
                <NavigationItems/>
            </nav>
        </header>
    )
}
