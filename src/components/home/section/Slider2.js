import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderImage(props) {
    return (
        <div className="p-2">
            <Link to={props.url}>
                <div>
                    <img
                        className="img-fluid"
                        src={props.image}
                        style={{ width:'15rem',height:'8rem', borderRadius: "20px" }}
                        alt={"img"}
                    />
                </div>
            </Link>
        </div>
    );
}

const Slider2 = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [data, setData] = useState([
        { image: "/assets/images/food/pizza1.jpg", url: "/food" },
        { image: "/assets/images/food/pizza2.jpg", url: "/food" },
        { image: "/assets/images/food/pizza3.jpg", url: "/food" },
        { image: "/assets/images/food/pizza4.jpg", url: "/food" },
        { image: "/assets/images/food/pizza1.jpg", url: "/food" },
        { image: "/assets/images/food/pizza2.jpg", url: "/food" },
        { image: "/assets/images/food/pizza3.jpg", url: "/food" },
        { image: "/assets/images/food/pizza4.jpg", url: "/food" },
        { image: "/assets/images/food/pizza1.jpg", url: "/food" },
        { image: "/assets/images/food/pizza2.jpg", url: "/food" },
        { image: "/assets/images/food/pizza3.jpg", url: "/food" },
        { image: "/assets/images/food/pizza4.jpg", url: "/food" },
        { image: "/assets/images/food/pizza1.jpg", url: "/food" },
        { image: "/assets/images/food/pizza2.jpg", url: "/food" },
        { image: "/assets/images/food/pizza3.jpg", url: "/food" },
        { image: "/assets/images/food/pizza4.jpg", url: "/food" }
    ]);

    return (
        <section className="bg-dark">
            <div className="container-fluid">
                <div className="container py-1">
                    <div className="py-1 text-white">
                        <h5>Recommended </h5>
                    </div>
                    <div className="px-5 p-md-0">
                        <Slider {...settings}>
                            {data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <SliderImage
                                            url={item.url}
                                            image={item.image}
                                        />
                                    </div>
                                );
                            })}
                        </Slider>
                        <div className="p-3"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider2;
