import React from "react";
import App from "../common";
import ProfileHeader from "../user/common/ProfileHeader";
import CartSidebar from "../cart/Sidebar";
import { Row, Col, Card } from "react-bootstrap";
import check from "../../assets/images/1.png";
import paycard from "../../assets/images/2.png";
import clock from "../../assets/images/3.png";
import point from "../../assets/images/20.png";

const CheckoutConfirm = () => {
    return (
        <App>
            <ProfileHeader />
            <section className="bg-white">
                <div className="container">
                    <Row>
                        <Col md={8} className="py-5">
                            <Card className="d-flex flex-row p-2 border-warning">
                                <div
                                    className="w-100"
                                    style={{ opacity: "0.6" }}
                                >
                                    <img src={clock} width="25px" />
                                    <span className="fw-bold text-warning">
                                        {" "}
                                        Delivery Time{" "}
                                    </span>
                                    <img src={check} width="25px" alt={"img"} />
                                    <p className="p-2 text-sm">
                                        Your Order will be ready in 45 minutes
                                        after order is accepted by the
                                        restaurant
                                    </p>
                                </div>
                                <div>
                                    <i className="text-warning p-3 fw-bold">
                                        Change
                                    </i>
                                </div>
                            </Card>
                            <Card className="py-4 border-warning my-5 px-5">
                                <div>
                                    <img
                                        src={paycard}
                                        width="25px"
                                        alt={"img"}
                                    />
                                    <span className="mx-2 fw-bold text-warning">
                                        Ckeckout
                                    </span>
                                </div>
                                <div className="py-2 px-4">
                                    <h6>Your Pickup</h6>
                                    <div>
                                        <i className="far fa-clock p-2"> </i> 14
                                        Mon 2021, 10 Am
                                    </div>
                                    <div>
                                        <i className="fa fa-map-marker p-2" />
                                        Restaurant Address, 123 5t, Banglore{" "}
                                    </div>
                                    <div className="text-success ">
                                        <i className="fas fa-location-arrow p-2" />
                                        Get direction
                                    </div>
                                </div>
                                <div className="px-4">
                                    <h6>Your Orders</h6>
                                    <div className="d-flex justify-content-between p-1 secondary-text">
                                        <div>Food and Beverage</div>
                                        <div>$4.69</div>
                                    </div>
                                    <div className="d-flex justify-content-between p-1 secondary-text">
                                        <div>GST</div>
                                        <div>$0.65</div>
                                    </div>
                                    <div className="d-flex justify-content-between p-1">
                                        <div>Total</div>
                                        <div>$5.12</div>
                                    </div>
                                </div>
                                <Card className="px-4 pt-4 pb-2 mx-4 my-4">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <strong> Use Reward Points </strong>
                                        </div>
                                        <div>
                                            <p style={{ color: "#ff971c" }}>
                                                5 Points{" "}
                                                <span>
                                                    <img
                                                        src={point}
                                                        width="30px"
                                                    />
                                                </span>{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-nowrap">
                                        <button className="btn btn-warning mx-1">
                                            <strong>$ 2.15</strong>
                                            <p>
                                                1000 Points
                                                <span>
                                                    <img
                                                        alt={"img"}
                                                        src={point}
                                                        width="30px"
                                                    />
                                                </span>
                                            </p>
                                        </button>
                                        <button className="btn btn-outline-warning mx-1">
                                            <strong>$ 2.15</strong>
                                            <p>
                                                1000 Points
                                                <span>
                                                    <img
                                                        src={point}
                                                        width="30px"
                                                    />
                                                </span>
                                            </p>
                                        </button>
                                        <button className="btn btn-outline-warning mx-1">
                                            <strong>$ 2.15</strong>
                                            <p>
                                                1000 Points
                                                <span>
                                                    <img
                                                        src={point}
                                                        width="30px"
                                                    />
                                                </span>
                                            </p>
                                        </button>
                                        <button className="btn btn-outline-warning mx-1">
                                            <strong>$ 2.15</strong>
                                            <p>
                                                1000 Points
                                                <span>
                                                    <img
                                                        src={point}
                                                        width="30px"
                                                    />
                                                </span>
                                            </p>
                                        </button>
                                    </div>
                                    <div className="d-flex justify-content-between px-2 pt-4">
                                        <div>
                                            <p className="secondary-text">
                                                Don't use Points{" "}
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                {" "}
                                                <i
                                                    className="fa fa-circle-o text-success"
                                                    aria-hidden="true"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                                <select
                                    className="bg-light border-light d-block mx-4 mt-0 p-2"
                                    id="Select1"
                                >
                                    <option>Add Voucher</option>
                                    <option>Voucher1</option>
                                    <option>Voucher2</option>
                                </select>
                                <button className="btn btn-warning rounded-0 m-4">
                                    CONFIRM CHECKOUT
                                </button>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <div className="py-5">
                                <CartSidebar
                                    showCheckout={false}
                                    showAddMore={true}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </App>
    );
};

export default CheckoutConfirm;
