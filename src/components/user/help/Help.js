import UserApp from "../common/UserApp";
import { Card, Col, Row } from "react-bootstrap";
import React from "react";

const Help = (props) => {
    return (
        <UserApp>
            <Card className="border border-warning p-5">
                <h4>Complaint Registration</h4>
                <form className="p-2">
                    <Row className="py-2">
                        <Col md={4}>
                            <label className="form-label">Name</label>
                        </Col>
                        <Col md={8}>
                            <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                placeholder="Your Name"
                            />
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col md={4}>
                            <label className="form-label">Subject</label>
                        </Col>
                        <Col md={8}>
                            <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                placeholder="Write your Subject"
                            />
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col md={4}>
                            <label className="form-label">
                                Nature of Complaint
                            </label>
                        </Col>
                        <Col md={8}>
                            <select
                                id="inputState"
                                className="form-control"
                                placeholder="any"
                            >
                                <option selected>Select any</option>
                                <option>Delivery Time</option>
                                <option>Food Quality</option>
                                <option>Account help</option>
                                <option>Other Confirmation issu</option>
                            </select>
                        </Col>
                    </Row>
                    {/*
                                    <Row className="py-2">
                                        <Col md={4}>
                                        <label className="form-label">Nature of Complaint</label>
                                        </Col>
                                        <Col md={8} style={{border:'1px solid #ff971c'}}>
                                        <select
                                            className="bg-light border-0 d-block p-2"
                                            id="Select1"
                                            style={{border:'1px solid #ff971c'}}
                                        >
                                            <option>Select any</option>
                                           <option>Delivery Time</option>
                                                <option>Food Quality</option>
                                                <option>Account help</option>
                                                <option>Other Confirmation issu</option>
                                        </select>
                                        </Col>
                                    </Row>
                                   */}
                    <Row className="py-2">
                        <Col md={4}>
                            <label className="form-label">Details</label>
                        </Col>
                        <Col md={8}>
                            <textarea rows="5" className="form-control w-100" />
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col md={4}>
                            <label className="form-label">Country</label>
                        </Col>
                        <Col md={8}>
                            <select
                                id="inputState"
                                className="form-control"
                                placeholder="Select Country"
                            >
                                <option selected>Select Country</option>
                                <option>America</option>
                                <option>India</option>
                                <option>Italy</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col md={4}>
                            <label className="form-label">
                                Address (Optional)
                            </label>
                        </Col>
                        <Col md={8}>
                            <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                placeholder="Address"
                            />
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col md={4}>
                            <label className="form-label">
                                Confirmation Code
                            </label>
                        </Col>
                        <Col md={5}>
                            <Row>
                                <Col>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstname"
                                        placeholder="code"
                                        value="PaGu12"
                                        style={{
                                            color: "blue"
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstname"
                                        placeholder="Code"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row className="py-2">
                        <Col md={4}></Col>
                        <Col md={8}>
                            <button className="btn_save w-100">Send</button>
                        </Col>
                    </Row>
                </form>
            </Card>
        </UserApp>
    );
};
export default Help;
