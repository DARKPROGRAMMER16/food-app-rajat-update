import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    if (!console.group) {
        return rawDispatch;
    }
    return (action) => {
        console.group(action.type);
        console.log("%c prev state", "color:gray", store.getState());
        console.log("%c action", "color:blue", action);
        const returnValue = rawDispatch(action);
        console.log("%c prev state", "color:green", store.getState());
        console.groupEnd(action.type);
        return returnValue;
    };
};

export default function initStore() {
    const store = createStore(
        reducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
    if (process.env.REACT_APP_ENVIRONMENT === "local") {
        store.dispatch = addLoggingToDispatch(store);
    }
    return store;
}
