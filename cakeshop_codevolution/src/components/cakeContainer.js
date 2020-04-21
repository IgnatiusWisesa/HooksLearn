import React from 'react'
import { connect } from 'react-redux'

import { buyCake } from './../redux'

const CakeContainer = (props) => {
    return (
        <div>
            Number of Cakes - {props.numOfCakes}
            <div>
                <button onClick={props.buyCake}>Buy Cake</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (CakeContainer)
