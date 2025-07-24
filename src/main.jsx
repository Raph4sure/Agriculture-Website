import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/signika";
import "@fontsource/roboto";
import App from "./App.jsx";
import CartContext from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CartContext>
            <App />
        </CartContext>
    </StrictMode>
);
