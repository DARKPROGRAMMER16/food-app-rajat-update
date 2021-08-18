import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import check from "../../../assets/images/1.png";
import App from "../../common";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
    return (
        <App>
            <Row className="py-5">
                <Col md={3}></Col>
                <Col md={6}>
                    {/*<div className="d-flex justify-content-end">
                        <i className="fa fa-times fa-3x secondary-text" />
                    </div>*/}
                    <div className="d-flex justify-content-center">
                        <i className="far fa-check-circle fa-9x text-success" />
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                        <h3>Your order is successfully placed</h3>
                    </div>
                    <div className="d-flex justify-content-center px-2 pt-2">
                        <p>
                            Check out "Trace Order" to see the status of your
                            order anytime
                        </p>
                    </div>
                    <Card className="bg-light px-3 pt-5 border-bottom-1 border-top-0 border-right-0 border-left-0">
                        <div className="d-flex justify-content-between ">
                            <div className="" style={{ width: "35%" }}>
                                <strong>Restaurant</strong>
                                <p>
                                    Restaurant address goes here, pincode,
                                    street, city, landmark
                                </p>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger my-1"
                                >
                                    CANCEL ORDER
                                </button>
                                <br />
                                <Link to={"/orders"}>
                                    <button
                                        type="button"
                                        className="btn btn-warning px-3  my-1"
                                    >
                                        {" "}
                                        TRACK ORDER{" "}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <p style={{ fontSize: "12px" }}>
                            You can cancel order within 30 minutes of placing
                            order or until restaurant accepts your order
                        </p>
                    </Card>
                </Col>
                <Col md={3}></Col>
            </Row>
        </App>
    );
};

export default OrderSuccess;
