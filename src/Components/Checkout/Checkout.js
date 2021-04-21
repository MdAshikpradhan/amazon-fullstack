import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout_ad" src="https://lh3.googleusercontent.com/proxy/-h7RamNyM7xKno8x1XiTPvZrVxP-ZRtbH6I3CRC6TBpNZASj71_c984CbJ1oY6EvfTvyzOXpVfd2TeyMss1CxP4Apq0p8VNkCKbnm7T5mQXVH8wqRQ2EOQJuAoCe8Ssl_9MTIXCufHSrzj6jOeN9HK8kNX1ttwa9JDaYauK59dDbmbGDEh2zEg" alt=""/>
                <div>
                    <h2 className="checkout_title">Your shopping Basket</h2>
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                </div>
            </div>
            <div className="checkout_right">
                {/* The subtotal will go here */}
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
