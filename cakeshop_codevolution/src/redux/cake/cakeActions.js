import { BUY_CAKE } from './cakeTypes'

export const buyCake = (numberOfCakes = 1) => {
    return(
        {
            type: BUY_CAKE,
            payload: numberOfCakes
        }
    )
}