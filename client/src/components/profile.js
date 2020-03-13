import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('userToken');
        const decode = jwt_decode(token);
        this.setState({
            first_name: decode.first_name,
            last_name: decode.last_name,
            email: decode.email
        })
    }
    render() {
        return (
            <React.Fragment>
                <p>First Name</p>
                <h1>{this.state.first_name}</h1>
                <br /><br />
                <p>Last Name</p>
                <h1>{this.state.last_name}</h1>
                <br /><br />
                <p>Email</p>
                <h1>{this.state.email}</h1>
            </React.Fragment>
        )
    }

}

export default Profile;