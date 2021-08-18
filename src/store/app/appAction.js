import * as actionTypes from "./appTypes";

export function setAppToIdle() {
    return function (dispatch) {
        dispatch({
            type: actionTypes.SET_STATUS,
            payload: { status: "idle", data: null }
        });
    };
}

export function setError(data) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.SET_STATUS,
            payload: { status: "error", data: data }
        });
    };
}
