import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { APP_NAME } from "../../../config";

const FooterMenu = (props) => {
    return (
        <footer id="footer">
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mt-3 text-left ">
                            <h3>{APP_NAME}</h3>
                            <ul className="footer-links">
                                <li>
                                    <Link to="/pages/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/pages/careers">Culture</Link>
                                </li>
                                <li>
                                    <Link to="/pages/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/pages/terms-and-conditions">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/privacy">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/pages/hiring">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 mt-3 text-left ">
                            <h3>For Foodies</h3>
                            <h5>Become a member</h5>
                            <p>Subscribe to our newsletter</p>
                            <button className="btn btn-warning w-100">
                                Register with us
                            </button>
                            <div className="linear-links">
                                <a href="#"> Blogger</a>
                                <a href="#"> Help</a>
                                <a href="#"> Code of conduct</a>
                                <a href="#"> Verified Users</a>
                            </div>
                        </div>

                        <div className=" col-md-4  mt-3 text-left ">
                            <h3>For Restaurants</h3>
                            <h5>Get Your Store Online</h5>
                            <p>Partner with us</p>
                            <button className="btn btn-info w-100">
                                Register with us
                            </button>
                            <div className="linear-links">
                                <a href="#"> Advertise</a>
                                <a href="#"> Add a Restaurant</a>
                                <a href="#"> Claim your Listing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="copyrights p-3">
                    © Copyright 2021 by <Link to="/">{APP_NAME}</Link>. All
                    Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default FooterMenu;
