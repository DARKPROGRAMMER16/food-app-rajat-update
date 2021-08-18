import React from "react";
import App from "../common";
import { Row, Col, Card } from "react-bootstrap";
import ProfileHeader from "../user/common/ProfileHeader";
import CartSidebar from "../cart/Sidebar";
import check from "../../assets/images/1.png";
import paycard from "../../assets/images/2.png";
import clock from "../../assets/images/3.png";

const DeliveryTime = () => {
    return (
        <App>
            <ProfileHeader />
            <section className="bg-white">
                <div className="container">
                    <Row>
                        <Col md={8} className="py-5">
                            <Card className="d-flex flex-row  justify-content-between p-3 border-warning">
                                <div>
                                    <img src={clock} width="25px" />
                                    <span className="fw-bold text-warning">
                                        {" "}
                                        Delivery Time{" "}
                                    </span>
                                    <img src={check} width="25px" />
                                    <p className="p-2 text-sm">
                                        Your Order will be ready in 45 minutes
                                        after order is accepted by the
                                        restaurant
                                    </p>
                                </div>
                                <div>
                                    <strong className="text-danger">
                                        Shedule for Later
                                    </strong>
                                    <button className="btn btn-warning rounded-1 py-1 my-4">
                                        Continue
                                    </button>
                                </div>
                            </Card>
                            <Card className="bg-light p-2 my-4">
                                <div className="w-100">
                                    <img src={paycard} width="25px" />
                                    <span className="secondary-text mx-2">
                                        Checkout
                                    </span>
                                </div>
                            </Card>
                            <Card className="bg-light p-2 my-4">
                                <div className="w-100">
                                    <img src={paycard} width="25px" />
                                    <span className="secondary-text mx-2">
                                        Payment
                                    </span>
                                </div>
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

export default DeliveryTime;
