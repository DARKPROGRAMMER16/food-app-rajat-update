import React from "react";
import clock from "../../../assets/images/3.png";
import check from "../../../assets/images/1.png";
import { Modal, Card, Button, Form } from "react-bootstrap";
import SchedulePickup from "./SchedulePickup";
import {
    CHECKOUT_STAGE_CHECKOUT,
    CHECKOUT_STAGE_DELIVERY
} from "../../../store/checkout/checkoutTypes";
import { useDispatch } from "react-redux";
import { checkoutStage } from "../../../store/checkout/checkoutAction";
import paycard from "../../../assets/images/2.png";

const DeliveryTime = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const dispatch = useDispatch();

    if (props.stage === CHECKOUT_STAGE_DELIVERY) {
        return (
            <>
                <Card className="d-flex flex-row p-3 border-warning  shadow-sm">
                    <div className="flex-fill d-flex">
                        <div className="flex-column">
                            <img
                                alt={"clock"}
                                src={clock}
                                width="24px"
                                className="m-1"
                            />
                        </div>
                        <div className="flex-fill">
                            <div className="d-inline">
                                <h4 className="fw-bold text-warning ">
                                    ASAP{" "}
                                    <img
                                        alt={"check"}
                                        src={check}
                                        width="25px"
                                    />{" "}
                                </h4>
                            </div>
                            <p className="pt-2 text-sm">
                                Your Order will be ready in 45 minutes after
                                order is accepted by the restaurant
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex-column text-right"
                        style={{ minWidth: "140px" }}
                    >
                        <p
                            className="text-danger"
                            onClick={() => setModalShow(true)}
                            style={{ cursor: "pointer" }}
                        >
                            <b>Schedule for later</b>
                        </p>
                        <button
                            className="btn btn-warning px-4 mt-3 float-end"
                            onClick={() => {
                                dispatch(
                                    checkoutStage(CHECKOUT_STAGE_CHECKOUT)
                                );
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </Card>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    } else {
        return (
            <Card className="border-warning my-4 p-3 shadow-sm bg-light">
                <div className="flex-fill d-flex">
                    <div className="flex-column  disabled">
                        <img
                            alt={"clock"}
                            src={clock}
                            width="24px"
                            className="m-1"
                        />
                    </div>
                    <div className="flex-fill  disabled">
                        <div className="d-inline">
                            <h4 className="fw-bold text-warning ">
                                {" "}
                                Delivery Time{" "}
                                <img
                                    alt={"check"}
                                    src={check}
                                    width="25px"
                                />{" "}
                            </h4>
                        </div>
                        <div>
                            <p className="pt-2 text-sm">
                                Your Order will be ready in 45 minutes after
                                order is accepted by the restaurant
                            </p>
                        </div>
                    </div>
                    <div className="flex-column">
                        <button
                            className="btn btn-warning"
                            onClick={() =>
                                dispatch(checkoutStage(CHECKOUT_STAGE_DELIVERY))
                            }
                        >
                            Change
                        </button>
                    </div>
                </div>
            </Card>
        );
        return (
            <Card className="d-flex flex-row p-3 border-warning  shadow-sm disabled">
                <div className="flex-fill d-flex">
                    <div className="flex-column">
                        <img
                            alt={"clock"}
                            src={clock}
                            width="24px"
                            className="m-1"
                        />
                    </div>
                    <div className="flex-fill">
                        <div className="d-inline">
                            <h4 className="fw-bold text-warning ">
                                Delivery Time{" "}
                                <img alt={"check"} src={check} width="25px" />{" "}
                            </h4>
                        </div>
                        <p className="pt-2 text-sm">
                            Your Order will be ready in 45 minutes after order
                            is accepted by the restaurant
                        </p>
                    </div>
                </div>
                <div
                    className="flex-column text-right"
                    style={{ minWidth: "140px" }}
                >
                    <p className="text-danger">
                        <b>Schedule for later</b>
                    </p>
                    {/*<button
                    className="btn btn-warning px-4 mt-3 float-end"
                    onClick={() => setModalShow(true)}
                >
                    Continue
                </button>*/}
                </div>
            </Card>
        );
    }
};

export default DeliveryTime;

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <SchedulePickup {...props} />
            </Modal.Body>
        </Modal>
    );
}
