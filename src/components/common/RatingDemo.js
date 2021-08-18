import React from "react";
import PropTypes from "prop-types";

const RatingDemo = ({ value, text, color }) => {
    return (
        <>
            <div className="rating">
                <span>
                    <i
                        style={{ color }}
                        className={
                            value >= 1
                                ? "fa fa-star fa-2x m-1"
                                : value >= 0.5
                                ? "fas fa-star-half-alt fa-2x m-1"
                                : "fa fa-star fa-2x m-1"
                        }
                    />
                </span>
                <span>
                    <i
                        style={{ color }}
                        className={
                            value >= 2
                                ? "fa fa-starr fa-2x m-1"
                                : value >= 1.5
                                ? "fas fa-star-half-alt fa-2x m-1"
                                : "fa fa-star fa-2x m-1"
                        }
                    />
                </span>
                <span>
                    <i
                        style={{ color }}
                        className={
                            value >= 3
                                ? "fa fa-star fa-2x m-1"
                                : value >= 2.5
                                ? "fas fa-star-half-alt fa-2x m-1"
                                : "fa fa-star fa-2x m-1"
                        }
                    />
                </span>
                <span>
                    <i
                        style={{ color }}
                        className={
                            value >= 4
                                ? "fa fa-star fa-2x m-1"
                                : value >= 3.5
                                ? "fas fa-star-half-alt fa-2x m-1"
                                : "fa fa-star fa-2x m-1"
                        }
                    />
                </span>
                <span>
                    <i
                        style={{ color }}
                        className={
                            value >= 5
                                ? "fa fa-star fa-2x m-1"
                                : value >= 4.5
                                ? "fas fa-star-half-alt fa-2x m-1"
                                : "fa fa-star fa-2x m-1"
                        }
                    />
                </span>
                <span>{text && text}</span>
            </div>

            {/* 
            <i className="fa fa-star fa-2x m-1" style={{ color: "#ffcd39" }} />
            <i className="fa fa-star fa-2x m-1" style={{ color: "#ffcd39" }} />
            <i className="fa fa-star fa-2x m-1" style={{ color: "#ffcd39" }} />
            <i className="fa fa-star fa-2x m-1" style={{ color: "#ffcd39" }} />
            <i className="fa fa-star fa-2x m-1 secondary-text" />
        */}
        </>
    );
};

RatingDemo.defaultProps = {
    color: "#aeadad"
};

RatingDemo.propTypes = {
    value: PropTypes.number,
    text: PropTypes.string,
    color: PropTypes.string
};

export default RatingDemo;
