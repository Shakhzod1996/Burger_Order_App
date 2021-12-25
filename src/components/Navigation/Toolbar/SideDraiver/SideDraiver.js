import React from 'react'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDraiver.module.css'

export default function SideDraiver(props) {
    return (
        <div className={classes.SideDraiver}>
            <div className={classes.Logo}>
            <Logo/>
            </div>

            <nav>
                <NavigationItems/>
            </nav>
        </div>
    )
}
