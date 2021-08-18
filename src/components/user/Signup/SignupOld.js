import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import SelectRole from "../common/SelectRole";
import CreateAccount from "./section/CreateAccount";
import Helmet from "react-helmet";
import { capitalize } from "../../../helpers/function";
import { Redirect } from "react-router-dom";

const Signup = (props) => {
    //const dispatch = useDispatch();
    //const user = useSelector((state) => state.user.data);

    const [values, setValues] = useState({
        input: { role: "" },
        selected: "",
        buttonDisabled: true,
        currentForm: props.match.params.role,
        signup: props.match.params.role
    });
    useEffect(() => {}, []);

    const onRoleChange = (role) => {
        setValues({
            ...values,
            input: { ...values.input, role: role },
            // currentForm: "createAccount",
            currentForm: role
        });
    };

    const onSignup = (role) => {
        setValues({
            ...values,
            input: { ...values.input, role: role },
            currentForm: role
        });
    };

    const redirectSignup = () => {
        if (props.match.params.role !== values.currentForm) {
            return <Redirect to={"/signup/" + values.currentForm} />;
        } else return "";
    };
    const selectRoleForm = () => {
        return <SelectRole onRoleChange={onRoleChange} />;
    };

    return (
        <div>
            {redirectSignup()}
            <Helmet>
                <title>Create {capitalize(values.input.role)} Account </title>
                <meta name="description" content="Signup with your details" />
            </Helmet>
            <div>Signup</div>
        </div>
    );
};

export default Signup;
