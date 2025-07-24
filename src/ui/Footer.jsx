import clsx from "clsx";
import style from "./../styles/ui/footer.module.scss";
import Navlinking from "./Navlinking";
// import { NavLink } from "react-router-dom";
// import Buttons from "./Buttons";

function Footer() {
    return (
        <article className={style.article1}>
            <main className={style.main}>
                <section className={style.main_section}>
                    <aside className={style.main_section_aside}>
                        <nav className={style.main_section_aside_nav}>
                            <Navlinking
                                to={"/"}
                                className={"style.main_section_aside_navlink"}
                            >
                                Farmers
                            </Navlinking>
                            <div
                                className={style.main_section_aside_nav_div}
                            ></div>
                        </nav>
                        <nav className={style.main_section_aside_nav}>
                            <Navlinking
                                to={"/"}
                                className={"style.main_section_aside_navlink"}
                            >
                                organic
                            </Navlinking>
                            <div
                                className={style.main_section_aside_nav_div}
                            ></div>
                        </nav>
                        <nav className={style.main_section_aside_nav}>
                            <Navlinking
                                to={"/"}
                                className={"style.main_section_aside_navlink"}
                            >
                                food
                            </Navlinking>
                            <div
                                className={style.main_section_aside_nav_div}
                            ></div>
                        </nav>
                        <nav className={style.main_section_aside_nav}>
                            <Navlinking
                                to={"/"}
                                className={"style.main_section_aside_navlink"}
                            >
                                product
                            </Navlinking>
                            {/* <div className={style.main_section_aside_nav_div}></div> */}
                        </nav>
                    </aside>
                </section>
                <section className={style.main_section2}>
                    <aside className={style.main_section2_aside}>
                        <div
                            className={clsx(
                                // style.main_section2_aside_div,
                                style.section2_div
                            )}
                        >
                            <img
                                src="Icon (8).png"
                                alt=""
                                className={style.main_section2_aside_div_img}
                            />
                        </div>
                        <p className={style.main_section2_aside_p}>
                            + 1(212) 255-511
                        </p>
                    </aside>
                    <aside className={style.main_section2_aside2}>
                        <div
                            className={clsx(
                                // style.main_section2_aside2_div,
                                style.section2_div
                            )}
                        >
                            <img
                                src="Icon (9).png"
                                alt=""
                                className={style.main_section2_aside2_div_img}
                            />
                        </div>
                        <p className={style.main_section2_aside2_p}>
                            noreply@pbminfotech.com
                        </p>
                    </aside>
                </section>
            </main>
            <main className={style.main2}>
                <section className={style.main2_section}>
                    <aside className={style.main2_section_aside}>
                        <img src="/logo.png" alt="logo" />
                    </aside>
                    <aside className={style.main2_section_aside2}>
                        <p className={style.main2_section_aside2_p}>
                            Mauris sed molestie sem. Sed vel vestibulum elit,
                            non accumsan risus. In vitae sapien viverra est Duo
                            ei ullum inani senserit.
                        </p>
                    </aside>
                    <aside className={style.main2_section_aside3}>
                        <Navlinking>
                            <img src="/facebook.png" alt="" />
                        </Navlinking>
                        <Navlinking>
                            <img src="/x.png" alt="" />
                        </Navlinking>
                        <Navlinking>
                            <img src="/linkedin.png" alt="" />
                        </Navlinking>
                        <Navlinking>
                            <img src="/instagram.png" alt="" />
                        </Navlinking>
                    </aside>
                </section>
                <section className={style.main2_section2}>
                    <aside className={style.main2_section2_aside}>
                        <p className={style.main2_section2_aside_p}>
                            Professional & modern, a theme designed to help your
                            business stand out from the rest.
                        </p>
                    </aside>
                    <aside className={style.main2_section2_aside2}>
                        <nav
                            className={clsx(
                                style.main2_section2_aside2_nav,
                                style.combine
                            )}
                        >
                            <h3 className={style.h3_combine}>Useful Link</h3>
                            <Navlinking to={"/company"}>Company</Navlinking>
                            <Navlinking to={"/about"}>About</Navlinking>
                            <Navlinking to={"/contact"}>Contact</Navlinking>
                        </nav>
                        <div
                            className={clsx(
                                style.main2_section2_aside2_div,
                                style.combine
                            )}
                        >
                            <h3 className={style.h3_combine}>Working Time</h3>

                            <p>Mon - Fri: 9.00am - 5.00pm</p>
                            <p>Saturday: 10.00am - 6.00pm</p>
                            <p>Sunday Closed</p>
                        </div>
                        <div
                            className={clsx(
                                style.main2_section2_aside2_div2,
                                style.combine
                            )}
                        >
                            <h3 className={style.h3_combine}>Our Address</h3>
                            <p>Old Westbury 256, New York</p>
                            <p>11201, United States</p>
                        </div>
                        <hr className={style.main2_section2_aside2_hr} />
                        <div className={style.main2_section2_aside2_div3}>
                            <Navlinking
                                className={
                                    style.main2_section2_aside2_div3_link
                                }
                            >
                                Terms & Conditions | Privacy Policy
                            </Navlinking>
                            <Navlinking
                                className={
                                    style.main2_section2_aside2_div3_link2
                                }
                            >
                                Copyright © 2024
                                <span
                                    className={
                                        style.main2_section2_aside2_div3_link2_span
                                    }
                                >
                                    Agrimo
                                </span>
                                , All Rights Reserved.
                            </Navlinking>
                        </div>
                    </aside>
                </section>
            </main>
            {/* <Buttons>
                <p>Get In Touch</p> <img src="/arrow.png" alt="Arrow" />
            </Buttons> */}
        </article>
    );
}

export default Footer;
