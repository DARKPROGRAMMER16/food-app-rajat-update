import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bg from "../../../assets/images/Bg.jpg";

const PrimarySlider = (props) => {
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
        <>
            <div className="bg-light main-slider">
                <Slider {...settings}>
                    <Review button="offer" />
                    <Review />
                    <Review button="anu" />
                    <Review button="Savi" />
                    <Review button="amu" />
                </Slider>
            </div>
        </>
    );
};

export default PrimarySlider;
const Review = ({ button }) => {
    return (
        <div style={{ backgroundImage: Bg }} className=" py-3">
            {/* <div style={{ backgroundImage: Bg }} className=" py-5"> */}
            <div className="text-right  pr-5">
                <i className="fa fa-twitter-square m-1" />
                <i className="fa fa-instagram m-1" />
                <i className="fa fa-facebook-official m-1" />
                <i className="pb-1 ">
                    {" "}
                    <u>Find us </u>
                </i>
            </div>

            <div className="py-5 text-center my-2">
                <h1 className="text-capitalize">
                    <i>
                        {" "}
                        Natural and Fresh Food <br />
                        Deliver to your door step
                    </i>
                </h1>
                <p>Natural and Fresh Food Deliver to your doorstep</p>
                <button className="btn btn-primary">{button}</button>
            </div>
        </div>
    );
};

const Reword = () => {
    return (
        <>
            <h1 className="text-center text-capitalize">
                Get <span style={{ color: "coral" }}>Reword Points</span> for
                each order
            </h1>
        </>
    );
};
