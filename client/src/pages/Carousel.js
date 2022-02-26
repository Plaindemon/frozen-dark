import React from 'react';
import { Carousel } from 'react-bootstrap';
import  SkyImg  from "../assets/images//skyy.jpg";
import landImg from "../assets/images/land.png";
import safariImg from "../assets/images/safari.png";

import "./contentFeed.css";


function CarouselEl() {
    return (
        <Carousel>
            <Carousel.Item>
                {/* images can be changed from default later to view Carousel of feed */}
                <img
                    className="d-block w-100"
                    src={SkyImg}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h3>“Me, give up? No way!” —</h3>
                    <p> Ash</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={landImg}
                    alt="Second slide"
                />

                <Carousel.Caption className="carousel-caption">
                    <h3>“A Caterpie may change into a Butterfree, but the heart that beats inside remains the same.” — </h3>
                    <p>Brock</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={safariImg}
                    alt="Third slide"
                />

                <Carousel.Caption className="carousel-caption">
                    <h3>“Man has plenty to learn from nature and from Pokémon.” —</h3>
                    <p>Mr. Briney</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselEl;