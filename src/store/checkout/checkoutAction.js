import axios from "axios";
import * as actionTypes from "./checkoutTypes"; /*
import { getToken } from "../auth/authAction";
import config from "../../../public/config/index";*/

export function checkoutStage(stage) {
    return function (dispatch) {
        const resData = stage;
        dispatch({ type: actionTypes.CHECKOUT_STAGE, payload: resData });
    };
}
