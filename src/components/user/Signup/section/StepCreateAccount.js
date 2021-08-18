import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Redirect } from "react-router-dom";

const StepCreateAccount = (props) => {
    const [state, setState] = useState({
        input: {
            whatsApp: "",
            phone: ""
        },
        error: "",
        errors: [],
        buttonDisabled: false
    });

    const handleChange = (event) => {
        let input = state.input;
        input[event.target.name] = event.target.value;
        let errors = state.errors;
        errors[event.target.name] = "";
        setState({
            ...state,
            input,
            error: "",
            errors: errors,
            buttonDisabled: false
        });
    };
    const [redirect, setRedirect] = useState(false);

    const personalDetails = (props) => {
        return (
            <div className="text-center">
                <h3 className="text-center">Finish</h3>
                <label className="form-label">Success</label>
                <br />
                <br />
                <img
                    src="https://img.icons8.com/color/96/000000/ok--v2.png"
                    alt=""
                />
                <br />
                <br />
                <p>Your Requirement has been posted successfully</p>
                <button onClick={() => setRedirect(true)}>
                    Click to redirect to profile
                </button>
                {redirect && <Redirect to={"/teacher/dashboard"} />}
            </div>
        );
    };

    return <div>{personalDetails()}</div>;
};
export default StepCreateAccount;
