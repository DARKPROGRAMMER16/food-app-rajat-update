import React from "react";
import App from "../../common";
import "./common.css";

const UserCard = (props) => {
    const { children, title, className } = props;

    return (
        <App>
            <div className="user-bg">
                <div className="container">
                    <div className="row">
                        <div
                            className={
                                "col-11 col-md-10 col-lg-6 mx-auto py-5 " +
                                className
                            }
                        >
                            <div className="card user-card">
                                <div className="card-header">{title}</div>
                                <div
                                    className="card-body"
                                    style={{ minHeight: "50vh" }}
                                >
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default UserCard;
