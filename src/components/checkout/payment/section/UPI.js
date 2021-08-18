import React, { useState } from "react";
import bhim from "../../../../assets/images/8.png";
import paytm from "../../../../assets/images/9.png";
import gpay from "../../../../assets/images/10.png";
import { Form } from "react-bootstrap";

const UPI = (props) => {
    const [check, setCheck] = useState(true);
    return (
        <div>
            <div>
                We Accept
                <img src={gpay} alt="gpay" height={20} width={50} />{" "}
                <img src={paytm} alt="rupay" height={20} width={50} />{" "}
                <img src={bhim} alt="bhim" height={20} width={50} />{" "}
            </div>
            <div className="my-3">
                <h5 className="flex-fill my-1">Pay via New VPA</h5>
                <p>You must have a Virtual Payment Address</p>
            </div>
            <div className="my-3">
                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control p-2 w-100"
                        placeholder={"Enter VPA"}
                    />
                </div>

                <Form>
                    <Form.Check
                        type="checkbox"
                        checked={check}
                        onClick={() => setCheck(!check)}
                        id="checkbox"
                        label="Securely save this VPA for a faster checkout next time."
                    />
                </Form>
            </div>

            <div>
                <button
                    className="btn btn-warning w-100 btn-lg"
                    onClick={() => {
                        props.setOrderSuccess(true);
                    }}
                >
                    Verify and Pay
                </button>
            </div>
        </div>
    );
};

export default UPI;
