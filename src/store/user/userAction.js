import axios from "axios";
import * as actionTypes from "./userTypes";
import { API } from "../../config/index";

// {
//     "message": "Login Success With Google",
//     "role": "teacher",
//     "email": "sealoksingh@gmail.com",
//     "userId": "60d057bba380b10022e17a81"
// }
export function sendOtpToUser(phoneNumber) {
    return function (dispatch) {
        axios.post(`${API}otp`, phoneNumber).then(
            (response) => {
                const resData = response.data;
                dispatch({
                    type: actionTypes.SEND_OTP,
                    payload: resData
                });
            },
            (error) => {
                console.log(error);
            }
        );

        dispatch({
            type: actionTypes.SEND_OTP,
            payload: { success: true }
        });
    };
}

export function verifyOtp(data) {
    return function (dispatch) {
        axios
            .post(
                `${API}opt-login`,
                {
                    code: data.code
                },
                {
                    headers: {
                        verifyid: data.verifyId,
                        phonenumber: data.phoneNumber
                    }
                }
            )
            .then(
                (response) => {
                    const resData = response.data;
                    dispatch({
                        type: actionTypes.VERIFY_OTP,
                        payload: resData
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
    };
}

export function updateUserDetails(data) {
    return function (dispatch) {
        axios
            .post(
                `${API}user-details`,
                { data },
                {
                    headers: {
                        userid: data.userid
                    }
                }
            )
            .then(
                (response) => {
                    const resData = response.data.data;
                    dispatch({
                        type: actionTypes.SEND_OTP,
                        payload: resData
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
    };
}

export function login() {
    return function (dispatch) {
        let token = localStorage.getItem("userToken");
        const resData = JSON.parse(token);
        dispatch({
            type: actionTypes.LOGIN,
            payload: resData
        });
    };
}

export function createAccount(data) {
    return function (dispatch) {
        axios.post(`${API}registration`, data).then(
            (response) => {
                const resData = response.data;
                localStorage.setItem("userToken", JSON.stringify(resData));
                dispatch({
                    type: actionTypes.CREATE_ACCOUNT,
                    payload: resData
                });
            },
            (error) => {
                console.log(error);
                console.log(error.data);
            }
        );
    };
}

export function logout() {
    return function (dispatch) {
        /*axios.get(`${API}`).then(
      (response) => {
        // const resData = response.data;
        const resData = null;
        dispatch({
          type: actionTypes.LOGOUT,
          payload: resData,
        });
      },
      (error) => {
        console.log(error);
      }
    );*/
        window.location.href = "/";
        localStorage.removeItem("userToken");
        const resData = null;
        dispatch({
            type: actionTypes.LOGOUT,
            payload: resData
        });
    };
}

export function loginWithPassword(data) {
    return function (dispatch) {
        axios.post(`${API}login`, data).then(
            (response) => {
                const resData = response.data;
                localStorage.setItem("userToken", JSON.stringify(resData));
                dispatch({
                    type: actionTypes.SEND_OTP,
                    payload: resData
                });
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function loginWithGoogle(data) {
    return function (dispatch) {
        axios.post(`${API}google-o-auth`, data).then(
            (response) => {
                const resData = response.data;
                localStorage.setItem("userToken", JSON.stringify(resData));
                dispatch({
                    type: actionTypes.SEND_OTP,
                    payload: resData
                });
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function loginWithFacebook(data) {
    return function (dispatch) {
        axios.post(`${API}facebook-o-auth`, data).then(
            (response) => {
                const resData = response.data;
                localStorage.setItem("userToken", JSON.stringify(resData));
                dispatch({
                    type: actionTypes.SEND_OTP,
                    payload: resData
                });
            },
            (error) => {
                console.log(error);
            }
        );
    };
}

export function updateTeacherDetails(data) {
    return function (dispatch) {
        axios
            .post(
                `${API}teacher-profile-details`,
                { data },
                {
                    headers: {
                        userid: data.userid
                    }
                }
            )
            .then(
                (response) => {
                    const resData = response.data;
                    dispatch({
                        type: actionTypes.UPDATE_TEACHER_DETAILS,
                        payload: resData
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
    };
}
