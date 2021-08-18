import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styled";
import Person from "../../../../assets/images/profile_image.png";
import pizzaImage from "../../../../assets/images/14.png";
import kitchenImage from "../../../../assets/images/kitchen.png";

const Updates = (props) => {
    return (
        <div className="bg-white h-100 py-5">
            <img src={kitchenImage} alt="kitchen image" width="100%" />
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img
                            src={pizzaImage}
                            className="py-5"
                            alt="pizza"
                            width="100%"
                        />
                    </div>
                    <div className="col-md-7 my-auto">
                        <div className="text-center h-100">
                            <h3 className="py-4">
                                Signup for{" "}
                                <span className="text-orange"> 10%</span> off
                                your first book!
                            </h3>
                            <div className="d-flex">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control flex-fill"
                                />
                                <button className="btn btn-primary flex-column">
                                    Get&nbsp;Discount
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Updates;

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
