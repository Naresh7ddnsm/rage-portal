import React, { useContext } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";


import "./header.component.css";
import * as Icon from 'react-feather';

import { Store } from "../../store/store";

const Header = props => {
    const [state, setState] = useContext(Store);

    const logout = event => {
        event.preventDefault();
        axios.post('/api/logout').then(res => {
            setState((prev) => ({ ...prev, AUTH_USER: {} }));
            props.history.push('/');
        }).catch(err => {
            console.log('error: ', err);
        })
        
    }
    const { first_name, last_name, image, USER_STATUS } = state.AUTH_USER;

    return (
        <React.Fragment>
            <div className="header">
                <div id="header-logo">
                    <a href="/">
                        <img className="logo" src="/assets/media/image/logo.png" alt="logo" />
                        <img className="logo-sm" src="/assets/media/image/logo-sm.png" alt="small logo" />
                        <img className="logo-light" src="/assets/media/image/logo-light.png" alt="light logo" />
                    </a>
                </div>
                <div className="header-body">
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link" title="Search" data-toggle="search">
                                    <Icon.Search size={16} />
                                </a>
                                <div className="header-search">
                                    <form>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button className="btn" type="button">
                                                    <Icon.Search size={16} />
                                                </button>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Search" />
                                            <div className="input-group-prepend">
                                                <button className="btn close-header-search" type="button">
                                                    <Icon.X size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link" title="Fullscreen" data-toggle="fullscreen">
                                    <Icon.Maximize className="maximize" size={16} />
                                    <Icon.Minimize className="minimize" size={16} />
                                </a>
                            </li>

                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link nav-link-notify" title="Chats" data-toggle="dropdown">
                                    <Icon.MessageCircle size={16} />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                                    <div className="p-4 text-center d-flex justify-content-between"
                                        data-backround-image="/assets/media/image/image1.png">
                                        <h6 className="mb-0">Chats</h6>
                                        <small className="font-size-11 opacity-7">2 unread chats</small>
                                    </div>
                                    <div>
                                        <ul className="list-group list-group-flush">
                                            <li>
                                                <a href="#" className="list-group-item d-flex hide-show-toggler">
                                                    <div>
                                                        <figure className="avatar avatar-sm m-r-15">
                                                            <img src="/assets/media/image/user/man_avatar1.jpg" className="rounded-circle" alt="user" />
                                                        </figure>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                            Herbie Pallatina
                                                                <i title="Mark as read" data-toggle="tooltip"
                                                                className="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
                                                        </p>
                                                        <div className="small text-muted">
                                                            <span className="mr-2">02:30 PM</span>
                                                            <span>Have you madimage</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="list-group-item d-flex align-items-center hide-show-toggler">
                                                    <div>
                                                        <figure className="avatar avatar-sm m-r-15">
                                                            <img src="/assets/media/image/user/women_avatar5.jpg"
                                                                className="rounded-circle" alt="user" />
                                                        </figure>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                            Andrei Miners
                                                                <i title="Mark as read" data-toggle="tooltip"
                                                                className="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
                                                        </p>
                                                        <div className="small text-muted">
                                                            <span className="mr-2">08:36 PM</span>
                                                            <span>I have a meetinimage</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="text-divider small pb-2 pl-3 pt-3">
                                                <span>Old chats</span>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="list-group-item d-flex align-items-center hide-show-toggler">
                                                    <div>
                                                        <figure className="avatar avatar-sm m-r-15">
                                                            <img src="/assets/media/image/user/man_avatar3.jpg"
                                                                className="rounded-circle" alt="user" />
                                                        </figure>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                            Kevin added
                                                                <i title="Mark as unread" data-toggle="tooltip"
                                                                className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                        </p>
                                                        <div className="small text-muted">
                                                            <span className="mr-2">11:09 PM</span>
                                                            <span>Have you madimage</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="list-group-item d-flex hide-show-toggler">
                                                    <div>
                                                        <figure className="avatar avatar-sm m-r-15">
                                                            <img src="/assets/media/image/user/man_avatar2.jpg"
                                                                className="rounded-circle" alt="user" />
                                                        </figure>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                            Eugenio Carnelley
                                                                <i title="Mark as unread" data-toggle="tooltip"
                                                                className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                        </p>
                                                        <div className="small text-muted">
                                                            <span className="mr-2">Yesterday</span>
                                                            <span>I have a meetinimage</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="list-group-item d-flex align-items-center hide-show-toggler">
                                                    <div>
                                                        <figure className="avatar avatar-sm m-r-15">
                                                            <img src="/assets/media/image/user/women_avatar1.jpg"
                                                                className="rounded-circle" alt="user" />
                                                        </figure>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                            Neely Ferdinand
                                                                <i title="Mark as unread" data-toggle="tooltip"
                                                                className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                        </p>
                                                        <div className="small text-muted">
                                                            <span className="mr-2">Yesterday</span>
                                                            <span>I have a meetinimage</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-2 text-right">
                                        <ul className="list-inline small">
                                            <li className="list-inline-item">
                                                <a href="#">Mark All Read</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link nav-link-notify" title="Notifications" data-toggle="dropdown">
                                    <Icon.Bell size={16} />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                                    <div className="p-4 text-center d-flex justify-content-between"
                                        data-backround-image="/assets/media/image/image1.png">
                                        <h6 className="mb-0">Notifications</h6>
                                        <small className="font-size-11 opacity-7">1 unread notifications</small>
                                    </div>
                                    <div>
                                        <ul className="list-group list-group-flush">
                                            <li>
                                                <a href="#" className="list-group-item d-flex hide-show-toggler">
                                                    <div>
                                                        <figure className="avatar avatar-sm m-r-15">
                                                            <span className="avatar-title bg-success-bright text-success rounded-circle">
                                                                <i className="ti-user"></i>
                                                            </span>
                                                        </figure>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                            New customer registered
                                                                <i title="Mark as read" data-toggle="tooltip"
                                                                className="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
                                                        </p>
                                                        <span className="text-muted small">20 min ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="text-divider small pb-2 pl-3 pt-3">
                                                <span>Old notifications</span>
                                            </li>
                                            <li>
                                                <a href="#" className="list-group-item d-flex hide-show-toggler">
                                                    <div>
                                                        <figure className="avatar avatar-sm m-r-15">
                                                            <span className="avatar-title bg-warning-bright text-warning rounded-circle">
                                                                <i className="ti-package"></i>
                                                            </span>
                                                        </figure>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                            New Order Recieved
                                                                <i title="Mark as unread" data-toggle="tooltip"
                                                                className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                        </p>
                                                        <span className="text-muted small">45 sec ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="list-group-item d-flex align-items-center hide-show-toggler">
                                                    <div>
                                                        <figure className="avatar avatar-sm m-r-15">
                                                            <span className="avatar-title bg-danger-bright text-danger rounded-circle">
                                                                <i className="ti-server"></i>
                                                            </span>
                                                        </figure>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                            Server Limit Reached!
                                                                <i title="Mark as unread" data-toggle="tooltip"
                                                                className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                        </p>
                                                        <span className="text-muted small">55 sec ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="list-group-item d-flex align-items-center hide-show-toggler">
                                                    <div>
                                                        <figure className="avatar avatar-sm m-r-15">
                                                            <span className="avatar-title bg-info-bright text-info rounded-circle">
                                                                <i className="ti-layers"></i>
                                                            </span>
                                                        </figure>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                            Apps are ready for update
                                                                <i title="Mark as unread" data-toggle="tooltip"
                                                                className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                        </p>
                                                        <span className="text-muted small">Yesterday</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-2 text-right">
                                        <ul className="list-inline small">
                                            <li className="list-inline-item">
                                                <a href="#">Mark All Read</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link" title="User menu" data-toggle="dropdown">
                                    <figure className="avatar avatar-sm avatar-state-success">
                                        {/* <img src="/assets/media/image/user/women_avatar1.jpg" className="rounded-circle" alt="avatar" /> */}
                                        <img src={image ? `${image}` : null} className="rounded-circle" alt="avatar" />
                                    </figure>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                                    <div className="p-3 text-center" data-backround-image="/assets/media/image/image1.png">
                                        <figure className="avatar avatar-lg avatar-state-success mb-3">
                                            <img src="/assets/media/image/user/women_avatar1.jpg" className="rounded-circle" alt="image" />
                                        </figure>
                                        <h6 className="d-flex align-items-center justify-content-center">
                                            Welcome {USER_STATUS ? `${first_name}  ${last_name}` : "Guest"} !
                                            <a href="#" className="ml-2" data-toggle="tooltip" title="Edit">
                                                <Icon.Edit2 className="width-13 height-13" size={16} />
                                            </a>
                                        </h6>
                                        {/* <small>Balance: <strong>$105</strong></small> */}
                                    </div>
                                    <div className="dropdown-menu-body">
                                        <div className="border-bottom p-4">
                                            <h6 className="text-uppercase font-size-11 d-flex justify-content-between">
                                                Storage
                                                    <span>%25</span>
                                            </h6>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="25"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="list-group list-group-flush">
                                            <a href="/profile" className="list-group-item">Profile</a>
                                            <a href="#" className="list-group-item d-flex">Followers <span
                                                className="text-muted ml-auto">214</span></a>
                                            <a href="#" className="list-group-item" data-sidebar-target="#settings">Settings</a>
                                            <a href="#" onClick={logout} className="list-group-item text-danger">Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>

                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item header-toggler">
                                <a href="#" className="nav-link">
                                    <Icon.ArrowDown size={16} />
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>

        </React.Fragment>
    )

}

export default withRouter(Header);