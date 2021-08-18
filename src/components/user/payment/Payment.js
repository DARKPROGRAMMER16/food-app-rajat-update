import React from "react";
import UserApp from "../common/UserApp";
import visa from "../../../assets/images/5.png";
import paytm from "../../../assets/images/9.png";
import gpay from "../../../assets/images/10.png";
import { Row, Col, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/all";

const Payment = () => {
    return (
        <UserApp>
            <Row>
                <Col md={8}>
                    <div className='p-5"'>
                        <h5>WALLETS</h5>
                        <div className="d-flex" style={{ marginRight: "60px" }}>
                            <Card className="p-2 m-1" style={{ width: "50%" }}>
                                <div className="d-flex justify-content-between">
                                    <div className="w-100">Google pay</div>
                                    <div>
                                        <img
                                            src={gpay}
                                            alt="gpay"
                                            height={20}
                                            width={50}
                                        />
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-2 m-1" style={{ width: "50%" }}>
                                <div className="d-flex justify-content-between">
                                    <div className="w-100">PayTm</div>
                                    <div>
                                        <img
                                            src={paytm}
                                            alt="paytm"
                                            height={20}
                                            width={50}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="py-3">
                        <h5>Saved Payment methods </h5>
                        <div>
                            <SavedCard />
                            <SavedCard active />
                            <SavedCard />
                            <SavedCard />
                        </div>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </UserApp>
    );
};

export default Payment;

const SavedCard = (props) => {
    return (
        <div className="d-flex py-1">
            <div
                className={
                    props.active
                        ? "bg-white border border-warning rounded-2 px-3 w-100"
                        : "bg-white border rounded-2 px-3 w-100"
                }
            >
                <div className="d-flex justify-content-between">
                    <div className="align-self-center my-auto">
                        <i className="fa fa-circle fa-sm text-warning mx-1" />
                        <img src={visa} alt="visa" height={20} width={50} />
                    </div>
                    <div className="text-right p-1">
                        <div>********1234</div>
                        <div className="secondary-text">Visa card</div>
                    </div>
                </div>
            </div>
            <div className="align-self-center m-2 text-warning">
                <FaTrash />
            </div>
        </div>
    );
};
