import React, { useState } from "react";
import App from "../common";
import { Row, Col } from "react-bootstrap";
import CartSidebar from "../cart/Sidebar";
import DeliveryTime from "./delivery";
import Checkout from "./checkout";
import Payment from "./payment";
import "./CheckoutPage.css";
import ProfileHeader from "../user/common/ProfileHeader";
import { useSelector } from "react-redux";

const CheckOutPage = () => {
    const [delivery, setDelivery] = useState("");
    const stage = useSelector((state) => state.checkout.stage);

    return (
        <App>
            <ProfileHeader />
            <section>
                <div className="container">
                    <Row className="py-5">
                        <Col md={8}>
                            <DeliveryTime stage={stage} />
                            <Checkout stage={stage} />
                            <Payment stage={stage} />
                        </Col>
                        <Col md={4}>
                            <div>
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

export default CheckOutPage;
