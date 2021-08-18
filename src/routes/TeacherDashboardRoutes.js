import PrivateRoute from "./helper/PrivateRoute";
import React from "react";
import NotFound from "../components/common/NotFound";

export default [<PrivateRoute path="/teacher/" component={NotFound} />];
