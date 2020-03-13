import React from "react";
import { Live404component } from "../../components/live404compoent/live404compoent.component";
import { updateBodyClass } from "../../components/functionality/functionality";

const live404 = () => {
    updateBodyClass('error-page bg-white');
    return <Live404component />
}

export default live404;