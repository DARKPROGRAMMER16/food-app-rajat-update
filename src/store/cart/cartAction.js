import axios from "axios";
import * as actionTypes from "./cartTypes"; /*
import { getToken } from "../auth/authAction";
import config from "../../../public/config/index";*/

export function addToCart(product, quantity = 1) {
    return function (dispatch) {
        const resData = { ...product, quantity: quantity };
        dispatch({ type: actionTypes.ADD_TO_CART, payload: resData });
    };
}
/*
export function addToCart(productId, quantity) {
  return function (dispatch) {
    axios
      .post(
        `${config.BASE_URL}addToCart`,
        {
          productId: productId,
          quantity: quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then(
        (response) => {
          const resData = response.data;
          dispatch({ type: actionTypes.ADD_TO_CART, payload: resData });
        },
        (error) => {
          console.log(error);
        }
      );
  };
}

export function getCartList() {
  return function (dispatch) {
    axios
      .post(
        `${config.BASE_URL}getCartList`,
        {
          keyWord: "",
          pageNo: 1,
          size: 10,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then(
        (response) => {
          const resData = response.data.data;
          dispatch({ type: actionTypes.GET_CART_LIST, payload: resData });
        },
        (error) => {
          console.log(error);
        }
      );
  };
}

export function deleteCartItem(id) {
  return function (dispatch) {
    axios
      .post(
        `${config.BASE_URL}deleteCartItem`,
        {
          id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then(
        (response) => {
          const resData = response.data;
          dispatch({ type: actionTypes.DELETE_CART_ITEM, payload: resData });
        },
        (error) => {
          console.log(error);
        }
      );
  };
}

export function placeOrder(orderData) {
  console.log(orderData);

  return function (dispatch) {
    axios
      .post(`${config.BASE_URL}createOrder`, orderData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then(
        (response) => {
          const resData = response.data.data;
          console.log("resData", resData);
          dispatch({ type: actionTypes.PLACE_ORDER, payload: resData });
        },
        (error) => {
          console.log(error);
        }
      );
  };
}
export function getRewardPointList() {
  return function (dispatch) {
    axios
      .post(
        `${config.BASE_URL}getRewardPointList`,
        { countryCode: "in" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then(
        (response) => {
          const resData = response.data.data;
          dispatch({ type: actionTypes.PLACE_ORDER, payload: resData });
        },
        (error) => {
          console.log(error);
        }
      );
  };
}
*/
