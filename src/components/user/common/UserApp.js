import ProfileHeader from "./ProfileHeader";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import App from "../../common";
import React from "react";

const UserApp = (props) => {
    return (
        <App>
            <ProfileHeader />
            <section className="bg-white py-5">
                <div className="container">
                    <Row className="">
                        <Col md={3}>
                            <Sidebar />
                        </Col>
                        <Col md={9}>{props.children}</Col>
                    </Row>
                </div>
            </section>
        </App>
    );
};
export default UserApp;
