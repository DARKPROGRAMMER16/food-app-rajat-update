import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import profile_image from "../../../assets/images/profile_image.png";

const currentTabClass = (history, path) => {
    if (history.location.pathname === path) {
        return "nav-link active text-orange fw-bold";
    } else {
        return "nav-link text-black fw-bold";
    }
};

const Sidebar = (history) => {
    let history2 = useHistory();

    function navLink(slug, name, icon) {
        return (
            <li className="nav-item">
                <Link className={currentTabClass(history, slug)} to={slug}>
                    {icon} {name}
                </Link>
            </li>
        );
    }

    return (
        <>
            <Card className="mx-2 p-2 rounded">
                <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                    {navLink(
                        "/profile",
                        "Profile",
                        <i className="fa fa-user m-1" />
                    )}
                    {navLink(
                        "/orders",
                        "Orders",
                        <i className="fa fa-credit-card m-1" />
                    )}
                    {navLink(
                        "/rewards",
                        "Reward points",
                        <i className="fa fa-trophy m-1" />
                    )}

                    {navLink(
                        "/payments",
                        "Payments",
                        <i className="fa fa-credit-card m-1" />
                    )}
                    {navLink(
                        "/notification",
                        "Notification",
                        <i className="fa fa-bell m-1" />
                    )}
                    {navLink(
                        "/help",
                        "Help",
                        <i className="fa fa-shopping-bag m-1" />
                    )}
                </ul>
            </Card>
        </>
    );
};

export default withRouter(Sidebar);
