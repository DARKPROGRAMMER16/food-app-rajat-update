import * as actionTypes from "./checkoutTypes";

const initialState = {
    stage: actionTypes.CHECKOUT_STAGE_DELIVERY,
    data: {}
};

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHECKOUT_STAGE:
            return {
                ...state,
                stage: action.payload
            };

        default:
            return state;
    }
};

export default checkoutReducer;
