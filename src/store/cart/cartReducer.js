import * as actionTypes from "./cartTypes";

const initialState = {
    cartList: {
        list: [
            /* {
                name: "Burger",
                quantity: 8,
                veg: true,
                price: 20
            },
            {
                name: "Pizza",
                quantity: 3,
                veg: true,
                price: 50
            },
            {
                name: "Gulab Jamun",
                quantity: 5,
                veg: true,
                price: 80
            },
            {
                name: "Chhole",
                quantity: 1,
                veg: true,
                price: 40
            }*/
        ]
    },
    data: {},
    orderplaced: [],
    rewardPoints: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cartList: { list: state.cartList.list.concat(action.payload) }
            };
        case actionTypes.GET_CART_LIST:
            return {
                ...state,
                cartList: action.payload
            };
        case actionTypes.DELETE_CART_ITEM:
            return {
                ...state,
                data: action.payload
            };

        case actionTypes.PLACE_ORDER:
            return {
                ...state,
                orderplaced: action.payload
            };

        case actionTypes.GET_REWARD_POINT_LIST:
            return {
                ...state,
                rewardPoints: action.payload
            };

        default:
            return state;
    }
};

export default cartReducer;
