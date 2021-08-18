import * as actionTypes from "./homeTypes";

const initialState = {
    data: {
        categories: []
    }
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME_DATA:
            return {
                ...state,
                data: action.payload
            };

        default:
            return state;
    }
};

export default homeReducer;
