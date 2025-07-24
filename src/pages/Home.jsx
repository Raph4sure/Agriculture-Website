// import clsx from "clsx";
import style from "./../styles/pages/home.module.scss";
import Navlinking from "./../ui/Navlinking";
import { NavLink } from "react-router-dom";
import Buttons from "./../ui/Buttons";
import clsx from "clsx";
import products from "../others/Products";
import useCart  from "../context/UseCart";

function Home() {
    return (
        <section className={style.section}>
            <Header />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </section>
    );
}

function Header() {
    return (
        <header className={style.header}>
            <img src="/logo.png" alt="logo" className={style.header_img} />
            <aside className={style.header_aside}>
                <nav className={style.header_aside_nav}>
                    <Navlinking
                        to={"/"}
                        className={style.header_aside_nav_link}
                    >
                        Home
                    </Navlinking>
                    <div className={style.header_aside_nav_div}></div>
                </nav>
                <nav className={style.header_aside_nav}>
                    <Navlinking
                        to={"/"}
                        className={style.header_aside_nav_link}
                    >
                        Pages
                    </Navlinking>
                    <div className={style.header_aside_nav_div}></div>
                </nav>
                <nav className={style.header_aside_nav}>
                    <Navlinking
                        to={"/"}
                        className={style.header_aside_nav_link}
                    >
                        Services
                    </Navlinking>
                    <div className={style.header_aside_nav_div}></div>
                </nav>
                <nav className={style.header_aside_nav}>
                    <Navlinking
                        to={"/"}
                        className={style.header_aside_nav_link}
                    >
                        Portfolio
                    </Navlinking>
                    <div className={style.header_aside_nav_div}></div>
                </nav>
                <nav className={style.header_aside_nav}>
                    <Navlinking
                        to={"/"}
                        className={style.header_aside_nav_link}
                    >
                        Blog
                    </Navlinking>
                    <div className={style.header_aside_nav_div}></div>
                </nav>
                <nav className={style.header_aside_nav}>
                    <Navlinking
                        to={"/"}
                        className={style.header_aside_nav_link}
                    >
                        Contact Us
                    </Navlinking>
                </nav>
            </aside>
            <aside className={style.header_aside2}>
                <div className={style.header_aside2_div}>
                    <img
                        src="/call.png"
                        alt=""
                        className={style.header_aside2_div_img}
                    />
                    <div className={style.header_aside2_div_div}>
                        <p className={style.header_aside2_div_div_p}>
                            Call us Now
                        </p>
                        <p className={style.header_aside2_div_div_p2}>
                            +1(212)255-511
                        </p>
                    </div>
                </div>
                <button className={style.header_aside2_button}>
                    <img src="/Link.png" alt="" />{" "}
                </button>
                <Buttons className={style.header_aside2_button1}>
                    <p>Get In Touch</p> <img src="/arrow.png" alt="Arrow" />
                </Buttons>
            </aside>
        </header>
    );
}

function FirstSection() {
    return (
        <article className={style.article}>
            <aside className={style.article_aside}>
                <main className={style.article_aside_main}>
                    <div className={style.article_aside_main_div}>
                        <div className={style.article_aside_main_div_div}>
                            Let’s Eat Healthier
                        </div>
                        <img
                            src="/stamp.png"
                            alt="stamp"
                            className={style.article_aside_main_div_img}
                        />
                    </div>
                    <p className={style.article_aside_main_p}>
                        Respect Nature,
                    </p>
                    <p className={style.article_aside_main_p2}>Gain Benefits</p>
                    <Buttons className={style.article_aside_main_button}>
                        <p>Contact Us</p>
                        <img src="/arrow.png" alt="Arrow" />
                    </Buttons>
                </main>
            </aside>
            <img
                src="/tomatoe.png"
                alt="tomatoe"
                className={style.article_img}
            />
        </article>
    );
}

function Info({ className, src, alt, p1, p2 }) {
    return (
        <aside className={style.aside}>
            <div
                className={clsx(
                    // style.main_section2_aside_div,
                    style.aside_div,
                    style.className
                )}
            >
                <img
                    src={src}
                    alt={alt}
                    className={clsx(
                        // style.main_section2_aside_div,
                        style.aside_img,
                        style.className
                    )}
                />
            </div>
            <div
                className={clsx(
                    // style.main_section2_aside_div,
                    style.aside_div2,
                    style.className
                )}
            >
                <p
                    className={clsx(
                        // style.main_section2_aside_div,
                        style.aside_div2_p,
                        style.className
                    )}
                >
                    {p1}
                </p>
                <p
                    className={clsx(
                        // style.main_section2_aside_div,
                        style.aside_div2_p1,
                        style.className
                    )}
                >
                    {p2}
                </p>
            </div>
        </aside>
    );
}

function SecondSection() {
    return (
        <main className={style.main}>
            <Info
                src={"/Icon1.png"}
                alt={"Icon"}
                p1={"member discount"}
                p2={"Back guarantee under 7 days"}
            />
            <Info
                src={"/Icon2.png"}
                alt={"Icon"}
                p1={"money return"}
                p2={"Support online 24 hours a day"}
            />
            <Info
                src={"/Icon3.png"}
                alt={"Icon"}
                p1={"Free Shipping"}
                p2={"Free shipping on all order"}
            />
            <Info
                src={"/Icon4.png"}
                alt={"Icon"}
                p1={"Online Support"}
                p2={"Online Support 24/7"}
            />
        </main>
    );
}

function Card({ product }) {
    const { addToCart } = useCart();
    return (
        <section className={style.card_section}>
            {/* <div> */}
            <img src={"/back.png"} alt="" className={style.card_section_img} />
            {/* </div> */}
            <div className={style.card_section_div}>
                <img
                    src={products.images}
                    alt=""
                    className={style.card_section_div_img2}
                />
                <img
                    src="/star.png"
                    alt=""
                    className={style.card_section_div_img3}
                />
                <p className={style.card_section_div_p}>{products.name}</p>
                <p className={style.card_section_div_p2}>{products.price}</p>
                <button
                    className={style.card_section_button}
                    onClick={addToCart(product)}
                >
                    <img src="/cart.png" alt="cart" />
                </button>
            </div>
        </section>
    );
}

function ThirdSection(products) {
    // const { NextButton, PreviousButton } = useCart();
    return (
        <main className={style.main2}>
            <aside className={style.main2_aside}>
                <div className={style.main2_aside_div}>
                    <img
                        src="/Icon5.png"
                        alt="icon5"
                        className={style.main2_aside_div_img}
                    />
                    <p>Customer Choice</p>
                </div>
            </aside>
            <aside className={style.main2_aside2}>
                <h1 className={style.main2_aside2_h1}>Check Our Products</h1>
                <div className={style.main2_aside2_div}>
                    <button
                        className={style.main2_aside2_div_button}
                        // onClick={PreviousButton}
                    >
                        <img src="/ButtonPrevious.png" alt="ButtonPrevious" />
                    </button>
                    <button
                        className={style.main2_aside2_div_button2}
                        // onClick={NextButton}
                    >
                        <img src="/ButtonNext.png" alt="ButtonNext" />
                    </button>
                </div>
            </aside>
            <aside className={style.main2_aside3}>
                {products.map((product) => (
                    <Card product={product} key={product.id} />
                ))}
            </aside>
        </main>
    );
}

// console.log(products[1])

export default Home;
