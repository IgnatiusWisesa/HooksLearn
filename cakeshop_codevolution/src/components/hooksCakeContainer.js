import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector( state => state.cake.numOfCakes )
    const dispatch = useDispatch()
    return (
        <div>
            <h4>Number of Cakes (hooks): {numOfCakes}</h4>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
