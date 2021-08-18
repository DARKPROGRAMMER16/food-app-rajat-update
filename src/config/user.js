export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("userToken")) {
        return JSON.parse(localStorage.getItem("userToken"));
    } else {
        return false;
    }
};

export const getUserId = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("userToken")) {
        let userToken = JSON.parse(localStorage.getItem("userToken"));
        return userToken?.userId;
    } else {
        return false;
    }
};
