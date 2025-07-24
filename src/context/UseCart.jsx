import { useContext } from "react";
import CartContext from "./CartContext";

function useCart() {
    const context = useContext(CartContext);
    if (context === undefined)
        throw new Error(
            "Cart content was used outside the CartContext provider"
        );
    return context;
}

export default useCart;
