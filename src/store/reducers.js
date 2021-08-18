import { combineReducers } from "redux";
import homeReducer from "./home/homeReducer";
import pageReducer from "./page/pageReducer";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import productListReducer from "./productList/productListReducer";
import checkoutReducer from "./checkout/checkoutReducer";

export default combineReducers({
    home: homeReducer,
    page: pageReducer,
    user: userReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    product: productListReducer
});
