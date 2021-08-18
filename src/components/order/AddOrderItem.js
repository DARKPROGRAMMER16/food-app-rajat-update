import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import productImage from "../../assets/images/food.jpg";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from "prop-types";
import ProductItem from "../product/item";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartAction";

const AddOrderItem = (props) => {
    const dispatch = useDispatch();
    const mystyle = {
        fontSize: "14px"
    };

    return (
        <>
            <Row className="p-3">
                <Col md={5}>
                    <figure className="figure text-center">
                        <img
                            src={props.image}
                            alt="img"
                            width="100%"
                            className="flex-fill"
                        />
                        <figcaption
                            className="figure-caption text-center"
                            style={{ backgroundColor: "#ffc107" }}
                        >
                            {/* {" "}
                            {props.cal} cal */}
                            <div className="d-flex justify-content-between align-items-center px-3">
                                <p style={{fontSize:'1.3rem'}}>{props.cal} Cal</p>
                                <p style={{fontSize:'1.3rem'}}>{props.price} $</p>
                            </div>
                        </figcaption>
                    </figure>
                    <p className="text-size">{props.discription}</p>
                </Col>
                <Col md={7}>
                    <h4 style={{ color: "rgb(255, 193, 7)" }}>
                        Customize {props.name}
                    </h4>
                    <p className="text-size">${props.price}</p>
                    <p style={{ color: "#aeadad" }}>
                        {" "}
                        Say Cheese Addons
                        <span style={{ color: "black" }}> Combo </span> Choose
                        fries Choose Beverage{" "}
                    </p>

                    <div className="py-1">
                        <strong>Say Cheese </strong> (1/2)
                        <div
                            className="form-check text-success mt-1"
                            style={mystyle}
                        >
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                checked
                            />
                            <label
                                className="form-check-label"
                                for="flexRadioDefault1"
                            >
                                Cheese
                            </label>
                        </div>
                        <div className="form-check" style={mystyle}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                            />
                            <label
                                className="form-check-label"
                                for="flexRadioDefault2"
                            >
                                Spicy
                            </label>
                        </div>
                    </div>
                    <div className="py-1">
                        <strong>AddOns </strong> (1/2)
                        <div className="form-check mt-1" style={mystyle}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                for="flexCheckDefault"
                            >
                                Mayonnise
                            </label>
                        </div>
                        <div className="form-check" style={mystyle}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                checked
                            />
                            <label
                                className="form-check-label"
                                for="flexCheckChecked"
                            >
                                Single Egg
                            </label>
                        </div>
                    </div>
                    <div className="py-1">
                        <strong>
                            Combo -{" "}
                            <span className="text-danger">
                                Frequently bought together
                            </span>{" "}
                        </strong>{" "}
                        (1/2)
                        <Row>
                            <Col>
                                <div
                                    className="form-check mt-1"
                                    style={mystyle}
                                >
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        Regular Fries + Chocolate Thick Shake
                                        (15% Off)
                                    </label>
                                </div>
                            </Col>
                            <Col className="text-right">$1.69</Col>
                        </Row>
                        <Row>
                            <Col>
                                <div
                                    className="form-check mt-1"
                                    style={mystyle}
                                >
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        King Fries + Pepci Can
                                    </label>
                                </div>
                            </Col>
                            <Col>$1.59</Col>
                        </Row>
                    </div>
                    <div className="py-1">
                        <strong>Choose Your Fries</strong> (1/2)
                        <Row>
                            <Col>
                                <div
                                    className="form-check mt-1"
                                    style={mystyle}
                                >
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        King Fries
                                    </label>
                                </div>
                            </Col>
                            <Col>$1.59</Col>
                        </Row>
                        <Row>
                            <Col>
                                <div
                                    className="form-check mt-1"
                                    style={mystyle}
                                >
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        Cheese Fries
                                    </label>
                                </div>
                            </Col>
                            <Col>$0.23</Col>
                        </Row>
                        <Row>
                            <Col>
                                <div
                                    className="form-check mt-1"
                                    style={mystyle}
                                >
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        Regular Fries
                                    </label>
                                </div>
                            </Col>
                            <Col>$1.59</Col>
                        </Row>
                    </div>

                    <div className="py-1">
                        <strong>Choose Your Beverages</strong> (0/1)
                        <Row>
                            <Col>
                                <div
                                    className="form-check mt-1"
                                    style={mystyle}
                                >
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        Choco Cola
                                    </label>
                                </div>
                            </Col>
                            <Col>$0.59</Col>
                        </Row>
                    </div>

                    <div className="py-1">
                        <Row>
                            <Col md={8}>
                                <textarea
                                    className="form-control bg-light border-0 mt-2 w-100"
                                    rows="3"
                                    placeholder="Do you have any own test?"
                                />
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <Row className="py-3">
                            <Col md={8}>
                                <div
                                    className="btn-warning btn p-1 m-0 w-100"
                                    onClick={() => {
                                        dispatch(addToCart(props));
                                        props.onHide();
                                    }}
                                >
                                    <div className="d-flex">
                                        <div className="flex-column text-left">
                                            <strong>
                                                {" "}
                                                Total{" "}
                                                <span
                                                    style={{
                                                        color: "black"
                                                    }}
                                                >
                                                    {" "}
                                                    ${props.price}
                                                </span>
                                            </strong>
                                        </div>
                                        <div className="flex-fill"></div>
                                        <div className="flex-column">
                                            <strong className="float-right">
                                                ADD ITEM
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default AddOrderItem;

AddOrderItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    veg: PropTypes.bool,
    best_seller: PropTypes.bool,
    stars: PropTypes.number,
    cal: PropTypes.number,
    description: PropTypes.string,
    /*size: PropTypes.oneOf(["small", "medium", "large"]),
    label: PropTypes.string.isRequired,*/
    onClickPlus: PropTypes.func,
    onClickMinus: PropTypes.func
};

AddOrderItem.defaultProps = {
    name: "Pizza",
    image: productImage,
    price: 150,
    veg: true,
    best_seller: true,
    stars: 3,
    cal: 140,
    description:
        "Tomato, lettuce, cheese and oh-so-juicy and fress meat stuffed in to bakery fress burger buns. Tomato, lettuce, cheese",
    onClickPlus: undefined,
    onClickMinus: undefined
};
