import App from "../../common";
import { Row, Col } from "react-bootstrap";
import rice from "../../../assets/images/18.png";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Guestuser = () => {
    const [redirect, setRedirect] = useState(false);

    const verify = () => {
        setRedirect(true);
    };
    if (redirect) {
        return <Redirect to={"/otpverify"} />;
    }

    return (
        <App>
            <section className="bg-white py-5">
                <div className="container">
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6} className="p-5">
                            <div className="d-flex justify-content-center">
                                <div>
                                    <h1
                                        className="fw-bold px-5"
                                        style={{ color: "#ff971c" }}
                                    >
                                        Foody Web
                                    </h1>
                                    <h4>Thanks for ordering with us... </h4>
                                </div>
                            </div>
                            <form>
                                <div className="">
                                    <div className="py-2">
                                        <input
                                            required
                                            type="text"
                                            className="form-control border-warning p-2"
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="py-2">
                                        <input
                                            required
                                            type="text"
                                            className="form-control border-warning"
                                            id="name"
                                            name="name"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="py-2">
                                        <input
                                            required
                                            type="text"
                                            className="form-control border-warning"
                                            id="name"
                                            name="name"
                                            placeholder="Mobile Number"
                                        />
                                    </div>
                                    <div className="py-2">
                                        <button
                                            className="btn btn-warning form-control rounded-1 py-2"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                verify();
                                            }}
                                        >
                                            <strong>GET OTP</strong>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div></div>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <div className="d-flex flex-row">
                                <div className="" style={{ width: "70%" }}>
                                    <img src={rice} width="100%" alt={"img"} />
                                </div>
                                <div className="pt-5">
                                    <h2 style={{ color: "#81ca5f" }}>
                                        For every $10 order get 1 reward point
                                    </h2>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </div>
            </section>
        </App>
    );
};

export default Guestuser;
