import React, { Component } from 'react'
import classes from '../BurgerInGredient/BurgerInGredient.module.css'
import PropTypes from 'prop-types';


export default class BurgerInGredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bred-bottom'):
                ingredient = <div className={classes.BredBottom}></div>
                break;
            case ('bred-top'):
                ingredient = (
                    <div className={classes.BredTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                )
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>
                break;

            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>
                break;

            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>
                break;

            case ('salad'):
                ingredient = <div className={classes.Salad}></div>
                break;
            default: ingredient = null;
        }

        return ingredient;
    }


}

BurgerInGredient.propTypes = {
    type: PropTypes.string.isRequired
}

