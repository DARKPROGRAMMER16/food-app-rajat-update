import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CartItems from "./CartItems";

const Cartdetail = () => {
    return (
        <>
        
            <Card className="shadow p-4 m-5 rounded">
                <Row>
                    <Col> <h5>Cart</h5></Col>
                    <Col>
                    <Button variant="outline-success sm">Add Items</Button>
                    </Col>
                </Row>
                
                

                <CartItems />
                <CartItems />
                <Row className="my-2">
                    <Col md={8}>
                        <strong>Subtotal</strong>
                        <div
                            className="text-size"
                            style={{ color: "#aeadad", fontSize: "12px" }}
                        >
                            Extra Charges may apply
                        </div>
                    </Col>

                    <Col md={3}>
                        <strong> $1.49 </strong>
                    </Col>
                </Row>
               
            </Card>
        </>
    );
};

export default Cartdetail;
