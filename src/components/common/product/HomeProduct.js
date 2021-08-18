import React from "react";
import productImage from "../../../assets/images/food-3.jpg";

const HomeProduct = (props) => {
    return (
        <div className="row">
            <div className="col-6">
                <div className="product-img bg-orange d-flex ">
                    <img
                        src={productImage}
                        alt="img"
                        width="100%"
                        className="flex-fill"
                    />
                    <p className="m-0 flex-fill">120 cal</p>
                </div>
            </div>
            <div className="col-6 p-0 ">
                <div className="py-1">
                    <h5>Round Role</h5>
                    <div className="d-flex pb-1">
                        <div className="d-fill">110 </div>
                        <div className="d-fill">15:25 min</div>
                    </div>
                    <div>
                        <i className="fa fa-minus p-1" />
                        <span className="p-1">1</span>
                        <i className="fa fa-plus p-1" />
                    </div>
                    <div className="pt-2">
                        <button className="btn btn-warning btn-sm w-50">
                            Add to card
                        </button>
                        <button className="btn btn-sm w-50">Pre Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;
