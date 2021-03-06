import React, { useEffect } from "react";
import MasterLayout from "../../layout/master/master.layout";

import ProfileUpdate from "../../components/profile-update/profile-update.component";
import { updateBodyClass } from "../../components/functionality/functionality";

const ProfileUpdateView = props => {


    updateBodyClass('');

    return <MasterLayout>
        <div className="container-fluid">
            <div className="row clearfix">
                <div className="col-md-6">
                    <ProfileUpdate />
                </div>
            </div>
        </div>
    </MasterLayout>
}
export default ProfileUpdateView;