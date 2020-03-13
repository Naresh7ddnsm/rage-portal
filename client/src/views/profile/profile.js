import React from "react";
import MasterLayout from "../../layout/master/master.layout";
import ProfileCard from "../../components/profile-card/profile-card.component";
import ProfileInfo from "../../components/profile-info/profile-info.component";

import { updateBodyClass } from "../../components/functionality/functionality";
const profile = () => {
    updateBodyClass('');
    return <MasterLayout>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <ProfileCard />
                </div>
                <div className="col-md-6">
                    <ProfileInfo />
                </div>
            </div>
        </div>
    </MasterLayout>
}
export default profile;