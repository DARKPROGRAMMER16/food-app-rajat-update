import React from "react";

const Coupon = (props) => {
    const { coupon } = props;
    return (
        <div className="card offer-card shadow-sm mb-4 border-0">
            <div className="card-body">
                <h5 className="card-title">
                    <img src="img/bank/1.png" alt className />
                    {coupon.code}
                </h5>
                <h6 className="card-subtitle mb-2 text-block">
                    Get 50% OFF on your first Food eat order
                </h6>
                <p className="card-text">{coupon.description}</p>
                <button
                    type="button"
                    className="card-btn mr-3 p-0 btn btn-link"
                >
                    COPY CODE
                </button>
                <a className="card-link" href="/offers">
                    KNOW MORE
                </a>
            </div>
        </div>
    );
};
export default Coupon;
