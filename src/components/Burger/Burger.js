import React from 'react'
import classes from './Burger.module.css';
import BurgerInGredient from './BurgerInGredient/BurgerInGredient';

export default function Burger(props) {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerInGredient key={igKey+i} type={igKey}/>
            })
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start addingt Ingredients</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerInGredient type='bred-top'/>
            {transformedIngredients}
            <BurgerInGredient type='bred-bottom'/>

        </div>
    )
}
