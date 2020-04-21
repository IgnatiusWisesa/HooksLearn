import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './../type'

const INITIAL_STATE = {
    products: [
        { id:1, nama:'ayam', harga:45000 },
        { id:2, nama:'sapi', harga:55000 },
        { id:3, nama:'tetelan', harga:32000 },
        { id:4, nama:'telor', harga:12000 },
    ],
    cart: []
}

export const shopReducer = ( state=INITIAL_STATE, {type, payload} ) => {
    let updatedCart;
    let updatedItemIndex;
    switch(type){
        case ADD_PRODUCT_TO_CART:
            updatedCart= [...state.cart]
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === payload.id
            )
            
            if(updatedItemIndex<0){
                updatedCart.push({ payload, quantity:1 })
            }else{
                const updatedItem = {...updatedCart[updatedItemIndex] }
                updatedItem.quantity++
                updatedCart[updatedItem] = updatedItem
            }
            return{ ...state, cart: updatedCart }
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart]
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === payload.id
            )
            
            const updatedItem = {
                ...updatedCart[updatedItemIndex]
            }
            updatedItem.quantity--

            if(updatedItem.quantity<=0){
                updatedCart.splice(updatedItemIndex,1)
            } else{
                updatedCart[updatedItemIndex] = updatedItem
            }
            return { ...state, cart: updatedCart }
        default:
            return state
    }
}