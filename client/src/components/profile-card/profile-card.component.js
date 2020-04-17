import React, { useState, useEffect, useContext } from "react";
import { Link, WithRoute } from "react-router-dom";
import { Store } from "../../store/store";
import ProfileImageUpload from "./../profile-image-upload/profile-image-upload.component"


const ProfileCard = (props) => {

    const [state, setState] = useContext(Store);
    const [imageStatus, setImageStatus] = useState(false)
    // const { first_name, last_name } = state.AUTH_USER;
    // const { first_name, last_name, position } = props.user;
    const { first_name, last_name, position, image } = state.AUTH_USER;

    return (
        <div className="card">
            <div className="card-body text-center">
                <figure className="avatar avatar-xl m-b-20">
                    {/* <img src="assets/media/image/user/women_avatar1.jpg" className="rounded-circle" alt="..." /> */}

                    { image ? <img src={`${image}`} className="rounded-circle" alt="..." /> : <span className="avatar-title rounded-circle">{first_name ? `${first_name.charAt(0)}` : null}</span>}

                    {/* <img src={image ? `${image}` : null} className="rounded-circle" alt="..." /> */}
                    {/* <img src={image ? `${image}` : null} className="rounded-circle" alt="..." /> */}
                </figure>
                <h5 className="mb-1"> {`${first_name} ${last_name}`}</h5>
                <p className="text-muted small"> {position}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repudiandae eveniet
                    harum.</p>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#profileImageModal">
                        Update Profile Image
                    </button>
                {/* <Link to="/profile/update" className="btn btn-outline-primary">
                    <i data-feather="edit-2" className="mr-2"></i> Edit Profile Image
                </Link> */}
            </div>
            <hr className="m-0" />
            <div className="card-body">
                <div className="row text-center">
                    <div className="col-4 text-info">
                        <h4 className="font-weight-bold">0</h4>
                        <span>Post</span>
                    </div>
                    <div className="col-4 text-success">
                        <h4 className="font-weight-bold">0</h4>
                        <span>Followers</span>
                    </div>
                    <div className="col-4 text-warning">
                        <h4 className="font-weight-bold">0</h4>
                        <span>Likes</span>
                    </div>
                </div>
            </div>
            <ProfileImageUpload />
        </div>
    )
}



export default ProfileCard;