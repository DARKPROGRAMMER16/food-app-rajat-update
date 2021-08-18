import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../../../index.css";

import ProductItem from "./index";

export default {
    title: "ProductItem",
    component: ProductItem,
    argTypes: {
        backgroundColor: { control: "color" }
    }
};

const Template = (args) => <ProductItem {...args} />;

export const Default = Template.bind({});

/*
export const VegItem = Template.bind({});
VegItem.args = {
    primary: true,
    name: "Chicken Burger",
    price: "12",
    veg: true,
    quantity: 1,
    id: 22
};
*/
