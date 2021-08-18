import React from "react";

import CartSidebar from "./CartSidebar";
import { Provider } from "react-redux";
import store from "../../../store";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "CartSidebar",
    component: CartSidebar,
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

const Template = (args) => <CartSidebar {...args} />;

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
