import { PRODUCT_LIST } from "./productListTypes";

export function getProductList(productData) {
  return function (dispatch) {
    dispatch({ type: "PRODUCT_LIST", payload: productData });
  };
}

export function getProductDetail(productData) {
  return function (dispatch) {
    dispatch({ type: "PRODUCT_DETAIL", payload: productData });
  };
}
