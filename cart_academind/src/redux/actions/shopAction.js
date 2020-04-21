import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './../type'

export const addProductToCart = products => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: ADD_PRODUCT_TO_CART,
                payload: products
            })
        }, 200)
    }
}

export const removeProductFromCart = productId => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: REMOVE_PRODUCT_FROM_CART,
                payload: productId
            })
        }, 200)
    }
}