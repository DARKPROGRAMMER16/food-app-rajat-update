import React, { useEffect } from "react";
import Header from "./header";
import Headermenu from "./header/Headermenu";
import FooterMenu from "./footer/FooterMenu";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/user/userAction";

const App = (props) => {
    const { children } = props;
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        const token = window.localStorage.getItem("userToken");
        if (token && !user?.userId) {
            dispatch(login());
        }
    }, [user]);

    return (
        <div id="content">
            {/*<Header /> */}
            <Header />
            {children}
            <FooterMenu />
        </div>
    );
};

export default App;
