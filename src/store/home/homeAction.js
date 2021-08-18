import axios from "axios";
import * as actionTypes from "./homeTypes";
import { API } from "../../config/index";

export function getHomeData() {
    return <></>;
    /*
  return function (dispatch) {
    axios.get(`${API}all-category?page=1`).then(
      (response) => {
        const resData = response.data.data;
        dispatch({
          type: actionTypes.GET_HOME_DATA,
          payload: { categories: resData },
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
  */
}
