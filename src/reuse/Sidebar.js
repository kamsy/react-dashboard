import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import "../assets/css/bootstrap.min.css";
import "../assets/css/light-bootstrap-dashboard.css?v=2.0.1";

class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                <div
                    className="sidebar"
                    data-image="../assets/img/sidebar-5.jpg"
                    data-color="blue"
                >
                    {/* <!--
         Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

         Tip 2: you can also add an image using data-image tag
     --> */}
                    <div className="sidebar-wrapper">
                        <div className="logo">
                            <a
                                href="https://github.com/kamsy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="simple-text"
                            >
                                Eze-Mmuo
                            </a>
                        </div>
                        <ul className="nav">
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to="/dashboard"
                                >
                                    <i className="nc-icon nc-chart-pie-35" />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to="/user"
                                >
                                    <i className="nc-icon nc-circle-09" />
                                    User Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to="/table"
                                >
                                    <i className="nc-icon nc-notes" />
                                    Table List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to="/typography"
                                >
                                    <i className="nc-icon nc-paper-2" />
                                    Typography
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to="/icons"
                                >
                                    <i className="nc-icon nc-atom" />
                                    Icons
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to="/maps"
                                >
                                    <i className="nc-icon nc-pin-3" />
                                    Maps
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to="/notifications"
                                >
                                    <i className="nc-icon nc-bell-55" />
                                    Notifications
                                </NavLink>
                            </li>
                            <li className="nav-item active-pro">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link"
                                    to="/upgrade"
                                >
                                    <i className="nc-icon nc-alien-33" />
                                    Upgrade to PRO
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Sidebar;
