import React, { useState } from "react";
import Slider from "react-slick";
import offer1 from "../../../assets/images/offer-1.jpg";
import offer2 from "../../../assets/images/offer-2.jpg";
import offer3 from "../../../assets/images/offer-3.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderImage(props) {
    return (
        <div className="p-2">
            <Link to={props.url}>
                <div>
                    <img alt={"ok"} className="w-100" src={props.image} />
                </div>
            </Link>
        </div>
    );
}

const Slider1 = (props) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [data, setData] = useState([
        { image: offer1, url: "/offer" },
        { image: offer2, url: "/offer" },
        { image: offer3, url: "/offer" },
        { image: offer1, url: "/offer" },
        { image: offer2, url: "/offer" },
        { image: offer3, url: "/offer" },
        { image: offer1, url: "/offer" },
        { image: offer2, url: "/offer" },
        { image: offer3, url: "/offer" }
    ]);

    return (
        <section>
            <div className="container-fluid text-center">
                <div
                    className="text-center mx-auto"
                    style={{ maxWidth: "98%" }}
                >
                    <Slider {...settings}>
                        {data.map((item, index) => {
                            return (
                                item.image && (
                                    <div className="w-100" key={index}>
                                        <SliderImage
                                            url={item.url}
                                            image={item.image}
                                        />
                                    </div>
                                )
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Slider1;
