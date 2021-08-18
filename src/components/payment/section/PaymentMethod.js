import React from "react";
import { Row, Col, Card, Dropdown, Accordion } from "react-bootstrap";
import check from "../../../assets/images/1.png";
import paycard from "../../../assets/images/2.png";
import clock from "../../../assets/images/3.png";

const PaymentMethod = () => {
    return (
        <>
            <div className="py-5">
                <Card className="d-flex flex-row p-2 border-warning">
                    <div
                        className="w-100"
                        style={{ opacity: "1" /* opacity: "0.6" */ }}
                    >
                        <img src={clock} width="25px" />
                        <span className="fw-bold text-warning">
                            {" "}
                            Delivery Time{" "}
                        </span>
                        <img src={check} width="25px" />
                        <p className="p-2 text-sm">
                            Your Order will be ready in 45 minutes after order
                            is accepted by the restaurant
                        </p>
                    </div>
                    <div>
                        <i className="text-warning p-3 fw-bold">Change</i>
                    </div>
                </Card>

                <Card className="d-flex flex-row p-2 mt-5 border-warning">
                    <div
                        className="w-100"
                        style={{ opacity: "1" /* opacity: "0.6" */ }}
                    >
                        <img src={clock} width="25px" />
                        <span className="fw-bold text-warning"> Checkout </span>
                        <img src={check} width="25px" />
                        <p className="p-2 text-sm">Total amout to pay $1.52</p>
                    </div>
                    <div>
                        <i className="text-warning p-3 fw-bold">Change</i>
                    </div>
                </Card>

                <Card className="border-warning mt-5 p-2">
                    <div className="w-100 disabled">
                        <img src={paycard} width="25px" alt={"img"} />
                        <span className="fw-bold text-warning"> Payment</span>
                    </div>
                    <select
                        className="bg-light border-0 d-block m-3 p-2"
                        id="Select1"
                    >
                        <option>Netbanking</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <select
                        className="bg-light border-0 d-block  m-3 p-2"
                        id="Select1"
                    >
                        <option>UPI</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <select
                        className="bg-light border-0 d-block  m-3 p-2"
                        id="Select1"
                    >
                        <option>Debit, Credit, ATM Cards</option>
                        <option>
                            <div>we accept</div>
                        </option>
                    </select>
                    <select
                        className="bg-light border-0 d-block  m-3 p-2"
                        id="Select1"
                    >
                        <option>Cash</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <select
                        className="bg-light border-0 d-block  m-3 p-2"
                        id="Select1"
                    >
                        <option>Card at Pickup Counter</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <select
                        className="bg-light border-0 d-block  m-3 p-2"
                        id="Select1"
                    >
                        <option>
                            Call me back and i'll tell you my card details
                        </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </Card>
            </div>
        </>
    );
};

export default PaymentMethod;
