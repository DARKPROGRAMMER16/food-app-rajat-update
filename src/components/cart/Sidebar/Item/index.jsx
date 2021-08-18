import React, { useState } from "react";
import { FaPlus, FaMinus, FaStop, FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const CartItem = (props) => {
    const [quantity, setQuantity] = useState(props.quantity);
    return (
        <div className="d-flex py-2">
            <div className="flex-column align-self-center">
                <FaStop
                    color={props.veg ? "green" : "red"}
                    className="my-auto"
                />
            </div>
            <div className="flex-fill mx-2">
                <h6 className="mb-0">{props.name}</h6>
                <div className="secondary-text sm-2">
                    Customize{" "}
                    <FaArrowRight className="my-1 text-orange" size="10" />
                </div>
            </div>
            <div className="flex-column  align-self-center">
                <div className="d-flex my-auto">
                    <div className="border border-warning rounded text-center">
                        <FaMinus
                            className="text-orange m-1"
                            onClick={() => setQuantity(quantity - 1)}
                        />
                        <span className="text-orange my-auto mx-2 py-0">
                            {quantity}
                        </span>
                        <FaPlus
                            className="m-1 text-orange"
                            onClick={() => setQuantity(quantity + 1)}
                        />
                    </div>
                    <div className="px-2 my-auto">${props.price}</div>
                </div>
            </div>
        </div>
    );
};
export default CartItem;

CartItem.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    veg: PropTypes.bool,
    price: PropTypes.number,
    /*size: PropTypes.oneOf(["small", "medium", "large"]),
    label: PropTypes.string.isRequired,*/
    onClickPlus: PropTypes.func,
    onClickMinus: PropTypes.func
};

CartItem.defaultProps = {
    name: "Food Item Name",
    quantity: 3,
    veg: true,
    price: 20,
    onClickPlus: undefined,
    onClickMinus: undefined
};
