import React from 'react';
import MainNavigation from '../components/MainNavigation';
import './products.css'
import numeral from 'numeral'

const Products = () => {
    return(
        <div>
            <MainNavigation />
            
            <main className="products">
                <ul>
                    <li>
                    <div>
                        <strong>Ayam</strong> - {'Rp.'+numeral(45000).format('Rp,0.00')}
                    </div>
                    <div>
                        <button

                        >
                        Add to Cart
                        </button>
                        <button

                        >
                        Edit
                        </button>
                        <button

                        >
                        Delete
                        </button>
                    </div>
                    </li>
                </ul>
            </main>
            <button

            >
            Add Product
            </button>
        </div>
    )
}

export default Products