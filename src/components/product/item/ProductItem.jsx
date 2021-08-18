import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ProductItem.css";
import "../../../index.css";
import { Col, Modal as ModalBootstrap, Row } from "react-bootstrap";
import Rating from "../../common/Rating";
import Modal from "react-modal";
import AddOrderItem from "../../order/AddOrderItem";
import productImage from "../../../assets/images/food.jpg";

const ProductItem = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [readMore, setReadMore] = useState(false);
    const extracontent = <p className="secondary-text">{props.description}</p>
    const Linkname = readMore ? <p>Read Less ..</p>: <p>{props.description.slice(0,16)}<br/>Read more...</p>

    return (
        <>
            <div>
                <Row>
                    <Col xs={4}>
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
                                            <i className="fas fa-star mr-2" />{" "}
                                            Best Seller
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex-fill "></div>
                            <div className="d-flex">
                                <div className="flex-fill">
                                    <Rating />
                                    <br />
                                    <span className="secondary-text sm-2">
                                        <i className="far fa-clock mr-2" />
                                        15-25 min
                                    </span>
                                </div>

                                <div className="flex-column pr-5">
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => setModalIsOpen(true)}
                                    >
                                        Add
                                    </button>
                                    <AddOrderModal
                                        product={props}
                                        show={modalIsOpen}
                                        onHide={() => setModalIsOpen(false)}
                                    />

                                    {/*<Modal
                                        isOpen={modalIsOpen}
                                        style={customStyles}
                                        onRequestClose={() =>
                                            setModalIsOpen(false)
                                        }
                                    >
                                        <button onClick={setModalIsOpenToFalse}>
                                            x
                                        </button>
                                        <AddOrderItem />
                                    </Modal>*/}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="pt-1">
                    {/* <p className="secondary-text">{props.description}</p> */}
                    <a onClick={() => {setReadMore(!readMore)}}><p className="secondary-text">{Linkname}</p></a>
                    {readMore && extracontent}
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

function AddOrderModal(props) {
    return (
        <ModalBootstrap
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalBootstrap.Body>
                <AddOrderItem {...props.product} onHide={props.onHide} />
            </ModalBootstrap.Body>
        </ModalBootstrap>
    );
}
