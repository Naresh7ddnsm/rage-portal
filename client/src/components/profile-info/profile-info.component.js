import React, { useContext } from "react";

import { Store } from "../../store/store";

const ProfileInfo = () => {

    const [state, setState] = useContext(Store);
    const { first_name, last_name, email } = state.AUTH_USER;

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-title d-flex justify-content-between align-items-center">
                    Information
                    <a href="#" className="btn btn-outline-light btn-sm">
                        <i data-feather="edit-2" className="mr-2"></i> Edit
                    </a>
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
                    <div className="col-6 text-muted">Age:</div>
                    <div className="col-6">26</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 text-muted">Position:</div>
                    <div className="col-6">Web Designer</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 text-muted">City:</div>
                    <div className="col-6">New York, USA</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 text-muted">Address:</div>
                    <div className="col-6">228 Park Ave Str.</div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 text-muted">Phone:</div>
                    <div className="col-6">+1-202-555-0134</div>
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