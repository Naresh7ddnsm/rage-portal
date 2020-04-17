import React, { useContext } from "react";
import {Link} from "react-router-dom";

import { Store } from "../../store/store";

const ProfileInfo = (props) => {

    const [state, setState] = useContext(Store);
    // const { first_name, last_name, email } = state.AUTH_USER;
    // const { first_name, last_name, email, address, dob, city, position, phonenumber } = props.user;
     const { first_name, last_name, email, address, dob, city, position, phonenumber } = state.AUTH_USER;
    

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-title d-flex justify-content-between align-items-center">
                    Information
                    <Link to="/profile/update" className="btn btn-outline-light btn-sm">
                    <i data-feather="edit-2" className="mr-2"></i> Update
                    </Link>
                    {/* <a href="#" className="btn btn-outline-light btn-sm">
                        <i data-feather="edit-2" className="mr-2"></i> Edit
                    </a> */}
                </h6>
                <div className="row mb-2">
                    <div className="col-6 text-muted">First Name:</div>
                    <div className="col-6">{first_name}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 text-muted">Last Name:</div>
                    <div className="col-6">{last_name}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 text-muted">DOB:</div>
                    <div className="col-6">{dob}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 text-muted">Position:</div>
                    <div className="col-6">{position}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 text-muted">City:</div>
                    <div className="col-6">{city}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 text-muted">Address:</div>
                    <div className="col-6">{address}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 text-muted">Phone:</div>
                    <div className="col-6">{phonenumber}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 text-muted">Email:</div>
                    <div className="col-6">{email}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;