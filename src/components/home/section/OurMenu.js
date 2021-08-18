import React from "react";
import Bg from "../../../assets/images/Bg.jpg";
import HomeProduct from "../../common/product/HomeProduct";
import { Dropdown } from "react-bootstrap";

const OurMenu = (props) => {
    return (
        <div className="bg-white py-5">
            <div className="container">
                <h3>Our Menu</h3>
                <div className="d-flex py-3">
                    <div className="flex-fill">
                        <div className="home-menu-pills">
                            <button className="btn btn-sm btn-outline-warning">
                                Breakfast Platters
                            </button>
                            <button className="btn btn-sm">Sandwiches </button>
                            <button className="btn btn-sm "> Burgers</button>
                            <button className="btn btn-sm btn-outline-warning">
                                Continental
                            </button>
                        </div>
                    </div>
                    <div className="flex-column ">
                        <div className="d-flex home-menu-right">
                            <button className="btn btn-sm btn-success">
                                {" "}
                                Veg
                            </button>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className="btn-sm"
                                >
                                    Price
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        All
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                        Less than 100
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        Less than 500
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        Less than 1000
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown-basic"
                                    className="btn-sm"
                                >
                                    <i className="fa fa-filter" /> Filters
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        All
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                        Less than 100
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        Less than 500
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        Less than 1000
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Array(9)
                        .fill(1)
                        .map(() => {
                            return (
                                <div className="col-sm-6 col-md-6 col-lg-4 p-0">
                                    <div className="rounded bg-white m-2 p-0 shadow">
                                        <HomeProduct />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default OurMenu;
