import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/home";
import NotFound from "../components/common/NotFound";
import Pages from "../components/pages";
import Login from "../components/user/Login/Login";
import Signup from "../components/user/Signup/Signup";
import OfferPage from "../components/pages/offers/offersPage";
import LoginRoute from "./helper/LoginRoute";
import { useSelector } from "react-redux";
import Profile from "../components/user/ProfileDetails/Profile";
import Guestuser from "../components/user/guestuser/Guestuser";
import CheckOutPage from "../components/checkout";
import DeliveryTime from "../components/payment/DeliveryTime";
import CheckoutConfirm from "../components/payment/CheckoutConfirm";
import FoodDetails from "../components/checkout/foodDetails/FoodDetails";
import Otpverify from "../components/checkout/payment/Otpverify";
import OrderSuccess from "../components/checkout/foodDetails/OrderSuccess";
import Orders from "../components/user/orders";
import Help from "../components/user/help";
import Notification from "../components/user/notification";
import Reward from "../components/user/rewards/Reward";
import Feedback from "../components/user/feedback";
import Payment from "../components/user/payment";

const Routes = (props) => {
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        //
    }, [user]);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/offers" component={OfferPage} />

                <LoginRoute exact path="/login" component={Login} />
                <LoginRoute exact path="/signup" component={Signup} />

                <Route exact path="/pages/:slug" component={Pages} />

                <Route path="/profile" component={Profile} />
                <Route path="/guest" component={Guestuser} />
                <Route path="/otpverify" component={Otpverify} />

                <Route path="/help" component={Help} />
                <Route path="/orders" component={Orders} />
                <Route path="/notification" component={Notification} />
                <Route path="/rewards" component={Reward} />
                <Route path="/payments" component={Payment} />

                <Route path="/checkout" component={CheckOutPage} />
                <Route path="/time" component={DeliveryTime} />
                <Route path="/checkoutconfirm" component={CheckoutConfirm} />
                <Route path="/fooddetails" component={FoodDetails} />
                <Route path="/success" component={OrderSuccess} />
                <Route path="/feedbacks" component={Feedback} />

                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
