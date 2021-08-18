import React, { useEffect, useState } from "react";
import App from "../../common";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { login, sendOtpToUser } from "../../../store/user/userAction";
import OtpForm from "./section/OtpForm";
import UpdateUserDetailsForm from "./section/UpdateUserDetailsForm";
import { Link } from "react-router-dom";

const Login = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.data);
    const [values, setValues] = useState({
        input: {},
        buttonDisabled: true,
        currentForm: "loginForm"
    });

    function setCurrentForm(formName) {
        setValues({ ...values, currentForm: formName });
    }
    useEffect(() => {
        if (user?.success) {
            setValues({ ...values, currentForm: "otpForm" });
        }
    }, [user]);

    const onSendOtp = () => {
        dispatch(sendOtpToUser(values.input));
        setValues({ ...values, buttonDisabled: true });
    };

    const showForm = () => {
        switch (values.currentForm) {
            case "loginForm":
                return loginForm();
            case "otpForm":
                return (
                    <div className="mx-auto pl-5 pr-5 col-lg-8 col-md-9">
                        <OtpForm setCurrentForm={setCurrentForm} />
                    </div>
                );
            case "updateUserForm":
                return (
                    <div className="mx-auto pl-5 pr-5 col-lg-8 col-md-9">
                        <UpdateUserDetailsForm
                            setCurrentForm={setCurrentForm}
                        />
                    </div>
                );
            default:
                return loginForm();
        }
    };

    const loginForm = () => {
        return (
            <div className="mx-auto pl-5 pr-5 col-lg-8 col-md-9">
                <h3 className="login-heading mb-4">
                    <b>Log in</b>
                </h3>
                <form className>
                    <div className="form-group">
                        {/* From : https://www.npmjs.com/package/react-phone-input-2*/}
                        <PhoneInput
                            inputProps={{
                                name: "phone",
                                required: true,
                                autoFocus: true,
                                className: "form-control w-100"
                            }}
                            country={"in"}
                            value={values.input.phone}
                            onChange={(phone) =>
                                setValues({
                                    ...values,
                                    input: { phoneNumber: phone },
                                    buttonDisabled: phone?.length <= 11
                                })
                            }
                        />
                    </div>

                    <button
                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase mb-2"
                        disabled={values.buttonDisabled}
                        onClick={(event) => {
                            event.preventDefault();
                            onSendOtp();
                        }}
                    >
                        Send OTP
                    </button>
                    <div className="text-center pt-3">
                        Don’t have an account?
                        <Link className="font-weight-bold" to="/signup">
                            {" "}
                            Sign Up
                        </Link>
                    </div>
                    <hr className="my-4" />
                    <p className="text-center">LOGIN WITH</p>
                    <div className="row">
                        <div className="col pr-2">
                            <button
                                type="submit"
                                className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase btn btn-primary"
                            >
                                <i className="fa fa-google mr-2" /> Google
                            </button>
                        </div>
                        <div className="col pl-2">
                            <button
                                type="submit"
                                className="btn pl-1 pr-1 btn-lg btn-facebook font-weight-normal text-white btn-block text-uppercase btn btn-primary"
                            >
                                <i className="fa fa-facebook mr-2" /> Facebook
                            </button>
                        </div>
                    </div>
                    <br />
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            setCurrentForm("otpForm");
                        }}
                        className="btn btn-success"
                    >
                        pass
                    </button>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            dispatch(login());
                        }}
                        className="btn btn-success"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    };

    return (
        <App>
            <div className="bg-white container-fluid">
                <div className="row">
                    <div className="d-none d-md-flex bg-image col-lg-6 col-md-4" />
                    <div className="col-lg-6 col-md-8">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">{showForm()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Login;
