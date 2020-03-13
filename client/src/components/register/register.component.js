import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { register, validate } from "../functionality/functionality";

import "./register.component.css";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            loading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();

        this.setState({
            error: ''
        })

        const validate_form = validate('register-form');

        if (validate_form.isValid) {

            this.setState({
                loading: true
            })

            const user = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password
            }

            register(user)
                .then(res => {
                    this.setState({
                        loading: false
                    })
                    console.log('reg comp: ', res);
                    if (!res.error) {
                        this.props.history.push('/login');
                    }
                })
                .catch(err => {
                    this.setState({
                        loading: true
                    })
                    console.log('register err: ' + err);
                })
        }
    }
    render() {
        const { loading } = this.state;
        return (
            <React.Fragment>
                <div className="form-wrapper position-relative">
                    {loading ? <div className="progress login-progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '100%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> : null}
                    <div id="logo">
                        <img className="logo" src="assets/media/image/logo.png" alt="image" />
                    </div>
                    <h5>Create account</h5>
                    <form onSubmit={this.onSubmit} id="register-form" className="register-form">
                        <div className="form-group">
                            <input onChange={this.onChange} data-type="alpha" name="first_name" value={this.state.first_name} type="text" className="form-control required" placeholder="Firstname" autoFocus />
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="form-group">
                            <input onChange={this.onChange} data-type="alpha" name="last_name" value={this.state.last_name} type="text" className="form-control required" placeholder="Lastname" />
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="form-group">
                            <input onChange={this.onChange} data-type="email" name="email" value={this.state.email} className="form-control required" placeholder="Email" />
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="form-group">
                            <input onChange={this.onChange} data-type="password" name="password" value={this.state.password} type="password" className="form-control required" placeholder="Password" />
                            <div className="invalid-feedback"></div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                        <hr />
                        <p className="text-muted">Already have an account?</p>
                        <Link to="/login" className="btn btn-outline-light btn-sm">Sign in!</Link>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Register);