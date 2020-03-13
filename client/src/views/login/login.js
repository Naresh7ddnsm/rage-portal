import React from "react";
import Login from "../../components/login/login.component";
import { updateBodyClass } from "../../components/functionality/functionality";

function login() {
    updateBodyClass('form-membership');
    return <Login />
}

export default login;