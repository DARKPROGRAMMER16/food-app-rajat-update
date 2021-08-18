import React, { useEffect } from "react";
import App from "../../common";
import Coupon from "./Coupon";
import { useDispatch, useSelector } from "react-redux";

const OfferPage = (props) => {
    let couponData = {
        code: "Food50",
        description:
            "Use code Food50 and get 50% off on your first Food order on Website and Mobile site. Maximum discount: 200"
    };
    const dispatch = useDispatch();
    //const coupons = useSelector((state) => state.coupon.data);
    const coupons = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    useEffect(() => {
        // dispatch();
    }, []);

    return (
        <App>
            <section className="breadcrumb-Food pt-5 pb-5 bg-dark position-relative text-center">
                <h1 className="text-white">Offers for you</h1>
                <h6 className="text-white-50">
                    Explore top deals and offers exclusively for you!
                </h6>
            </section>

            <section className="section pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="font-weight-bold mt-0 mb-3">
                                Available Coupons
                            </h4>
                        </div>
                        {coupons?.map((coupon, couponIdx) => {
                            return (
                                <div className="col-md-4" key={couponIdx}>
                                    <Coupon coupon={couponData} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="pt-5 row">
                        <div className="col-12">
                            <h4 className="font-weight-bold mt-0 mb-3">
                                Bank Offers
                            </h4>
                        </div>
                        <div className="col-md-6">
                            <div className="offer-card-horizontal border-0 shadow-sm card">
                                <div className="d-flex align-items-center no-gutters row">
                                    <div className="p-4 col-md-4 col-4">
                                        <img
                                            src="img/bank/1.png"
                                            alt
                                            className="card-img"
                                        />
                                    </div>
                                    <div className="col-md-8 col-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Get flat $.30 cashback using
                                                Amazon Pay
                                            </h5>
                                            <p className="card-text">
                                                Get flat $.30 cashback on orders
                                                above $.99 for 10 orders. No
                                                code required.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-info">
                                                    Other T&amp;Cs may apply
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="offer-card-horizontal border-0 shadow-sm card">
                                <div className="d-flex align-items-center no-gutters row">
                                    <div className="p-4 col-md-4 col-4">
                                        <img
                                            src="img/bank/1.png"
                                            alt
                                            className="card-img"
                                        />
                                    </div>
                                    <div className="col-md-8 col-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Get flat $.30 cashback using
                                                Osahan Pay
                                            </h5>
                                            <p className="card-text">
                                                Get flat $.30 cashback on orders
                                                above $.99 for 10 orders. No
                                                code required.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-info">
                                                    Other T&amp;Cs may apply
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </App>
    );
};
export default OfferPage;
