import { Col, ListGroup, Row } from "react-bootstrap";
import productImage from "../../../../assets/images/food.jpg";
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Rating from "../../../common/Rating";
import PropTypes from "prop-types";
import ProductItem from "../../../product/item";
import { Link } from "react-router-dom";

const Order = (props) => {
    return (
        <div>
            <Row>
                <Col xs={3}>
                    <div className="">
                        <figure className="figure text-center">
                            <img
                                src={props.image}
                                alt="img"
                                className="img-fluid overflow-hidden"
                                style={{
                                    height: "80px",
                                    width: "100%",
                                    objectFit: "cover"
                                }}
                            />
                            <figcaption className="figure-caption">
                                120 cal
                            </figcaption>
                        </figure>
                    </div>
                </Col>
                <Col xs={9} className="position-relative">
                    <div className="d-flex flex-column">
                        <div className="d-flex mb-auto">
                            <div className="flex-fill">
                                <h5>{props.name}</h5>
                                <h6>${props.price}</h6>
                                <p style={{ fontSize: 12, color: "#a0a0a0" }}>
                                    Indian, Beverage Siolim, Mapusa{" "}
                                </p>
                            </div>
                            <div className="flex-column text-orange">
                                <p style={{ fontSize: 12 }}>
                                    In kitchen Tus, July 6 2021 10:00 AM{" "}
                                    <i
                                        className="far fa-clock"
                                        style={{ color: "#ff971c" }}
                                    />{" "}
                                    <i
                                        className="fas fa-greater-than"
                                        style={{
                                            fontSize: 10,
                                            color: "#a0a0a0"
                                        }}
                                    />
                                    {/* <i className="fa fa-exclamation" style={{color: 'red'}}/>  */}
                                </p>
                            </div>
                        </div>
                        <div className="flex-fill "></div>
                    </div>
                </Col>
            </Row>
            <div className="">
                <Row className="">
                    <Col md={6}>
                        <p>Chicken Burger with fries</p>
                        <Link to={"/fooddetails"}>
                            <button className="btn btn-warning rounded-1 btn-sm m-1">
                                Order Details
                            </button>
                        </Link>
                        <button className="btn btn-warning rounded-1 btn-sm m-1">
                            Track order
                        </button>
                        <LinkContainer to="/feedbacks">
                            <button className="btn btn-outline-warning rounded-1 btn-sm">
                                Feedback
                            </button>
                        </LinkContainer>
                    </Col>
                    <Col md={3}></Col>
                    <Col md={3}>
                        <p
                            style={{
                                textAlign: "right"
                            }}
                        >
                            Total: $3.15
                        </p>
                    </Col>
                </Row>
            </div>
            <hr />
        </div>
    );
};
export default Order;

Order.propTypes = {
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

Order.defaultProps = {
    name: "Pizza four",
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
