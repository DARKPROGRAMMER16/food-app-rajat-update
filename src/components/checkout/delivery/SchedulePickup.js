import { Form } from "react-bootstrap";
import React, { useState } from "react";
import "./SchedulePickup.css";

const SchedulePickup = (props) => {
    const [date, setDate] = useState(2);

    function ShowDate({ dateNumber, day }) {
        return (
            <div
                className={date === dateNumber && "bg-orange"}
                onClick={() => setDate(dateNumber)}
            >
                {day} <br /> {dateNumber}
            </div>
        );
    }

    return (
        <div className="p-3">
            <h4 className="text-center fw-bold">Schedule Your Pickup</h4>
            <div className="mx-auto px-auto text-center my-4">
                <div className="mx-auto w-auto schedule-dates d-flex">
                    <ShowDate dateNumber={1} day="Mon" />
                    <ShowDate dateNumber={2} day="Tue" />
                    <ShowDate dateNumber={3} day="Wed" />
                    <ShowDate dateNumber={4} day="Thu" />
                    <ShowDate dateNumber={5} day="Fri" />
                    <ShowDate dateNumber={6} day="Sat" />
                    <ShowDate dateNumber={7} day="Sun" />
                </div>
            </div>
            <div className="m-2">
                <Form className="schedule-options">
                    <Form.Check
                        label="11:00 am - 11:30 am"
                        name="radio"
                        type="radio"
                    />
                    <Form.Check
                        label="11:00 am - 11:30 am"
                        name="radio"
                        type="radio"
                    />
                    <Form.Check
                        label="11:00 am - 11:30 am"
                        name="radio"
                        type="radio"
                    />
                    <Form.Check
                        label="11:00 am - 11:30 am"
                        name="radio"
                        type="radio"
                    />
                </Form>
            </div>
            <div className="d-flex my-3">
                <button
                    className="btn  w-50 m-2"
                    onClick={() => {
                        props.onHide();
                    }}
                >
                    CANCEL
                </button>
                <button
                    className="btn btn-warning  w-50 m-2"
                    onClick={() => {
                        props.onHide();
                    }}
                >
                    Schedule Pickup
                </button>
            </div>
        </div>
    );
};

export default SchedulePickup;
