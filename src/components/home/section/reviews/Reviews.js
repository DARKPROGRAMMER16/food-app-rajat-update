import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styled";
import Person from "../../../../assets/images/profile_image.png";

const Reviews = (props) => {
    const { children } = props;

    var settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    };
    return (
        <div className="bg-light h-100">
            <div className="container py-5">
                <h3>What they say about us</h3>

                <div className="sliders py-5">
                    <Slider {...settings}>
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Reviews;

const Review = () => {
    return (
        <div className="text-center">
            <div className="text-center">
                <img
                    className="img-responsive rounded-circle align-self-center mx-auto bg-white"
                    src={Person}
                    alt="Person"
                    height={150}
                />
            </div>
            <h4>Mukesh Singh</h4>
            <h6>Delhi, India</h6>
            <p className="px-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam et laboriosam, officia quia sint vero. Accusantium
                aliquam assumenda at commodi debitis delectus dolor dolorem
                error est expedita explicabo facere, fugiat ipsam iure
                laudantium magni mollitia necessitatibus nesciunt non odit
                quaerat qui quidem quis quo quod quos ratione rem saepe sequi
                similique ullam ut voluptatem voluptatibus. Accusamus at
                blanditiis earum fugit ipsum nemo rem veritatis. Aliquam
                asperiores blanditiis debitis dicta, dignissimos dolores est et,
                fuga in incidunt ipsam laborum magni, modi neque perferendis qui
                rem rerum similique tempora ullam velit voluptatem.
            </p>
        </div>
    );
};
