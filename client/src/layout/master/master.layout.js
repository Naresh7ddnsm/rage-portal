import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/header.component";
import AsideNavigation from "../../components/aside-navigation/aside-navigation.component";
import PageHeader from "../../components/page-header/page-header.component";

import Preloader from "../../components/preloader/preloader.component";


import { Store } from "../../store/store";

const MasterLayout = props => {

    const [state, setState] = useContext(Store);
    const [preLoading, setPreLoading] = useState(true);

    useEffect(() => {
        

        // setPreLoading(false);
        axios.get("/api/active").then(res => {
            // console.log('master: ', res)

            if(!res.data.error) {
                const USER = res.data;
                const UPDATE_USER = { ...USER, USER_STATUS: true }
                setState(prev => ({ ...prev, AUTH_USER: UPDATE_USER }))
                setPreLoading(false);
                // if (!state.AUTH_USER.USER_STATUS) { setState(prev => ({ ...prev, AUTH_USER: UPDATE_USER })) }
            } else {
                setState({...state, AUTH_USER: ""})   
                axios.post("/api/logout").then(res => {
                    setPreLoading(false);
                    props.history.push("/")
                }).catch(err => {
                    console.log("error: ", err);
                })

            }
        })
        .catch(err => {
            console.log({"error": err}); 
        });
    }, []);

    return (
        <React.Fragment>
            { preLoading && <Preloader /> }
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