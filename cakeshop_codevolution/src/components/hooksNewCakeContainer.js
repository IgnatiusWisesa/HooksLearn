import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksNewCakeContainer() {
    const cake = useSelector(state => state.cake.numOfCakes)
    const [ numOfCakes, setNumOfCakes ] = useState()
    const dispatch = useDispatch()
    return (
        <div>
            <h4>Num of Cakes - {cake}</h4>
            <input type="text" value={numOfCakes} onChange={(e)=>setNumOfCakes(e.target.value)} />
            <button onClick={()=> dispatch(buyCake(numOfCakes))}>Buy {numOfCakes} Cake</button>
        </div>
    )
}

export default HooksNewCakeContainer
