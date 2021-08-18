import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../index.css";

import CartItem from "./index";

export default {
    title: "CartItem",
    component: CartItem,
    argTypes: {
        backgroundColor: { control: "color" }
    }
};

const Template = (args) => <CartItem {...args} />;

export const Default = Template.bind({});

export const VegItem = Template.bind({});
VegItem.args = {
    primary: true,
    name: "Chicken Burger",
    price: "12",
    veg: true,
    quantity: 1,
    id: 22
};
export const NonVegItem = Template.bind({});
NonVegItem.args = {
    primary: true,
    name: "Chicken Burger",
    price: "12",
    veg: false,
    quantity: 2,
    id: 23
};
