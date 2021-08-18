import React from "react";
import App from "../common";
import { Row, Col, Card } from "react-bootstrap";
import ProfileHeader from "../user/ProfileDetals/ProfileHeader";
import Cartdetail from "../cart/Cartdetail";
import PaymentMethod from "./section/PaymentMethod";
import CartSidebar from "../cart/Sidebar";

const CheckOut = () => {
    return (
        <App>
            <ProfileHeader />
            <section className="bg-white">
                <div className="container">
                    <Row>
                        <Col md={8}>
                            <PaymentMethod />
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

export default CheckOut;
