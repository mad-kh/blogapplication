import React from "react";
import "./Header.css";
import { Carousel } from "react-bootstrap";
export default function Header() {
    return (
        <div className="header ">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 imgStyle"
                        src="https://nassimahdindar.fr/wp-content/uploads/2019/08/blogging.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "black" }}>Blog</h3>
                        <h1 style={{ color: "black" }}>TABA3'NI</h1>
                        <p style={{ color: "black" }}>Create your own World</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 imgStyle"
                        src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/68f655c880d7557696e88a2c/pexels-photo-698857.jpeg"
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{ color: "black" }}>Blog</h3>
                        <h1 style={{ color: "black" }}>TABA3'NI</h1>
                        <p style={{ color: "black" }}>Create your own World</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 imgStyle"
                        src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/01eb3abe0b2150d4ae922434/tree-pot-decoration-table-living-room_1339-7378.jpg?version="
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "black" }}>Blog</h3>
                        <h1 style={{ color: "black" }}>TABA3'NI</h1>
                        <p style={{ color: "black" }}>Create your own World</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 imgStyle"
                        src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/80d3ee0f09025149a3a22ef1/close-up-flower-decoration-tabletop-modern-kitchen_23-2148238623.jpg?version="
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "black" }}>Blog</h3>
                        <h1 style={{ color: "black" }}>TABA3'NI</h1>
                        <p style={{ color: "black" }}>Create your own World</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 imgStyle"
                        src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/cb0e383b34b055abb231c283/plane-passing-by-sun-cloudy-day_1286-143.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "black" }}>Blog</h3>
                        <h1 style={{ color: "black" }}>TABA3'NI</h1>
                        <p style={{ color: "black" }}>Create your own World</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 imgStyle"
                        src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/05aff8492e425b27862a0912/pexelsphoto1372971.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "black" }}>Blog</h3>
                        <h1 style={{ color: "black" }}>TABA3'NI</h1>
                        <p style={{ color: "black" }}>Create your own World</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
