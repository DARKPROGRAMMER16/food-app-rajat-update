import React, { useEffect } from "react";
import CartItem from "./Item";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartSidebar.css";
import poat from "../../../assets/images/11.png";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const CartSidebar = (props) => {
    let cartItems = useSelector((state) => state.cart.cartList.list);
    if (props.cartItems?.length === 0) {
        cartItems = [];
    }
    const cartTotal = Math.floor(
        cartItems?.reduce((pV, cV) => pV + cV.quantity * cV.price, 0)
    );

    useEffect(() => {}, [cartItems]);

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );
    if (props.loading) {
        return (
            <div className="shadow p-3 rounded">
                <div>
                    <h2>Cart</h2>
                    <p className="my-1">By Alok's Home Meals</p>
                    <h6 className="secondary-text sm-2">
                        <div className="loading-item">
                            <span className="glow-text">
                                <span>10</span> <span>ITEM</span>
                            </span>
                        </div>
                    </h6>
                </div>
                <div className="list-items">
                    {LoadingRow}
                    {LoadingRow}
                    {LoadingRow}
                    {LoadingRow}
                    {LoadingRow}
                    {LoadingRow}
                </div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="shadow p-3 rounded">
                <div className="list-items">
                    <div className="wrapper-message">
                        <div className="my-3">
                            <img
                                style={{ width: "100%", maxWidth: "100px" }}
                                alt="img"
                                src={poat}
                            />
                        </div>
                        <div className="title-message">Cart Empty</div>
                        <div className="subtitle-message">
                            Can't wait to cook spacial food today...
                        </div>
                        <div className="text-center py-4">
                            <Link to={"/"}>
                                <Button variant="outline-warning sm">
                                    Add Items
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="shadow p-3 rounded">
            <div className="d-flex">
                <div className="flex-fill">
                    <h2>Cart</h2>
                    <p className="my-1">By Alok's Home Meals</p>
                    <h6 className="secondary-text sm-2">
                        {cartItems.length} ITEM
                    </h6>
                </div>
                <div className="flex-column">
                    {props.showAddMore && (
                        <Link to={"/"}>
                            <Button variant="outline-success sm">
                                Add Items
                            </Button>
                        </Link>
                    )}
                </div>
            </div>

            <div>
                {cartItems?.map((item, index) => {
                    return <CartItem {...item} />;
                })}
            </div>
            <div className="d-flex py-3">
                <div className="flex-fill">
                    <h5 style={{ fontWeight: "bold" }}>Subtotal</h5>
                    <p className="secondary-text sm-3 my-0">
                        Extra charges may apply
                    </p>
                </div>
                <div className="flex-column">
                    <h5 style={{ fontWeight: "bold" }}>${cartTotal}</h5>
                </div>
            </div>
            {props.showCheckout !== false && (
                <div>
                    <Link to={"/checkout"}>
                        <button className="btn btn-warning bg-orange rounded-0 p-3 my-2 w-100">
                            <h5 className="m-0">CHECKOUT >>> </h5>
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartSidebar;

CartSidebar.propTypes = {
    showCheckout: PropTypes.bool,
    showAddMore: PropTypes.bool
};

CartSidebar.defaultProps = {
    showCheckout: true,
    showAddMore: false
};
