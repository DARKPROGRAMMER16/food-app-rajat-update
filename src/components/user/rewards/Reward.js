import React from "react";
import { Card } from "react-bootstrap";
import rewordimg from "../../../assets/images/19.png";
import point from "../../../assets/images/20.png";
import UserApp from "../common/UserApp";

export const Reward = () => {
    return (
        <UserApp>
            <Card className="border-0 bg-light">
                <div className="d-flex justify-content-between p-4">
                    <div>
                        <img src={rewordimg} width="60%" />
                    </div>
                    <div>
                        <h4 className="fw-bold">Remaining Points</h4>
                        <div className="d-flex justify-content-end py-2">
                            <div>
                                <p style={{ color: "#ff971c" }}>
                                    5 Points{" "}
                                    <span>
                                        <img src={point} width="30px" />
                                    </span>{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <div
                className="d-flex justify-content-between my-3 p-2 rounded"
                style={{ backgroundColor: "#ffcd39" }}
            >
                <div className="text-white align-self-center">
                    <strong>CLAIM YOUR REWARD POINTS</strong>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        style={{
                            backgroundColor: "white",
                            color: "#ffcd39"
                        }}
                    >
                        Order Now
                    </button>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div>
                    <strong>Recent Reward point Activity</strong>
                    <p className="secondary-text sm-2">
                        Reward points are valid for 1 year from the date they
                        are credited
                    </p>
                </div>
                <div className="pr-25" style={{ paddingRight: "30px" }}>
                    <p>
                        <span>
                            <img src={point} width="30px" />
                        </span>{" "}
                        5 Points
                    </p>
                </div>
            </div>
            <Card className="border-0 bg-light p-4">
                <div className="d-flex justify-content-between">
                    <div>
                        <strong>King burger with fries and cola</strong>
                        <p className="secondary-text sm-2">
                            Credited on 26 July 2021
                        </p>
                    </div>
                    <div
                        className=""
                        style={{
                            color: "#ff971c",
                            paddingRight: "30px"
                        }}
                    >
                        +5
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <div>
                        <strong>King burger with fries and cola</strong>
                        <p className="secondary-text sm-2">
                            Credited on 26 July 2021
                        </p>
                    </div>
                    <div
                        className=""
                        style={{
                            color: "#ff971c",
                            paddingRight: "30px"
                        }}
                    >
                        +12
                    </div>
                </div>
                <hr />
            </Card>
        </UserApp>
    );
};

export default Reward;
