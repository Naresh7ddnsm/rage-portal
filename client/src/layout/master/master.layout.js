import React, { useContext, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/header.component";
import AsideNavigation from "../../components/aside-navigation/aside-navigation.component";
import PageHeader from "../../components/page-header/page-header.component";
import { getUser } from "../../components/functionality/functionality";

import { Store } from "../../store/store";

const MasterLayout = props => {

    const [state, setState] = useContext(Store);
    let currentLocationPath = props.location.pathname 
    //const USER = getUser();
    //const UPDATE_USER = { ...USER, USER_STATUS: true }
    //if (!state.AUTH_USER.USER_STATUS) { setState(prev => ({ ...prev, AUTH_USER: UPDATE_USER })) }
    return (
        <React.Fragment>
            <Header />
            <div id="main">
                <AsideNavigation />
                <div className="main-content">
                    <PageHeader />
                    {props.children}
                </div>
            </div>

        </React.Fragment>
    )

}

export default withRouter(MasterLayout);