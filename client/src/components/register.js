import React, { Component } from "react";

import { register } from "./functionality/functionality";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(user)
            .then(res => {
                if (!res.error) {
                    this.props.history.push('/login');
                }
            })
            .catch(err => {
                console.log('register err: ' + err);
            })
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit} >
                    <label> First name </label><br />
                    <input type="text" onChange={this.onChange} name="first_name" value={this.state.first_name} /><br />
                    <label> last_name </label><br />
                    <input type="text" onChange={this.onChange} name="last_name" value={this.state.last_name} /><br />
                    <label> Email </label><br />
                    <input type="text" onChange={this.onChange} name="email" value={this.state.email} /><br />
                    <label> password </label><br />
                    <input type="password" onChange={this.onChange} name="password" value={this.state.password} /><br />
                    <button type="submit">Register</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Register;