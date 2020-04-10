import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { login, validate, getUser } from "../functionality/functionality";
import { Loader } from "../loader/loader.component";

import { Store } from "../../store/store";

import "./login.component.css";

const Login = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [state, setState] = useContext(Store);

    const updateEmail = e => {
        setEmail(e.target.value.trim());
    }
    const updatePassword = e => {
        setPassword(e.target.value);
    }

    // const storeUser = () => {
    //     const USER = getUser();
    //     const UPDATE_USER = { ...USER, USER_STATUS: true }
    //     setState(prev => ({ ...prev, AUTH_USER: UPDATE_USER }));
    // }

    const onSubmit = (e) => {
        e.preventDefault();
        setError('')

        const validate_form = validate('login-form');

        if (validate_form.isValid) {
            const user = {
                email, password
            }
            setLoading(true)

            login(user)
                .then(res => {
                    if (!res.error) {
                        // storeUser();
                        props.history.push('/profile');
                    } else {
                        setError(res.error);
                        setLoading(false);
                    }
                })
                .catch(err => {
                    setError('Something went wrong!');
                    setLoading(false);
                })
        }
    }
    return (
        <React.Fragment>
            <div className="form-wrapper position-relative">
                {loading ? <Loader /> : null}
                <div id="logo">
                    <img className="logo" src="assets/media/image/logo.png" alt="image" />
                </div>
                <h5>Sign in</h5>
                <form onSubmit={onSubmit} id="login-form" className="login-form">
                    <div className="form-group">
                        <input type="text" onChange={updateEmail} autoComplete="false" data-type="email" name="email" value={email} className="form-control required" placeholder="Username or email" autoFocus />
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="form-group">
                        <input type="password" onChange={updatePassword} data-type="empty" name="password" value={password} className="form-control required" placeholder="Password" />
                        <div className="invalid-feedback"></div>
                        {error ? <p className="user_avilable_message"> {error} </p> : null}

                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                    <hr />
                    <p className="text-muted">Don't have an account?</p>
                    <Link to="/register" className="btn btn-outline-light btn-sm">Register now!</Link>
                </form>
            </div>
        </React.Fragment>
    )

}

export default withRouter(Login);