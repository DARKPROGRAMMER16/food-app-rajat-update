import React from "react";
import { Card } from "react-bootstrap";
import CurrentOrder from "./CurrentOrder";
import PastOrder from "./PastOrder";
import UserApp from "../common/UserApp";
import Order from "./order";

const Orders = () => {
    return (
        <UserApp>
            <Card className="border-warning p-4">
                <h4>Current Orders</h4>
                <Order />
                <Order />
                <Order />
                <Order />
                <hr />
                <h4>Past Orders</h4>
                <Order />
                <Order />
                <Order />
                <Order />
            </Card>
        </UserApp>
    );
};

export default Orders;
