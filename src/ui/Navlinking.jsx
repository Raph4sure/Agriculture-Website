import { NavLink } from "react-router-dom";

import style from "./../styles/ui/navlinking.module.scss";

function Navlinking({ to, className, children, ...others }) {
    return (
        <NavLink to={to} className={`${style.navlink1} ${className}`} {...others}>
            {children}
        </NavLink>
    );
}

export default Navlinking;
