import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }

    logout(event) {
        event.preventDefault();
        localStorage.removeItem('userToken');
        this.props.history.push('/');
    }

    render() {
        const loginRegLinks = (
            <p>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </p>
        )
        const userLinks = (
            <p>
                <Link to="/profile">User</Link>
                <a onClick={this.logout} href="#">Logout</a>
            </p>
        )
        return (
            <React.Fragment>
                <Link to="/">Home</Link>
                {localStorage.userToken ? userLinks : loginRegLinks}
            </React.Fragment>
        )
    }
}

export default withRouter(NavBar);