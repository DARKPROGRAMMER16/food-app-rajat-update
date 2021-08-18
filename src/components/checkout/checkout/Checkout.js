import React, { useState } from "react";
import clock from "../../../assets/images/3.png";
import check from "../../../assets/images/1.png";
import { Card, Form } from "react-bootstrap";
import paycard from "../../../assets/images/2.png";
import point from "../../../assets/images/20.png";
import { useDispatch, useSelector } from "react-redux";
import Reward from "../../user/rewards/Reward";
import {
    CHECKOUT_STAGE_CHECKOUT,
    CHECKOUT_STAGE_DELIVERY,
    CHECKOUT_STAGE_PAYMENT
} from "../../../store/checkout/checkoutTypes";
import { checkoutStage } from "../../../store/checkout/checkoutAction";

const Checkout = (props) => {
    let cartItems = useSelector((state) => state.cart.cartList.list);
    const cartTotal = Math.floor(
        cartItems?.reduce((pV, cV) => pV + cV.quantity * cV.price, 0)
    );
    const [tip, setTip] = useState(5);
    const [reward, setReward] = useState(0);
    const dispatch = useDispatch();

    if (props.stage === CHECKOUT_STAGE_DELIVERY) {
        return (
            <Card className="border-warning my-4 p-3 shadow-sm disabled">
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
                            <h4 className="fw-bold text-warning ">Checkout{" "} 
                            <img
                                        alt={"check"}
                                        src={check}
                                        width="25px"
                                    />
                            </h4>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
    if (props.stage === CHECKOUT_STAGE_PAYMENT) {
        return (
            <Card className="border-warning my-4 p-3 shadow-sm bg-light">
                <div className="flex-fill d-flex">
                    <div className="flex-column  disabled">
                        <img
                            alt={"paycard"}
                            src={paycard}
                            width="24px"
                            className="m-1"
                        />
                    </div>
                    <div className="flex-fill  disabled">
                        <div className="d-inline">
                            <h4 className="fw-bold text-warning ">Payment </h4>
                        </div>
                        <div>
                            <p className="pt-2 text-sm">
                                Total amount to pay $
                                {tip + cartTotal + cartTotal * 0.08}
                            </p>
                        </div>
                    </div>
                    <div className="flex-column">
                        <button
                            className="btn btn-warning"
                            onClick={() =>
                                dispatch(checkoutStage(CHECKOUT_STAGE_CHECKOUT))
                            }
                        >
                            Change
                        </button>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card className="border-warning my-4 p-3 shadow-sm">
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
                        <h4 className="fw-bold text-warning ">Checkout </h4>
                    </div>
                    <div>
                        <div className="py-2">
                            <h6>Your Pickup</h6>
                            <div>
                                <i className="far fa-clock p-2"> </i> 14 Mon
                                2021, 10 Am
                            </div>
                            <div>
                                <i className="fa fa-map-marker p-2" />
                                Restaurant Address, 123 5t, Banglore{" "}
                            </div>
                            <div className="text-success ">
                                <i className="fas fa-location-arrow p-2" />
                                Get direction
                            </div>
                        </div>
                        <div className="py-2">
                            <h6>Your Orders</h6>
                            <div className="d-flex justify-content-between p-1 secondary-text">
                                <div>Food and Beverage</div>
                                <div>${cartTotal}</div>
                            </div>
                            <div className="d-flex justify-content-between p-1 secondary-text">
                                <div>Tax</div>
                                <div>${cartTotal * 0.08}</div>
                            </div>
                            <div className="d-flex justify-content-between p-1 secondary-text">
                                <div>Tip</div>
                                <div>
                                    <Form>
                                        <Form.Check
                                            inline
                                            checked={tip === 0}
                                            onClick={() => setTip(0)}
                                            label="$0"
                                            name="tip"
                                            type="radio"
                                            id={`inline-radio-1`}
                                        />
                                        <Form.Check
                                            inline
                                            checked={tip === 5}
                                            onClick={() => setTip(5)}
                                            label="$5"
                                            name="tip"
                                            type="radio"
                                            id={`inline-radio-2`}
                                        />
                                        <Form.Check
                                            inline
                                            checked={tip === 10}
                                            onClick={() => setTip(10)}
                                            label="$10"
                                            name="tip"
                                            type="radio"
                                            id={`inline-radio-3`}
                                        />
                                        <Form.Check
                                            inline
                                            checked={tip === 15}
                                            onClick={() => setTip(15)}
                                            label="$15"
                                            name="tip"
                                            type="radio"
                                            id={`inline-radio-4`}
                                        />
                                        <Form.Check
                                            inline
                                            checked={tip === 20}
                                            onClick={() => setTip(20)}
                                            label="$20"
                                            name="tip"
                                            type="radio"
                                            id={`inline-radio-5`}
                                            className="mx-0"
                                        />
                                    </Form>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between p-1 fw-bold">
                                <div>Total</div>
                                <div>${tip + cartTotal + cartTotal * 0.08}</div>
                            </div>
                        </div>
                        <Card className="my-2 p-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong> Use Reward Points </strong>
                                </div>
                                <div>
                                    <p style={{ color: "#ff971c" }}>
                                        5000 Points{" "}
                                        <span>
                                            <img
                                                src={point}
                                                width="30px"
                                                alt="img"
                                            />
                                        </span>{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex flex-nowrap">
                                <RewardBox
                                    reward={reward}
                                    setReward={setReward}
                                    value={2.15}
                                    points={1000}
                                />
                                <RewardBox
                                    reward={reward}
                                    setReward={setReward}
                                    value={5}
                                    points={2000}
                                />
                                <RewardBox
                                    reward={reward}
                                    setReward={setReward}
                                    value={10}
                                    points={5000}
                                />
                                <RewardBox
                                    reward={reward}
                                    setReward={setReward}
                                    value={15}
                                    points={10000}
                                />
                            </div>
                            <div className="d-flex justify-content-between px-2 pt-4">
                                <div>
                                    <Form>
                                        <Form.Check
                                            checked={reward === 0}
                                            onClick={() => setReward(0)}
                                            label="Don't use Points"
                                            name="reward"
                                            type="checkbox"
                                            className="float-right d-block"
                                        />
                                    </Form>
                                </div>
                            </div>
                        </Card>
                        <select
                            className="bg-light border d-block p-2 mt-4 w-100 form-control-lg"
                            id="Select1"
                        >
                            <option>Add Voucher</option>
                            <option>Voucher1</option>
                            <option>Voucher2</option>
                        </select>
                        <button
                            className="btn btn-warning rounded-0 fw-bold my-4 p-2 w-100"
                            onClick={() => {
                                dispatch(checkoutStage(CHECKOUT_STAGE_PAYMENT));
                            }}
                        >
                            CONFIRM CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Checkout;

const RewardBox = (props) => {
    const { reward, setReward, value, points } = props;
    return (
        <button
            className={
                reward === points
                    ? "btn btn-warning mx-1"
                    : "btn btn-outline-warning mx-1"
            }
            onClick={() => setReward(points)}
        >
            <h3 className="pt-2">
                <strong>${value}</strong>
            </h3>
            <p>
                {points} Points
                <span>
                    <img src={point} width="30px" alt="point" />
                </span>
            </p>
        </button>
    );
};
