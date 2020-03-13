import React from "react";
import Register from "../../components/register/register.component";
import { updateBodyClass } from "../../components/functionality/functionality";

function register() {
    updateBodyClass('form-membership');
    return <Register />
}

export default register;