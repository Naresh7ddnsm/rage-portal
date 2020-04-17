import React, {useState, useContext} from "react";
import axios from "axios";

import { Store } from "./../../store/store";

const ProfileImageUpload = props => {

    const [state, setState] = useContext(Store);
    let [pickImage, setPickImage] = useState(null)

    const fileChange = (e) => {
        const file = e.target.files[0];
        setPickImage(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profileImage', pickImage)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/api/upload-image", formData, config)
        .then(res => {
            setPickImage(null)
            if(res.data.size){
                axios.post("/api/update", {"image": res.data.path})
                .then(_res => {
                    const path = _res.data.image;
                    const UPDATE_USER = {...state.AUTH_USER, "image": path}
                    setState(prev => ({ ...prev, AUTH_USER: UPDATE_USER }));
                    document.getElementById('profileImageModal').click();
                })
                .catch(err => {
                    console.log('error: ', err);
                })
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return(
        <div className="modal fade" id="profileImageModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <form id="profileImageUpload" method="post" onSubmit= {handleSubmit} encType="multipart/form-data">
                    <div className="modal-header">
                        <h5 className="modal-title" id="profileImageModalTitle">Upload Profile Image</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="ti-close"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                            <div className="row">
                                <div className="custom-file col-md-8 offset-md-2">
                                    <input type="file" onChange={fileChange} name="profileImage" className="custom-file-input" id="customFile" />
                                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                </div>
                            </div>
                    </div>
                    {pickImage && 
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary"  data-dismiss="modal">Close
                        </button>
                        <button type="submit" className="btn btn-primary">Save Image</button>
                    </div>
                    }
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ProfileImageUpload;