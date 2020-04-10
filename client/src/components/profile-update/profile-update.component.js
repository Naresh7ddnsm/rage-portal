import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./profile-update.component.css";
import { validate, update } from "../functionality/functionality";

import Preloader from "../preloader/preloader.component";

import { Store } from "../../store/store";
import Profile from "../../views/profile/profile";

const ProfileUpdate = props => {

    const [_state, _setState] = useContext(Store);


    const form = { first_name: _state.AUTH_USER.first_name, last_name: _state.AUTH_USER.last_name, username: _state.AUTH_USER.username, position: _state.AUTH_USER.position, dob: _state.AUTH_USER.dob, city: _state.AUTH_USER.city, state: _state.AUTH_USER.state, zip: _state.AUTH_USER.zip, phonenumber: _state.AUTH_USER.phonenumber, address: _state.AUTH_USER.address };

    const [profile, setProfile] = useState(form);
    const [error, setError] = useState('');
    const [preLoading, setPreLoading] = useState(false);


    console.log("sadsdsdsdsdssd: ", _state)
    console.log("sadsdsdsdsdssd: ", profile)



    const onSubmit = (e) => {
        e.preventDefault();
        setError('')

        const validate_form = validate('update-form');

        if (validate_form.isValid) {
            update(profile).then(res => {
                const auth_user = {..._state.AUTH_USER, ...res};
                _setState(prev => ({...prev, AUTH_USER: auth_user}))
                props.history.push('/profile');
            }).catch(err => {
                setError('Something went wrong!');
                setPreLoading(false);
            });
        }
    }

    const onChange = e => {
        const ele = e.target;
        setProfile(prev => ({
            ...prev, [ele.name]: ele.value
        }));
    }


    useEffect(() => {
        if(!profile.first_name) {
            if(!_state.AUTH_USER.USER_STATUS){
                setPreLoading(true)
            } else {
                setProfile(_state.AUTH_USER)
                setPreLoading(false)
            }
        }
    })

    const { first_name, last_name, username, position, dob, city, state, zip, phonenumber, address } = profile

    return (

       <React.Fragment>
           { preLoading && <Preloader /> }
            { !preLoading && 
                <div className="card">
                <div className="card">
                    <div className="card-body">
                        <form id="update-form" onSubmit={onSubmit} >
                            <div className="form-row">
                                <div className="col-md-6 mb-4">
                                    <label>First name</label>
                                    <input type="text" data-type="alpha" name="first_name" value={first_name} onChange={onChange} className="form-control required" placeholder="First name" />
                                    <div className="invalid-feedback"> Looks good! </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label>Last name</label>
                                    <input type="text" data-type="alpha" name="last_name" value={last_name} onChange={onChange} className="form-control required" placeholder="Last name" />
                                    <div className="invalid-feedback"> Looks good! </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-12 mb-4">
                                    <label>Username</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" data-type="alpha_space" name="username" value={username} onChange={onChange} className="form-control required" placeholder="Username" aria-describedby="inputGroupPrepend" />
                                        <div className="invalid-feedback"> Please choose a username. </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-4">
                                    <label>Position</label>
                                    <input type="text" data-type="alpha_space" name="position" value={position} onChange={onChange} className="form-control required" placeholder="Position" />
                                    <div className="invalid-feedback"> Please provide a valid city.</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label>DOB <span className="lable-note">(e.g: DD/MM/YYYY)</span></label>
                                    <input type="text" data-type="date" name="dob" value={dob} onChange={onChange} className="form-control required" placeholder="Date of Birth" />
                                    <div className="invalid-feedback"> Please provide a valid city.</div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-4">
                                    <label>City</label>
                                    <input type="text" data-type="alpha_space" name="city" value={city} onChange={onChange} className="form-control required" placeholder="City" />
                                    <div className="invalid-feedback"> Please provide a valid city.</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label>State</label>
                                    <input type="text" data-type="alpha_space" name="state" value={state} onChange={onChange} className="form-control required" placeholder="State" />
                                    <div className="invalid-feedback"> Please provide a valid state. </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-4">
                                    <label>Zip</label>
                                    <input type="text" data-type="number" name="zip" value={zip} onChange={onChange} className="form-control required" placeholder="Zip" />
                                    <div className="invalid-feedback"> Please provide a valid zip. </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label>Phone Number</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">+91</span>
                                        </div>
                                        <input type="text" data-type="number" name="phonenumber" value={phonenumber} onChange={onChange} className="form-control required" placeholder="Phone Number" aria-describedby="inputGroupPrepend" />
                                        <div className="invalid-feedback"> Please choose a username. </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-4">
                                    <label>Address</label>
                                    <div className="input-group">
                                        <textarea type="text" data-type="empty" name="address" value={address} onChange={onChange} className="form-control required form-control auto-height" rows="5"></textarea>
                                        <div className="invalid-feedback"> Please add your address. </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </form>
                    </div>
                </div>
            </div>
            }
       </React.Fragment>

        
    )
}

export default withRouter(ProfileUpdate);