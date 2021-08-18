import React from "react";
import Bg from "../../../assets/images/Bg.jpg";
import HomeProduct from "../../common/product/HomeProduct";
import { Dropdown } from "react-bootstrap";

const SecondSection = (props) => {
    return (
        <div className="bg-light">
            <div className="container">
                <div className="search text-center w-75 d-flex">
                    <input
                        type="text"
                        style={{ padding: "2px" }}
                        placeholder="Search your favorite food"
                    />
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="secondary"
                            id="dropdown-basic"
                            className="btn-sm"
                        >
                            <i className="fa fa-filter" /> Filters
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">All</Dropdown.Item>
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
                    <button className="btn btn-sm btn-primary">
                        <i className="fa fa-search" />
                    </button>
                </div>
                <div>
                    <div className="py-5 text-center">
                        <h1>Welcome</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;
