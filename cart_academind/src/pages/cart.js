import React from 'react';
import MainNavigation from '../components/MainNavigation';
import './cart.css'
import numeral from 'numeral'

const Cart = () => {
    return(
        <div>
            <MainNavigation />
            
            <main className="cart">
                <p>No Item in the Cart!</p>
                <ul>
                    <li>
                    <div>
                        <strong>Daging Sapi</strong> - {'Rp.'+numeral(55000).format('Rp,0.00')}
                    </div>
                    <div>
                        <button

                        >
                        Remove from Cart
                        </button>
                    </div>
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default Cart