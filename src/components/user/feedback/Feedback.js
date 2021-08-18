import React from "react";
import RatingDemo from "../../common/RatingDemo";
import { Row, Col } from "react-bootstrap";
import feedbackimg from "../../../assets/images/13.png";
import { LinkContainer } from "react-router-bootstrap";
import App from "../../common";

const Feedback = () => {
    return (
        <App>
            <Row className="p-5 mx-3">
                <Col md={2}></Col>
                <Col md={8}>
                    <Row>
                        <Col sm={12} md={6}>
                            <div>
                                <div className="py-3">
                                    <h4>Quality of Food</h4>
                                    <RatingDemo color="#ffcd39" />
                                </div>
                                <div className="py-3">
                                    <h4>Overall tasts</h4>
                                    <RatingDemo />
                                </div>
                                <div className="py-3">
                                    <h4>Rate your cook</h4>
                                    <RatingDemo />
                                </div>
                                <div className="py-3">
                                    <h4>Order Time</h4>
                                    <RatingDemo />
                                </div>
                                <div className="py-3">
                                    <h4>Service Quality</h4>
                                    <RatingDemo />
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className="py-3">
                            <div>
                                <h1 className="fw-bold">
                                    Give your valuable feedback !
                                </h1>
                                <div className="text-center pt-5">
                                    <img src={feedbackimg} width="80%" />
                                    <br />
                                    <button
                                        type="button"
                                        className="btn btn-warning py-2 px-5 mx-1 my-4 btn-lg"
                                    >
                                        Send Feedback
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={2}></Col>
            </Row>
        </App>
    );
};

export default Feedback;
