import UserApp from "../common/UserApp";
import { Card } from "react-bootstrap";
import React from "react";

const Notification = (props) => {
    return (
        <UserApp>
            <div className="d-flex flex-row py-4">
                <div style={{ width: "90%" }}>
                    <h4>Notification</h4>
                </div>
                <div>
                    2 Unread
                    <i
                        className="fa fa-exclamation-circle"
                        style={{ color: "red" }}
                    />
                </div>
            </div>
            <Card className="border-warning">
                <div className="d-flex flex-row pt-3 px-5 ">
                    <div className="w-100">
                        <i
                            className="fa fa-circle"
                            style={{ color: "#a0a0a0" }}
                        />
                        <span className="py-5">
                            {" "}
                            <b> Food Web Support </b>
                        </span>{" "}
                        <span
                            style={{
                                fontSize: "10px",
                                color: "#a0a0a0"
                            }}
                        >
                            16 July{" "}
                        </span>
                        <p
                            className="px-3"
                            style={{
                                fontSize: "12px",
                                color: "#a0a0a0"
                            }}
                        >
                            Your order have been placed.
                        </p>
                    </div>
                    <div>
                        <p style={{ fontSize: "12px" }}> 4:00PM </p>
                    </div>
                </div>
                <div
                    className="d-flex flex-row pt-3 px-5 "
                    style={{ backgroundColor: "#f8f9fa" }}
                >
                    <div className="w-100">
                        <i
                            className="fa fa-circle"
                            style={{ color: "#a0a0a0" }}
                        />
                        <span className="py-5">
                            {" "}
                            <b> Food Web Support </b>
                        </span>{" "}
                        <span
                            style={{
                                fontSize: "10px",
                                color: "#a0a0a0"
                            }}
                        >
                            16 July{" "}
                        </span>
                        <p
                            className="px-3"
                            style={{
                                fontSize: "12px",
                                color: "#a0a0a0"
                            }}
                        >
                            Your order have been placed.
                        </p>
                    </div>
                    <div>
                        <p style={{ fontSize: "12px" }}> 4:00PM </p>
                    </div>
                </div>
                <br /> <br /> <br /> <br />
            </Card>
        </UserApp>
    );
};
export default Notification;
