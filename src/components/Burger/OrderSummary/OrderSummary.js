import React from 'react'
import Aux from '../../../hoc/Aux1'
import Button from '../../UI/Button/Button'

export default function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return  <li key={igKey}> 
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                    </li>
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: $ {props.price.toFixed(2)}</strong></p>
            <p>Continue to CheckOut?</p>
            <Button btnType='Danger' clicked={props.purchasableCancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchasableContinue}>CONTINUE</Button>
        </Aux>
    )
}
