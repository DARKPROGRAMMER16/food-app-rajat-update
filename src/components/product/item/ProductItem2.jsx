import React, { useState } from "react";
import {
    FaPlus,
    FaMinus,
    FaStop,
    FaArrowRight,
    FaStar,
    FaClock
} from "react-icons/fa";
import PropTypes from "prop-types";
import "./ProductItem.css";
import "../../../index.css";
import { Col, Row } from "react-bootstrap";
import Rating from "../../common/Rating";
import Modal from "react-modal";
import AddOrderItem from "../../order/AddOrderItem";

const ProductItem = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true);
    };

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false);
    };

    const customStyles = {
        content: {
            top: "12%",
            left: "20%",
            right: "20%",
            bottom: "3%"
            /*  marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor       : '#F0AA89'   */
        }
    };

    return (
        <>
            <div>
                <div>
                    <div className="d-flex">
                        <div className="flex-column">
                            <figure className="figure text-center">
                                <img
                                    src={props.image}
                                    alt="img"
                                    width="100rem"
                                    className="flex-fill"
                                />
                                <figcaption className="figure-caption">
                                    {props.cal} cal
                                </figcaption>
                            </figure>
                        </div>
                        <div className="flex-fill position-relative p-3">
                            <div className="d-flex flex-column">
                                <div className="d-flex mb-auto">
                                    <div className="flex-fill">
                                        <h5>{props.name}</h5>
                                        <h6>${props.price}</h6>
                                    </div>
                                    <div className="flex-column text-orange">
                                        {props.best_seller && (
                                            <>
                                                <FaStar className="my-auto " />{" "}
                                                Best Seller
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-fill "></div>
                                <div className="d-flex">
                                    <div className="flex-fill">
                                        <Rating stars={props.stars} />
                                        <br />
                                        <span className="secondary-text sm-2">
                                            <FaClock className={"m-1"} />
                                            15-25 min
                                        </span>
                                    </div>

                                    <div
                                        className="flex-column pr-5"
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            right: 0
                                        }}
                                    >
                                        <button
                                            className="btn btn-warning btn-sm "
                                            onClick={setModalIsOpenToTrue}
                                        >
                                            Add
                                        </button>

                                        <Modal
                                            isOpen={modalIsOpen}
                                            style={customStyles}
                                            onRequestClose={() =>
                                                setModalIsOpen(false)
                                            }
                                        >
                                            <button
                                                onClick={setModalIsOpenToFalse}
                                            >
                                                x
                                            </button>
                                            <AddOrderItem />
                                        </Modal>

                                        {/*
                                    <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                                     <button onClick={setModalIsOpenToFalse}>x</button>
                                     <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                     </Modal.Header>
                                     <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                    </Modal>
 */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="secondary-text">{props.description}</p>
                    </div>
                </div>

                <hr />
            </div>
        </>
    );
};
export default ProductItem;

ProductItem.propTypes = {
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

ProductItem.defaultProps = {
    name: "Pizza four",
    image: "/assets/images/food/pizza4.jpg",
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

function ok(props) {
    return (
        <>
            <Col xs={4}>
                <figure className="figure text-center">
                    <img
                        src={props.image}
                        alt="img"
                        width="100%"
                        height="100%"
                        className="flex-fill"
                    />
                    <figcaption className="figure-caption">
                        {props.cal} cal
                    </figcaption>
                </figure>
            </Col>
            <Col xs={8} className="position-relative">
                <div className="d-flex flex-column">
                    <div className="d-flex mb-auto">
                        <div className="flex-fill">
                            <h5>{props.name}</h5>
                            <h6>${props.price}</h6>
                        </div>
                        <div className="flex-column text-orange">
                            {props.best_seller && (
                                <>
                                    <i className="fas fa-star mr-2" /> Best
                                    Seller
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex-fill "></div>
                    <div className="d-flex">
                        <div className="flex-fill">
                            <Rating stars={props.stars} />
                            <br />
                            <span className="secondary-text sm-2">
                                <i className="far fa-clock mr-2" />
                                15-25 min
                            </span>
                        </div>

                        <div className="flex-column pr-5">
                            {/* <button
                                className="btn btn-warning btn-sm "
                                onClick={setModalIsOpenToTrue}
                            >
                                Add
                            </button>

                            <Modal
                                isOpen={modalIsOpen}
                                style={customStyles}
                                onRequestClose={() => setModalIsOpen(false)}
                            >
                                <button onClick={setModalIsOpenToFalse}>
                                    x
                                </button>
                                <AddOrderItem />
                            </Modal>*/}

                            {/*
                                    <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                                     <button onClick={setModalIsOpenToFalse}>x</button>
                                     <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                     </Modal.Header>
                                     <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                    </Modal>
 */}
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}
