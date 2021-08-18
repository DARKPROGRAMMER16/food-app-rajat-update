import React from "react";
import App from "../../common";
import "../common/Profile.css";
import { Row, Col, Image } from "react-bootstrap";
import profile_image from "../../../assets/images/profile_image.png";
import ProfileEdit from "./ProfileEdit";
import Sidebar from "../common/Sidebar";
import ProfileHeader from "../common/ProfileHeader";

const Profile = () => {
    return (
        <App>
            <ProfileHeader />

            <section className="bg-white py-5">
                <div className="container">
                    <Row>
                        <Col md={3}>
                            <div className="border text-center m-2 mt-0 p-2">
                                <Image
                                    className="profileimage2 bg-light rounded-circle my-4"
                                    src={profile_image}
                                    fluid
                                />
                                <h4>User Name</h4>
                                <h6>
                                    <i className="fa fa-map-marker mx-2" />
                                    Location
                                </h6>
                            </div>
                            <Sidebar />
                        </Col>
                        <Col md={9}>
                            <ProfileEdit />
                        </Col>
                    </Row>
                </div>
            </section>
        </App>
    );
};

export default Profile;
