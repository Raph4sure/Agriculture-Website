import { createContext, useState } from "react";
import products from "../others/Products";
// import products from "../others/Products";

function CartContext({ children }) {
    const maxDisplay = 4;

    const [startNo, setStartNo] = useState();

    const CartContext = createContext();

    const [cart, setCart] = useState();

    function addToCart(product) {
        setCart((previousCart) => [...previousCart, product]);
    }

    function NextButton() {
        if (startNo + maxDisplay < products.length)
            setStartNo(startNo + maxDisplay);
    }
    function PreviousButton() {
        if (startNo > 0) setStartNo(startNo - maxDisplay);
    }

    const display = products.slice(startNo, startNo + maxDisplay);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, NextButton, PreviousButton, display }}
        >
            {children}
        </CartContext.Provider>
    );
}



export default CartContext;
