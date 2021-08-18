import React from "react";
import App from "../common";
import "./home.css";
import Slider1 from "./section/Slider1";
import Slider2 from "./section/Slider2";
import Menu from "./section/Menu";

const Home = (props) => {
    return (
        <App>
            <Slider1 />
            <Slider2 />
            <Menu />
        </App>
    );
};

export default Home;
