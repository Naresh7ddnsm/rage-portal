import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./aside-navigation.component.css";

import * as Icon from 'react-feather';
import { Store } from "../../store/store";

const AsideNavigation = () => {

    const [state, setState] = useContext(Store);
    const { USER_STATUS } = state.AUTH_USER;


    return (
        <div className="navigation">
            <div className="navigation-menu-body">
                <ul>
                    <li className="navigation-divider">Navigation</li>
                    <li>
                        <a href="/profile">
                            <Icon.BarChart2 className="nav-link-icon" size={16} />
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Icon.Command className="nav-link-icon" size={16} />
                            <span>Apps</span>
                            <i className="sub-menu-arrow ti-angle-up"></i>
                        </a>
                        <ul>
                            <li>
                                <a href="chat.html">
                                    <span>Chat</span>
                                    <span className="badge badge-danger">2</span>
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li className="navigation-divider">Extras</li>
                    <li>
                        <a href="#">
                            <Icon.User className="nav-link-icon" size={16} />
                            <span>Authentication</span>
                            <i className="sub-menu-arrow ti-angle-up"></i>
                        </a>
                        <ul>
                            {!USER_STATUS && <li><Link to="/login">Login</Link></li>}
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/recover-password">Recovery Password</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default AsideNavigation;