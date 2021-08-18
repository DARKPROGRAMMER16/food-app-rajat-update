import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Image } from "react-bootstrap";
import "./Profile.css";
import profile_image from "../../../assets/images/profile_image.png";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
    return (
        <>
            <section
                className="position-relative"
                style={{ backgroundColor: "#ffc107" }}
            >
                <div className="container">
                    <Row className="pt-4">
                        <Col md={2}>
                            <Image
                                className="bg-white rounded"
                                src={profile_image}
                                fluid
                            />
                        </Col>
                        <Col md={2} className="p-4">
                            <h3 className="text-white">User Name</h3>
                            <p className="text-white">+91 9876 478323</p>
                            <br />
                            <p className="text-white">user@gmail.com</p>
                        </Col>
                        <Col md={6} className="text-right position-relative">
                            <Link to="/profile">
                                <button className="btn_edit_profile">
                                    Edit Profile
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default ProfileHeader;
