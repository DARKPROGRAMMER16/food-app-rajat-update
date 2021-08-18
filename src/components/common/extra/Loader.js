import React from "react";
import { Preloader, TailSpin, Puff, ThreeDots } from "react-preloader-icon";

const Loader = (props) => {
    const { type, size, color } = props;

    const useType = () => {
        switch (type) {
            case "Puff":
                return Puff;
            case "ThreeDots":
                return ThreeDots;
            default:
                return TailSpin;
        }
    };

    return (
        <Preloader
            use={useType}
            size={size ? size : 20}
            strokeWidth={10}
            strokeColor={color ? color : "#262626"}
            duration={1000}
        />
    );
};

export default Loader;
