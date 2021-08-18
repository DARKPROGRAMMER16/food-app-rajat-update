import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOtpToUser, verifyOtp } from "../../../../store/user/userAction";
import VerificationInput from "react-verification-input";

const Password = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.data);

    const [values, setValues] = useState({
        input: { password: "" },
        errors: [],
        message: "",
        buttonDisabled: true
    });

    const [data, setData] = useState({
        verifyId: user?.response?.id,
        phoneNumber: user?.response?.recipient,
        code: values.input.password
    });

    const handleChange = (event) => {
        let input = values.input;
        input[event.target.name] = event.target.value;
        let errors = values.errors;
        errors[event.target.name] = "";
        setValues({
            ...values,
            input,
            error: "",
            errors: errors,
            buttonDisabled: false
        });
    };

    const passwordForm = () => {
        return (
            <>
                <div className="text-center py-3">
                    <h3>Enter Password</h3>
                    <a
                        href={"#"}
                        className="text-danger"
                        onClick={(event) => {
                            event.preventDefault();
                            props.setCurrentForm("loginForm");
                        }}
                    >
                        Change Email or Phone
                    </a>
                </div>
                <form>
                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Password"
                        />
                    </div>

                    <div className="text-right py-1">
                        <a href={"/forget-password"} className="text-danger">
                            Forget Password?
                        </a>
                    </div>

                    <button
                        className="btn btn-lg btn-primary px-4 w-100 btn-login text-uppercase my-4 mx-auto"
                        disabled={values.buttonDisabled}
                        onClick={(event) => {
                            event.preventDefault();
                            props.responsePassword(values.input.password);
                        }}
                    >
                        Login
                    </button>
                    <div className="text-center pb-2">
                        <a
                            href={"#"}
                            onClick={(event) => {
                                event.preventDefault();
                                props.setCurrentForm("otpForm");
                            }}
                            className="text-danger"
                        >
                            Login Via OTP
                        </a>

                        <br />

                        <br />
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                props.setCurrentForm("updateUserForm");
                            }}
                        >
                            pass
                        </button>
                    </div>
                </form>
            </>
        );
    };

    return passwordForm();
};

export default Password;
