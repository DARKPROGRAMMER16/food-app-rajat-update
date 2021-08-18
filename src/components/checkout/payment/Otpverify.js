import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import App from "../../common";
import { APP_NAME } from "../../../config";
import { Redirect, Link } from "react-router-dom";

const Otpverify = () => {
    const [redirect, setRedirect] = useState(false);

    const verify = () => {
        setRedirect(true);
    };
    if (redirect) {
        return <Redirect to={"/profile"} />;
    }

    return (
        <App>
            <Row>
                <Col md={4}></Col>
                <Col md={4} className="p-3">
                    <div className="d-flex justify-content-center pt-5">
                        <div>
                            <h1
                                className="fw-bold px-5"
                                style={{ color: "#ff971c" }}
                            >
                                {APP_NAME}
                            </h1>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            {" "}
                            <h4 className="pt-5">Varification Code</h4>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <p className="secondary-text text-center px-5">
                                Please enter the varification code send to
                                123456789
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-row pt-5 px-5">
                        <input
                            type="text"
                            className="form-control border-warning mx-2 p-2"
                            id="name"
                            name="name"
                            placeholder="*"
                        />
                        <input
                            type="text"
                            className="form-control border-warning  mx-2 p-2"
                            id="name"
                            name="name"
                            placeholder="*"
                        />
                        <input
                            type="text"
                            className="form-control border-warning mx-2 p-2"
                            id="name"
                            name="name"
                            placeholder="*"
                        />
                        <input
                            type="text"
                            className="form-control border-warning mx-2 p-2"
                            id="name"
                            name="name"
                            placeholder="*"
                        />
                    </div>
                    <div className="py-4">
                        <button
                            className="btn btn-warning form-control rounded-1 py-2"
                            onClick={() => verify()}
                        >
                            <strong>Verify</strong>
                        </button>
                    </div>
                </Col>
                <Col md={4}></Col>
            </Row>
        </App>
    );
};

export default Otpverify;
