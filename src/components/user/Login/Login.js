import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import App from "../../common";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import {
    login,
    loginWithFacebook,
    loginWithGoogle,
    loginWithPassword,
    sendOtpToUser
} from "../../../store/user/userAction";
import OtpForm from "./section/OtpForm";
import UpdateUserDetailsForm from "./section/UpdateUserDetailsForm";
import UserCard from "../common/UserCard";
import { APP_NAME, FACEBOOK_APP_ID, GOOGLE_CLIENT_ID } from "../../../config";
import Password from "./section/Password";
import SelectRole from "../common/SelectRole";
import { Redirect, Link } from "react-router-dom";
import Helmet from "react-helmet";
import "./Login.css";
import { Form } from "react-bootstrap";

const Login = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.data);
    const [values, setValues] = useState({
        input: { role: "", mobileNumber: "" },
        errors: {},
        buttonDisabled: true,
        currentForm: "loginForm",
        dashboard: "",
        redirect: false
    });

    function setCurrentForm(formName) {
        setValues({ ...values, currentForm: formName });
    }

    useEffect(() => {
        if (user?.success) {
            setValues({ ...values, currentForm: "otpForm" });
        }
        if (user?.userId) {
            setValues({ ...values, dashboard: user.role });
        }
    }, [user]);

    if (values.dashboard) {
        return <Redirect to={"/" + values.dashboard + "/dashboard"} />;
    }
    if (values.redirect) {
        return <Redirect to={"/profile"} />;
    }

    /* const onSendOtp = () => {
    dispatch(sendOtpToUser(values.input));
    setValues({ ...values, buttonDisabled: true });
  }; */

    const onClickNext = () => {
        setValues({ ...values, redirect: true });
        console.log(values.input);
        
        /*setValues({
            ...values,
            buttonDisabled: true,
            currentForm: "passwordForm"
        });*/
    };

    const onRoleChange = (role) => {
        setValues({
            ...values,
            input: { ...values.input, role: role, currentForm: "loginForm" }
        });
    };

    const showForm = () => {
        switch (values.currentForm) {
            case "loginForm":
                return loginForm();
            case "passwordForm":
                return (
                    <div className="mx-auto pl-5 pr-5 col-lg-8 col-md-9">
                        <Password
                            setCurrentForm={setCurrentForm}
                            responsePassword={responsePassword}
                        />
                    </div>
                );
            case "otpForm":
                dispatch(sendOtpToUser(values.input));
                setValues({ ...values, buttonDisabled: true });
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

    const responseGoogle = (response) => {
        dispatch(
            loginWithGoogle({
                email: response.profileObj.email,
                googleId: response.googleId,
                role: values.input.role
            })
        );
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

    const responsePassword = (response) => {
        console.log(response);
        dispatch(
            loginWithPassword({
                email: values.input.email,
                password: response,
                role: values.input.role
            })
        );
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

    const loginForm = () => {
        return (
            <div className="container-fluid py-0">
                <div className="row min-vh-100">
                    <div className="col-md-5 p-0">
                        <div className="social-login px-3 px-sm-5 ">
                            <div className="row h-100">
                                <div className="col-12 px-sm-2">
                                    <div className="text-center mb-5">
                                        <h1 className="text-white my-5 py-5" style={{fontWeight:'bolder'}}>Foody Web</h1>
                                        <h3 className="text-white" style={{fontWeight:'bolder'}}>
                                            Or
                                        </h3>
                                    </div>
                                    <GoogleLogin
                                        clientId={GOOGLE_CLIENT_ID}
                                        render={(renderProps) => (
                                            <button
                                                onClick={renderProps.onClick}
                                                disabled={renderProps.disabled}
                                                className="btn btn-secondary w-100 my-2"
                                            >
                                                <i className="fa fa-google mx-2" />
                                                Log In with Google
                                            </button>
                                        )}
                                        buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={"single_host_origin"}
                                    />

                                    <FacebookLogin
                                        appId={FACEBOOK_APP_ID}
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        onClick={() => {}}
                                        callback={responseFacebook}
                                        cssClass="btn btn-secondary w-100 my-2"
                                        icon="fa-facebook mx-2"
                                    />

                                    <button className="btn btn-secondary w-100 my-2">
                                        <i className="fa fa-apple mx-2" />
                                        Sign In with Apple ID
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="p-2 p-sm-5 login">
                            <div className="text-center py-5">
                                <h2 className="text-orange">{APP_NAME}</h2>
                                <h4>Hi there, Welcome back</h4>
                            </div>
                            <form className="px-3 px-sm-5">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Email / Mobile Number"
                                    />
                                    <div className="text-danger">
                                        {values.errors.email}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Password"
                                    />
                                    <div className="text-danger">
                                        {values.errors.password}
                                    </div>
                                </div>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label="Remember me"
                                        />
                                    </Form.Group>
                                </Form>

                                <button
                                    className="btn btn-primary w-100 my-2"
                                    /* disabled={values.buttonDisabled}*/
                                    onClick={(event) => {
                                        event.preventDefault();
                                        // onSendOtp();
                                        onClickNext();
                                    }}
                                >
                                    Login
                                </button>
                                <div className="text-left">
                                    <Link
                                        className="text-left"
                                        to="/forgot-password"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>

                                <div className="text-center py-3">
                                    Don't have an account?{" "}
                                    <Link
                                        className="font-weight-bold"
                                        to="/signup"
                                    >
                                        Signup
                                    </Link>
                                </div>

                                <br />
                                <div className="d-none">
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
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    /*
  const loginForm = () => {
    return (
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
                  backgroundColor: "#E21919",
                }}
              >
                <i className="fa fa-google mx-2" />
                Sign In with Google
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
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

        <form className="text-center">
          <div className="form-group">
            <input
              type="text"
              id="email"
              name="email"
              className="form-control mt-4"
              onChange={handleChange}
              placeholder="Email Id / Mobile Number"
            />
          </div>

          <button
            className="btn btn-primary btn-login w-100 mt-4"
            disabled={values.buttonDisabled}
            onClick={(event) => {
              event.preventDefault();
              // onSendOtp();
              onClickNext();
            }}
          >
            Next
          </button>
          <div className="text-center pt-3">
            New User?
            <Link className="font-weight-bold" to="/signup">
              Signup Now
            </Link>{" "}
            it's FREE
          </div>

          <br />
          <div >
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
          </div>
        </form>
      </div>
    );
  };*/

    return (
        <App>
            <Helmet>
                <title>Login </title>
                <meta
                    name="description"
                    content="Login with your credentials"
                />
            </Helmet>
            {showForm()}
        </App>
    );
};

export default Login;
