import React, { useState } from "react";
import { BiRadioCircle, BiRadioCircleMarked, FaPlus } from "react-icons/all";
import american from "../../../../assets/images/4.png";
import visa from "../../../../assets/images/5.png";
import rupay from "../../../../assets/images/6.png";
import master from "../../../../assets/images/7.png";
import bhim from "../../../../assets/images/8.png";
import paytm from "../../../../assets/images/9.png";
import gpay from "../../../../assets/images/10.png";
import { Modal, Col, Row, Form } from "react-bootstrap";

const DebitCards = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <div>
                We Accept
                <img src={visa} alt="visa" height={20} width={50} />{" "}
                <img src={rupay} alt="rupay" height={20} width={50} />{" "}
                <img src={master} alt="master" height={20} width={50} />{" "}
                <img src={american} alt="american" height={20} width={50} />{" "}
            </div>
            <div
                className="my-4 p-3 bg-white border py-auto"
                onClick={() => setModalShow(true)}
            >
                <div className="d-flex my-auto">
                    <h5 className="flex-fill my-auto">Use New Card</h5>
                    <div className="flex-column  my-auto">
                        <FaPlus />
                    </div>
                </div>
            </div>

            <div className="cards">
                <div className="my-4 p-3 bg-white border py-auto">
                    <div className="d-flex my-auto">
                        <h5 className="flex-fill my-auto">
                            {" "}
                            <img
                                src={visa}
                                alt="visa"
                                height={20}
                                width={50}
                            />{" "}
                            ********1234
                        </h5>
                        <div className="flex-column  my-auto">
                            <BiRadioCircleMarked />
                        </div>
                    </div>
                </div>

                <div className="my-4 p-3 bg-white border py-auto">
                    <div className="d-flex my-auto">
                        <h5 className="flex-fill my-auto">
                            {" "}
                            <img
                                src={rupay}
                                alt="rupay"
                                height={20}
                                width={50}
                            />{" "}
                            ********6537
                        </h5>
                        <div className="flex-column  my-auto">
                            <BiRadioCircle />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button
                    className="btn btn-warning w-100 btn-lg"
                    onClick={() => {
                        props.setOrderSuccess(true);
                    }}
                >
                    Verify and Pay
                </button>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default DebitCards;

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Card
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddCard {...props} />
            </Modal.Body>
        </Modal>
    );
}

const AddCard = (props) => {
    const [check, setCheck] = useState(true);

    return (
        <div>
            <div>
                We Accept
                <img src={visa} alt="visa" height={20} width={50} />{" "}
                <img src={rupay} alt="rupay" height={20} width={50} />{" "}
                <img src={master} alt="master" height={20} width={50} />{" "}
                <img src={american} alt="american" height={20} width={50} />{" "}
            </div>
            <div className="py-3">
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="card_number">
                        <Form.Control type="number" placeholder="Card Number" />
                    </Form.Group>
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="expiry">
                                <Form.Control
                                    type="text"
                                    placeholder="Expiry"
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="cvv">
                                <Form.Control
                                    type="password"
                                    placeholder="CVV"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Check
                        className="mb-3"
                        type="checkbox"
                        checked={check}
                        onClick={() => setCheck(!check)}
                        id="checkbox"
                        label="Securely save this VPA for a faster checkout next time."
                    />
                </Form>
                <div>
                    <button
                        className="btn btn-warning w-100 btn-lg"
                        onClick={() => {
                            props.onHide();
                        }}
                    >
                        Verify and Pay
                    </button>
                </div>
            </div>
        </div>
    );
};
