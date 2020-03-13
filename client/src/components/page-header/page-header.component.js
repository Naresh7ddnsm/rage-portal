import React from "react";
import "./page-header.component.css";
import { getPageTitle } from "../functionality/functionality";
const PageHeader = () => {
    return (
        <div className="page-header" data-backround-image>
            <div className="container-fluid d-md-flex justify-content-between">
                <h4> {getPageTitle()} </h4>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default PageHeader;