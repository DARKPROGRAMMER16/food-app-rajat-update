import * as actionTypes from "./appTypes";

const initialState = {
    status: "idle", // idle, fetch, error
    data: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_STATUS:
            return {
                ...state,
                status: action.payload.status,
                data: action.payload.data
            };
        default:
            return state;
    }
};

export default appReducer;
