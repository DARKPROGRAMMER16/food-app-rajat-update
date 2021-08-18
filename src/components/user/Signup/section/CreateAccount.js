import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Password from "../../Login/section/Password";
import {
    createAccount,
    login,
    loginWithFacebook,
    loginWithGoogle,
    loginWithPassword,
    sendOtpToUser
} from "../../../../store/user/userAction";
import OtpForm from "../../Login/section/OtpForm";
import UpdateUserDetailsForm from "../../Login/section/UpdateUserDetailsForm";
import GoogleLogin from "react-google-login";
import { API, FACEBOOK_APP_ID, GOOGLE_CLIENT_ID } from "../../../../config";
import FacebookLogin from "react-facebook-login";
import App from "../../../common";
import PhoneInput from "react-phone-input-2";
import UserCard from "../../common/UserCard";
import { capitalize } from "../../../../helpers/function";
import * as actionTypes from "../../../../store/user/userTypes";
import { CREATE_ACCOUNT } from "../../../../store/user/userTypes";

const CreateAccount = (props) => {
    //userName, email, password, confirmPassword, phoneNumber,
    const [values, setValues] = useState({
        input: {
            role: props.values
        },
        errors: {},
        message: "",
        success: true,
        isRegistrationSuccess: false
    });
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (user?.userId) {
            // props.onSignup(values.input.role);
            setValues({ ...values, isRegistrationSuccess: true });
        }
        if (user && !user.success) {
            setValues({
                ...values,
                errors: { ...values.errors, ...user?.errors },
                message: user.message,
                success: false
            });
        }
    }, [user]);

    const responseGoogle = (response) => {
        dispatch(
            loginWithGoogle({
                email: response.profileObj.email,
                googleId: response.googleId,
                role: values.input.role
            })
        );
    };
    const failGoogle = (response) => {
        setValues({
            ...values,
            message: response?.message,
            loading: false
        });
    };

    const responseFacebook = (response) => {
        console.log(response);
        dispatch(
            loginWithFacebook({
                email: response.email,
                facebookId: response.id,
                role: values.input.role
            })
        );
    };

    const onCreateAccount = () => {
        //let res = validate();
        //if (!res) return;
        // dispatch(createAccount(values.input));

        if (validate()) {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values.input)
            };

            fetch(`${API}registration/`, requestOptions)
                .then((res) => res.json())
                .then((json) => {
                    if (!json.success) {
                        setValues({
                            ...values,
                            message: json.message,
                            loading: false,
                            errors: { ...values, ...json.data }
                        });
                    } else {
                        window.localStorage.setItem(
                            "userToken",
                            JSON.stringify(json)
                        );
                        dispatch({ type: CREATE_ACCOUNT, payload: json });
                        setValues({
                            ...values,
                            success: true
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

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

    const validate = () => {
        const error = {};
        let fields = values.input;

        if (!fields.role) {
            error.role = "Please select a role";
        }
        if (!fields.userName) {
            error.userName = "User Name is required!";
        }
        if (!fields.email) {
            error.email = "This email field is required!";
        }
        if (!fields.phoneNumber) {
            error.phoneNumber = "Phone number field is required!";
        }
        if (!fields.password) {
            error.password = "This password field is required!";
        } else if (fields.password.length <= 6) {
            error.password = "Password should be greater than 6 Char";
        }
        if (!fields.confirmPassword) {
            error.confirmPassword = "Confirm password fields is required";
        } else if (fields.password !== fields.confirmPassword) {
            error.password = "Password and confirm password must be same ";
        }
        setValues({ ...values, errors: error });
        let res = Object.keys(error).length === 0;
        return res;
    };

    if (values.isRegistrationSuccess) {
        return <Redirect to={"/" + values.input.role + "/dashboard"} />;
    }

    return (
        <UserCard
            title={"Create " + capitalize(values.input.role) + " Account"}
        >
            <div className="mx-auto pl-5 pr-5 col-lg-8 col-md-9">
                <div>
                    <GoogleLogin
                        clientId={GOOGLE_CLIENT_ID}
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="btn btn-danger w-100  my-3"
                                style={{
                                    backgroundColor: "#E21919"
                                }}
                            >
                                <i className="fa fa-google mx-2" />
                                Sign In with Google
                            </button>
                        )}
                        buttonText="Login"
                        onSuccess={() => responseGoogle}
                        onFailure={() => failGoogle}
                        cookiePolicy={"single_host_origin"}
                    />

                    <FacebookLogin
                        appId={FACEBOOK_APP_ID}
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={() => {}}
                        callback={responseFacebook}
                        cssClass="btn btn-info w-100 my-facebook-button-class mb-3 text-white"
                        icon="fa-facebook mx-2"
                    />

                    <p className="text-center d-flex my-1">
                        <span className="line flex-fill" />
                        <span className="or flex-column">Or</span>
                        <span className="line flex-fill" />
                    </p>
                    <h4 className="text-center  my-1">Use UniqBrains Login</h4>
                </div>

                <form className="text-left pt-3">
                    {!!values.message ? (
                        <div className="alert alert-warning">
                            {values.message}
                        </div>
                    ) : (
                        ""
                    )}

                    {/* <div className="row pt-3">
            <div className="col-6">
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={values.input.firstName}
                  onChange={handleChange}
                  className="form-control border"
                  placeholder="Enter firstName"
                  id="firstName"
                />

                <div className="text-danger">{values.errors.firstName}</div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="form-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="userName"
                  value={values.input.lastName}
                  onChange={handleChange}
                  className="form-control border"
                  placeholder="Enter Last Name"
                  id="lastName"
                />

                <div className="text-danger">{values.errors.lastName}</div>
              </div>
            </div>
          </div>*/}

                    <div className="form-group">
                        {/*<label className="form-label" htmlFor="phoneNumber">
              Phone Number
            </label>*/}
                        <PhoneInput
                            inputProps={{
                                name: "phoneNumber",
                                required: true,
                                autoFocus: false,
                                className: "form-control w-100"
                            }}
                            country={"in"}
                            value={values.input.phoneNumber}
                            onChange={(phoneNumber) => {
                                let event = {
                                    target: {
                                        value: phoneNumber,
                                        name: "phoneNumber"
                                    }
                                };
                                handleChange(event);
                            }}
                        />
                        <div className="text-danger">
                            {values.errors.phoneNumber}
                        </div>
                    </div>

                    {/*<div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={values.input.email}
              onChange={handleChange}
              className="form-control border"
              placeholder="Enter Email"
              id="email"
            />
            <div className="text-danger">{values.errors.email}</div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.input.password}
              onChange={handleChange}
              className="form-control border"
              placeholder="**********"
              id="password"
            />
            <div className="text-danger">{values.errors.password}</div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={values.input.confirmPassword}
              onChange={handleChange}
              className="form-control border"
              placeholder="**********"
              id="confirmPassword"
            />
            <div className="text-danger">{values.errors.confirmPassword}</div>
          </div>*/}

                    <button
                        className="btn btn-primary btn-login w-100 mt-3"
                        disabled={values.buttonDisabled}
                        onClick={(event) => {
                            event.preventDefault();
                            onCreateAccount();
                        }}
                    >
                        Send OTP
                    </button>

                    <div className="text-center pt-3">
                        Already have an account ?
                        <Link className="font-weight-bold" to="/login">
                            Login Here
                        </Link>
                    </div>

                    <br />
                    <div className="d-none">
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                props.onSignup(props.role);
                            }}
                            className="btn btn-success"
                        >
                            pass
                        </button>
                    </div>
                </form>
            </div>
        </UserCard>
    );
};

export default CreateAccount;
