import React from "react";
import { Row, Col } from "react-bootstrap";

const CartItems = () => {
    return (
        <>
            <p className="text-size">By Feroz's Home meals</p>
            <h6 style={{ color: "#aeadad", fontSize: "12px" }}> 1 ITEM</h6>
            <Row>
                <Col>
                    <div className="text-size">
                        <i
                            className="fa fa-stop"
                            style={{ color: "#ff971c" }}
                        />{" "}
                        Chicken Burger
                    </div>
                    <div className="text-size">
                        Customize{" "}
                        <i
                            className="fas fa-greater-than"
                            style={{ color: "#ff971c" }}
                        />{" "}
                    </div>
                </Col>
                <Col>
                    <div className="border border-warning rounded text-center">
                        <i
                            className="fa fa-minus p-1"
                            style={{ color: "#aeadad" }}
                        />
                        <span className="p-1" style={{ color: "#ff971c" }}>
                            1
                        </span>
                        <i
                            className="fa fa-plus p-1"
                            style={{ color: "#ff971c" }}
                        />
                    </div>
                </Col>
                <Col>$1.49</Col>
            </Row>
        </>
    );
};

export default CartItems;
