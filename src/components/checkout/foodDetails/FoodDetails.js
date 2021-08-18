import React from "react";
import { Row, Col } from "react-bootstrap";
import App from "../../common";

const FoodDetails = () => {
    return (
        <App>
            <Row className="py-5 mx-5">
                <Col md={4}></Col>
                <Col md={5}>
                    <i className="fa fa-times fa-lg text-warning" />{" "}
                    <b className="px-2" style={{ fontSize: "20px" }}>
                        Order #ADG12345
                    </b>
                    <div className="pt-4">
                        <i className="far fa-clock p-2"> </i> 14 Mon 2021, 10 Am
                    </div>
                    <div>
                        <i className="fa fa-map-marker p-2" />
                        Restaurant Address, 123 5t, Banglore{" "}
                    </div>
                    <div>
                        <i className="fas fa-check-circle text-success p-2" />
                        Order successfully picked up on Mon, 14, 2021, 10 Am
                    </div>
                    <hr />
                    <p className="secondary-text">2 ITEMS</p>
                    <div className="d-flex justify-content-between p-1">
                        <div>
                            <i
                                className="fa fa-stop"
                                style={{ color: "#ff971c" }}
                            />{" "}
                            Chicken Burger
                        </div>
                        <div className="secondary-text">$1.19</div>
                    </div>
                    <div className="d-flex justify-content-between p-1">
                        <div>
                            <i
                                className="fa fa-stop"
                                style={{ color: "#ff971c" }}
                            />{" "}
                            Biryani
                        </div>
                        <div className="secondary-text">$1.29</div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between p-1">
                        <div>Item Total</div>
                        <div className="fw-bold">$3.19</div>
                    </div>
                    <div className="d-flex justify-content-between p-1 text-warning">
                        <div>Reward Points Used</div>
                        <div className="fw-bold">-$1.65</div>
                    </div>
                    <div className="d-flex justify-content-between p-1 secondary-text">
                        <div>Texes</div>
                        <div className="fw-bold">-$1.65</div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between p-1">
                        <div className="secondary-text">
                            Paid via credit card
                        </div>
                        <div>
                            Bill Total <span className="fw-bold"> $4.12</span>{" "}
                        </div>
                    </div>
                </Col>
                <Col md={3}></Col>
            </Row>
        </App>
    );
};

export default FoodDetails;
