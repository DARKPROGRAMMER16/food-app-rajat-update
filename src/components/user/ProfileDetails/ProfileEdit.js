import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const ProfileEdit = () => {
    const [redirect, setRedirect] = useState(false);

    const verify = () => {
        setRedirect(true);
    };
    if (redirect) {
        return <Redirect to={"/otpverify"} />;
    }

    return (
        <>
            <h3>Profile Information</h3>
            <Card className="border p-4">
                <form className="normal-form">
                    <div className="row">
                        <div className="col">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                name="firstname"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="col">
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastname"
                                name="lastname"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="form-label">Date of Birth</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                name="firstname"
                                placeholder="DOB"
                            />
                        </div>
                        <div className="col">
                            <label className="form-label" for="inputState">
                                Country
                            </label>
                            <select id="inputState" className="form-control">
                                <option selected>Select...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label className="form-label">Your Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                name="firstname"
                                placeholder="Location"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label className="form-label">
                                Your Mobile Number
                            </label>
                            <div className="input-group change-btn">
                                <input type="text" className="form-control" />
                                <span className="input-group-text">
                                    {" "}
                                    <i style={{ color: "white" }}>
                                        change
                                    </i>{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label className="form-label">Your Email Id</label>
                            <div className="input-group change-btn">
                                <input type="text" className="form-control" />
                                <span className="input-group-text">
                                    {" "}
                                    <i style={{ color: "white" }}>
                                        change
                                    </i>{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </Card>
            <div className="p-4 text-right">
                <button className="btn_save">Save</button>
            </div>
            <Card className="p-4 normal-form">
                <div>
                    <label className="form-label">Change Password</label>
                    <div className="input-group change-btn-otp">
                        <input type="text" className="form-control" />
                        <span
                            className="input-group-text btn-get-otp link"
                            onClick={(event) => {
                                event.preventDefault();
                                verify();
                            }}
                        >
                            <i style={{ color: "white" }}>GET OTP</i>{" "}
                        </span>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default ProfileEdit;
