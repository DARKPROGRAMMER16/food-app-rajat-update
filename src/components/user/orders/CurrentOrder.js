import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import productImage from "../../../assets/images/food.jpg";
import { LinkContainer } from "react-router-bootstrap";

const CurrentOrder = () => {
    return (
        <>
            <div className="px-2">
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <img
                                            className="height:90%"
                                            src={productImage}
                                            alt="img"
                                            width="100%"
                                            className="flex-fill"
                                        />
                                        <p
                                            className="m-0 flex-fill p-1"
                                            style={{
                                                backgroundColor: "#ffc107"
                                            }}
                                        >
                                            120 cal
                                        </p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col className="pt-2">
                                <h6>Chicken Burger</h6>
                                <h6>$249</h6>
                                <p style={{ fontSize: 12, color: "#a0a0a0" }}>
                                    Indian, Beverage Siolim, Mapusa{" "}
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <p style={{ fontSize: 12 }}>
                            In kitchen Tus, July 6 2021 10:00 AM{" "}
                            <i
                                className="far fa-clock"
                                style={{ color: "#ff971c" }}
                            />{" "}
                            <i
                                className="fas fa-greater-than"
                                style={{ fontSize: 10, color: "#a0a0a0" }}
                            />
                            {/* <i className="fa fa-exclamation" style={{color: 'red'}}/>  */}
                        </p>
                    </Col>
                </Row>
                <Row className="p-3">
                    <Col md={6}>
                        <p>Chicken Burger with fries</p>
                        <button className="btn btn-warning rounded-1 btn-sm m-1">
                            Track order
                        </button>
                        <LinkContainer to='/feedbacks'>
                            <button className="btn btn-outline-warning rounded-1 btn-sm">
                                Feedback
                            </button>
                        </LinkContainer>
                    </Col>
                    <Col md={3}></Col>
                    <Col md={3}>
                        <p
                            style={{
                                fontSize: 12,
                                textAlign: "right"
                            }}
                        >
                            Total: $3.15
                        </p>
                    </Col>
                </Row>
                <hr />
            </div>
        </>
    );
};

export default CurrentOrder;
