import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthUser = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props =>
                localStorage.getItem('userToken') ? (
                    <Redirect
                        to={{
                            pathname: "/profile",
                            state: { from: props.location }
                        }}
                    />
                ) : (
                        <Component {...props} />
                    )
        }
    />
)

export default AuthUser;