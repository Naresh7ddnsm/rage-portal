import React from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

// const AuthUser = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={
//             props =>
//                 localStorage.getItem('userToken') ? (
//                     <Redirect
//                         to={{
//                             pathname: "/profile",
//                             state: { from: props.location }
//                         }}
//                     />
//                 ) : (
//                         <Component {...props} />
//                     )
//         }
//     />
// )


class AuthUser extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            isLoading: true,
            isLoggedIn: false
        };


        axios.get("/users/auth", {withCredentials: true})
            .then(res => {
                if(res.data.error){
                    this.setState(() => ({ isLoading: false, isLoggedIn: false }));
                } else { 
                    this.setState(() => ({ isLoading: false, isLoggedIn: true }));
                }
            })
            .catch(err => {
                this.setState(() => ({ isLoading: false, isLoggedIn: false }));
            })
    }

    render() {
        return this.state.isLoading ? null :
            this.state.isLoggedIn ?
            <Redirect to={{ pathname: '/profile', state: { from: this.props.location } }} /> :
            <Route path={this.props.path} component={this.props.component} exact={this.props.exact}/>

    }

}

export default AuthUser;