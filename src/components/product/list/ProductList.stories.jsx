import React from "react";

import { Provider } from "react-redux";
import store from "../../../store";
import { BrowserRouter } from "react-router-dom";
import ProductList from "./index";

export default {
    title: "ProductList",
    component: ProductList,
    decorators: [
        (story) => (
            <Provider store={store()}>
                <BrowserRouter>{story()}</BrowserRouter>
            </Provider>
        )
    ]
    /*argTypes: {
        backgroundColor: { control: "color" }
    }*/
};

const Template = (args) => <ProductList {...args} />;

export const WithData = Template.bind({});
WithData.args = {
    loading: false
};

export const Loading = Template.bind({});
Loading.args = {
    cartItems: [],
    loading: true
};

export const Empty = Template.bind({});
Empty.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false
};
