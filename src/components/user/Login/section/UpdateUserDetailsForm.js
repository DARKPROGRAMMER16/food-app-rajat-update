import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../../../../store/user/userAction";
import { Redirect } from "react-router-dom";

const UpdateUserDetailsForm = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.data);
    const [values, setValues] = useState({
        input: {
            userName: "",
            email: ""
        },
        buttonDisabled: true,
        success: false
    });

    const handleChange = (event) => {
        let input = values.input;
        input[event.target.name] = event.target.value;
        setValues({ ...values, input, error: "", buttonDisabled: false });
    };

    const onSubmit = () => {
        dispatch(updateUserDetails(values.input));
    };

    const onSuccessRedirect = () => {
        if (values.success) {
            return <Redirect to={"/"} />;
        }
    };

    return (
        <>
            {onSuccessRedirect()}
            <h3 className="login-heading mb-4">
                <b>Provide Personal Details</b>
            </h3>
            <div className="text-center py-3">
                <h5>Tell us a bit more about yourself.</h5>
            </div>
            <form>
                <div className="form-group">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        onChange={handleChange}
                        required={true}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <button
                    className="btn btn-lg btn-primary btn-block btn-login text-uppercase mb-2"
                    disabled={values.buttonDisabled}
                    onClick={(event) => {
                        event.preventDefault();
                        onSubmit();
                    }}
                >
                    Create account
                </button>
                <br />
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        setValues({ ...values, success: true });
                    }}
                >
                    pass
                </button>
            </form>
        </>
    );
};

export default UpdateUserDetailsForm;
