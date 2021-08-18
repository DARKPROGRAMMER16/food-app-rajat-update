import * as actionTypes from "./pageTypes";

const initialState = {
    data: {}
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PAGE_DATA:
            return {
                ...state,
                data: action.payload
            };

        default:
            return state;
    }
};

export default pageReducer;
