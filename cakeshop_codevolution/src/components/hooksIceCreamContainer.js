import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {
    const iceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h4>Ice Cream (hooks): {iceCream}</h4>
            <button onClick={() => dispatch(buyIceCream())}>buy ice cream</button>
        </div>
    )
}

export default HooksIceCreamContainer
