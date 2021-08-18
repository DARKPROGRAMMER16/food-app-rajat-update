import React from "react";
import {
    Button,
    Row,
    Col,
    Tab,
    Nav,
    Modal as ModalBootstrap
} from "react-bootstrap";
import "./Menu.css";
import CartSidebar from "../../cart/Sidebar";
import ProductItem from "../../product/item";
import { useSelector } from "react-redux";

const Menu = () => {
    const productItems = useSelector((state) => state.product.productList.data);
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <section className="bg-white">
                <div className="container">
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <div
                                className="input-group ml-2 shadow border-0 rounded search"
                                style={{ backgroundColor: "#e9ecef" }}
                            >
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    placeholder="Search your fav food"
                                />
                                <span
                                    className="input-group-text bg-white border-0 px-4"
                                    id="basic-addon1"
                                >
                                    <i className="fa fa-search" />
                                </span>
                            </div>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </div>

                <div className="container">
                    <Row className="">
                        <Col md={8} className="py-5">
                            <Tab.Container
                                id="left-tabs-example"
                                defaultActiveKey={0}
                            >
                                <Row>
                                    <Col sm={3}>
                                        <div className="d-none d-sm-block">
                                            <Nav
                                                variant="pills"
                                                className="flex-column"
                                            >
                                                {productItems?.map(
                                                    (item, index) => {
                                                        return (
                                                            <Nav.Item>
                                                                <Nav.Link
                                                                    eventKey={
                                                                        index
                                                                    }
                                                                >
                                                                    {item.name}
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                        );
                                                    }
                                                )}
                                            </Nav>
                                        </div>
                                        <div className="d-sm-none popup-menu">
                                            <div
                                                className="w-100"
                                                style={{
                                                    position: "fixed",
                                                    bottom: "10px",
                                                    textAlign: "center",
                                                    zIndex: 9
                                                }}
                                            >
                                                <Button
                                                    variant="primary"
                                                    onClick={() =>
                                                        setModalShow(true)
                                                    }
                                                    className="mx-auto"
                                                >
                                                    Menu
                                                </Button>
                                            </div>

                                            <MyVerticallyCenteredModal
                                                productItems={productItems}
                                                show={modalShow}
                                                onHide={() =>
                                                    setModalShow(false)
                                                }
                                            />
                                        </div>
                                    </Col>
                                    <Col sm={9} className={"food-items"}>
                                        <Tab.Content>
                                            {productItems?.map(
                                                (item, index) => {
                                                    return (
                                                        <Tab.Pane
                                                            eventKey={index}
                                                        >
                                                            <div className="px-md-3">
                                                                <h2>
                                                                    {item?.name}
                                                                </h2>
                                                                <p>
                                                                    {
                                                                        item
                                                                            ?.list
                                                                            ?.length
                                                                    }{" "}
                                                                    Items
                                                                </p>
                                                                {item?.list?.map(
                                                                    (
                                                                        food,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <div
                                                                                key={
                                                                                    index
                                                                                }
                                                                            >
                                                                                <ProductItem
                                                                                    {...food}
                                                                                />
                                                                            </div>
                                                                        );
                                                                    }
                                                                )}
                                                            </div>
                                                        </Tab.Pane>
                                                    );
                                                }
                                            )}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                        <Col md={4} className="py-5">
                            <CartSidebar />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default Menu;

function MyVerticallyCenteredModal(props) {
    return (
        <ModalBootstrap
            {...props}
            size="xs"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalBootstrap.Body
                onClick={() => {
                    props.onHide();
                }}
            >
                <Nav variant="pills" className="flex-column popup-menu">
                    {props.productItems?.map((item, index) => {
                        return (
                            <Nav.Item>
                                <Nav.Link eventKey={index}>
                                    {item.name}
                                </Nav.Link>
                            </Nav.Item>
                        );
                    })}
                </Nav>
            </ModalBootstrap.Body>
        </ModalBootstrap>
    );
}
