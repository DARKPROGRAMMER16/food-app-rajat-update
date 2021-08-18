import React, { useState } from "react";
import { Card } from "react-bootstrap";
import paycard from "../../../assets/images/2.png";
import Accordion from "../../common/extra/accordion/Accordion";
import NetBanking from "./section/NetBanking";
import UPI from "./section/UPI";
import DebitCards from "./section/DebitCards";
import Cash from "./section/Cash";
import CardAtPickup from "./section/CardAtPickup";
import CallMeBack from "./section/CallMeBack";
import {
    CHECKOUT_STAGE_DELIVERY,
    CHECKOUT_STAGE_PAYMENT
} from "../../../store/checkout/checkoutTypes";
import { Redirect } from "react-router-dom";

const Payment = (props) => {
    const [orderSuccess, setOrderSuccess] = useState(false);
    if (orderSuccess) {
        return <Redirect to="/success" />;
    }
    const paymentProps = {
        setOrderSuccess: setOrderSuccess
    };

    if (props.stage !== CHECKOUT_STAGE_PAYMENT) {
        return (
            <Card className="border-warning my-4 p-3 shadow-sm bg-light disabled">
                <div className="flex-fill d-flex">
                    <div className="flex-column">
                        <img
                            alt={"paycard"}
                            src={paycard}
                            width="24px"
                            className="m-1"
                        />
                    </div>
                    <div className="flex-fill">
                        <div className="d-inline">
                            <h4 className="fw-bold text-warning ">Payment </h4>
                        </div>
                    </div>
                </div>
            </Card>
        );
    } else
        return (
            <Card className="border-warning my-4 p-3 shadow-sm bg-light">
                <div className="flex-fill d-flex">
                    <div className="flex-column">
                        <img
                            alt={"paycard"}
                            src={paycard}
                            width="24px"
                            className="m-1"
                        />
                    </div>
                    <div className="flex-fill">
                        <div className="d-inline">
                            <h4 className="fw-bold text-warning ">Payment </h4>
                        </div>
                        <div className="py-2">
                            <Accordion title="NetBanking">
                                <NetBanking {...paymentProps} />
                            </Accordion>
                            <Accordion title="UPI">
                                <UPI {...paymentProps} />
                            </Accordion>
                            <Accordion title="Debit, Credit, ATM Cards">
                                <DebitCards {...paymentProps} />
                            </Accordion>
                            <Accordion title="Cash">
                                <Cash {...paymentProps} />
                            </Accordion>
                            <Accordion title="Card at Pickup Center">
                                <CardAtPickup {...paymentProps} />
                            </Accordion>
                            <Accordion title="Call me back and i will tell you my card details">
                                <CallMeBack {...paymentProps} />
                            </Accordion>
                        </div>
                    </div>
                </div>
            </Card>
        );
};

export default Payment;
