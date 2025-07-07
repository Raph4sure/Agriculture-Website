import style from "./../styles/ui/footer.module.scss";
import Navlinking from "./Navlinking";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <main>
            <section>
                <aside>
                    <Navlinking/>
                </aside>
                <aside>hi</aside>
            </section>
            <section>
                <aside></aside>
                <aside></aside>
            </section>
        </main>
    );
}

export default Footer;
