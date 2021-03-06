import React, { useState, useEffect } from "react";
import axios from "axios";
import MasterLayout from "../../layout/master/master.layout";
import ProfileCard from "../../components/profile-card/profile-card.component";
import ProfileInfo from "../../components/profile-info/profile-info.component";
import { getFromUser } from "../../components/functionality/functionality";

import { updateBodyClass } from "../../components/functionality/functionality";
const Profile = (props) => {

    updateBodyClass('');

    const [userInfo, setUserInfo] = useState({});
    
    // useEffect(() => {
    //     const id = getFromUser('id');
    //     axios.get("/api/"+id).then(res => {
    //         setUserInfo(res.data)
    //     })
    //     .catch(err => {
    //         console.log({"error": err});
    //     });
    // },[]);

    return <MasterLayout>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    {/* {todos} */}
                    <ProfileCard />
                </div>
                <div className="col-md-6">
                    <ProfileInfo />
                </div>
            </div>
        </div> 
    </MasterLayout>
}
export default Profile;