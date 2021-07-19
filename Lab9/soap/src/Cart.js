import React from 'react'
import Pic from './homepic.JPG'

const Cart = () => {

    return (
        <div className="container">
            <h4 className="center">About</h4>
            <img src={Pic} width="300" height="300" class="center"></img>

            <form method="get" action="https://www.bestbuy.ca/en-ca">
                <button type="submit">Pay Now</button>
            </form>

        </div>
    )
}

export default Cart