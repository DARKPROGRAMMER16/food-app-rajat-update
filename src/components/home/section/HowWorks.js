import React from "react";
import Bg from "../../../assets/images/Bg.jpg";
import HomeProduct from "../../common/product/HomeProduct";

const HowWorks = (props) => {
    return (
        <div className="bg-light py-5">
            <div className="container">
                <h3>Our Menu</h3>
                <div className="row">
                    {Array(9)
                        .fill(1)
                        .map(() => {
                            return (
                                <div className="col-sm-6 col-md-4 p-0 ">
                                    <div
                                        className="bg-white m-2 p-0 shadow overflow-hidden"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <HomeProduct />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default HowWorks;
