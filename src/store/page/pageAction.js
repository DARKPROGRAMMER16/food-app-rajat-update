import axios from "axios";
import * as actionTypes from "./pageTypes";
import { API } from "../../config/index";

export function getPageData(slug) {
    return function (dispatch) {
        let resData = {
            slug: slug,
            title: "This is title",
            body: "lorem ipsum"
        };
        dispatch({
            type: actionTypes.GET_PAGE_DATA,
            payload: resData
        });
        /*axios.get(`${API}getPageData/${slug}`).then(
      (response) => {
        const resData = response.data.data;
        dispatch({
          type: actionTypes.GET_PAGE_DATA,
          payload: resData,
        });
      },
      (error) => {
        console.log(error);
      }
    );*/
    };
}
