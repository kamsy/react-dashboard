import React, { Component, Fragment } from "react";

import "../assets/css/bootstrap.min.css";
import "../assets/css/light-bootstrap-dashboard.css?v=2.0.1";
import Sidebar from "../reuse/Sidebar";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";

class Notifications extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <Header viewName={"Notifications"} />

                        <div className="content">
                            <div className="container-fluid">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">
                                            Notifications
                                        </h4>
                                        <p className="card-category">
                                            Handcrafted by our friend
                                            <a
                                                target="_blank"
                                                href="https://github.com/mouse0270"
                                                rel="noopener noreferrer"
                                            >
                                                Robert McIntosh
                                            </a>
                                            . Please checkout the
                                            <a
                                                href="http://bootstrap-notify.remabledesigns.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                full documentation.
                                            </a>
                                        </p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h5>
                                                    <small>
                                                        Notifications Style
                                                    </small>
                                                </h5>
                                                <div className="alert alert-info">
                                                    <span>
                                                        This is a plain
                                                        notification
                                                    </span>
                                                </div>
                                                <div className="alert alert-info">
                                                    <button
                                                        type="button"
                                                        aria-hidden="true"
                                                        className="close"
                                                        data-dismiss="alert"
                                                    >
                                                        <i className="nc-icon nc-simple-remove" />
                                                    </button>
                                                    <span>
                                                        This is a notification
                                                        with close button.
                                                    </span>
                                                </div>
                                                <div
                                                    className="alert alert-info alert-with-icon"
                                                    data-notify="container"
                                                >
                                                    <button
                                                        type="button"
                                                        aria-hidden="true"
                                                        className="close"
                                                        data-dismiss="alert"
                                                    >
                                                        <i className="nc-icon nc-simple-remove" />
                                                    </button>
                                                    <span
                                                        data-notify="icon"
                                                        className="nc-icon nc-bell-55"
                                                    />
                                                    <span data-notify="message">
                                                        This is a notification
                                                        with close button and
                                                        icon.
                                                    </span>
                                                </div>
                                                <div
                                                    className="alert alert-info alert-with-icon"
                                                    data-notify="container"
                                                >
                                                    <button
                                                        type="button"
                                                        aria-hidden="true"
                                                        className="close"
                                                        data-dismiss="alert"
                                                    >
                                                        <i className="nc-icon nc-simple-remove" />
                                                    </button>
                                                    <span
                                                        data-notify="icon"
                                                        className="nc-icon nc-bell-55"
                                                    />
                                                    <span data-notify="message">
                                                        This is a notification
                                                        with close button and
                                                        icon and have many
                                                        lines. You can see that
                                                        the icon and the close
                                                        button are always
                                                        vertically aligned. This
                                                        is a beautiful
                                                        notification. So you
                                                        don't have to worry
                                                        about the style.
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h5>
                                                    <small>
                                                        Notification States
                                                    </small>
                                                </h5>
                                                <div className="alert alert-primary">
                                                    <button
                                                        type="button"
                                                        aria-hidden="true"
                                                        className="close"
                                                        data-dismiss="alert"
                                                    >
                                                        <i className="nc-icon nc-simple-remove" />
                                                    </button>
                                                    <span>
                                                        <b> Primary - </b> This
                                                        is a regular
                                                        notification made with
                                                        ".alert-primary"
                                                    </span>
                                                </div>
                                                <div className="alert alert-info">
                                                    <button
                                                        type="button"
                                                        aria-hidden="true"
                                                        className="close"
                                                        data-dismiss="alert"
                                                    >
                                                        <i className="nc-icon nc-simple-remove" />
                                                    </button>
                                                    <span>
                                                        <b> Info - </b> This is
                                                        a regular notification
                                                        made with ".alert-info"
                                                    </span>
                                                </div>
                                                <div className="alert alert-success">
                                                    <button
                                                        type="button"
                                                        aria-hidden="true"
                                                        className="close"
                                                        data-dismiss="alert"
                                                    >
                                                        <i className="nc-icon nc-simple-remove" />
                                                    </button>
                                                    <span>
                                                        <b> Success - </b> This
                                                        is a regular
                                                        notification made with
                                                        ".alert-success"
                                                    </span>
                                                </div>
                                                <div className="alert alert-warning">
                                                    <button
                                                        type="button"
                                                        aria-hidden="true"
                                                        className="close"
                                                        data-dismiss="alert"
                                                    >
                                                        <i className="nc-icon nc-simple-remove" />
                                                    </button>
                                                    <span>
                                                        <b> Warning - </b> This
                                                        is a regular
                                                        notification made with
                                                        ".alert-warning"
                                                    </span>
                                                </div>
                                                <div className="alert alert-danger">
                                                    <button
                                                        type="button"
                                                        aria-hidden="true"
                                                        className="close"
                                                        data-dismiss="alert"
                                                    >
                                                        <i className="nc-icon nc-simple-remove" />
                                                    </button>
                                                    <span>
                                                        <b> Danger - </b> This
                                                        is a regular
                                                        notification made with
                                                        ".alert-danger"
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="places-buttons">
                                            <div className="row">
                                                <div className="col-md-6 offset-md-3 text-center">
                                                    <h4 className="card-title">
                                                        Notifications Places
                                                        <p className="card-category">
                                                            <small>
                                                                Click to view
                                                                notifications
                                                            </small>
                                                        </p>
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-md-3 col-lg-3">
                                                    <button
                                                        className="btn btn-default btn-block"
                                                        onclick="demo.showNotification('top','left')"
                                                    >
                                                        Top Left
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-lg-3">
                                                    <button
                                                        className="btn btn-default btn-block"
                                                        onclick="demo.showNotification('top','center')"
                                                    >
                                                        Top Center
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-lg-3">
                                                    <button
                                                        className="btn btn-default btn-block"
                                                        onclick="demo.showNotification('top','right')"
                                                    >
                                                        Top Right
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-md-3 col-lg-3">
                                                    <button
                                                        className="btn btn-default btn-block"
                                                        onclick="demo.showNotification('bottom','left')"
                                                    >
                                                        Bottom Left
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-lg-3">
                                                    <button
                                                        className="btn btn-default btn-block"
                                                        onclick="demo.showNotification('bottom','center')"
                                                    >
                                                        Bottom Center
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-lg-3">
                                                    <button
                                                        className="btn btn-default btn-block"
                                                        onclick="demo.showNotification('bottom','right')"
                                                    >
                                                        Bottom Right
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <h4 className="title">Modal</h4>
                                                <a
                                                    className="btn btn-info btn-fill btn-wd"
                                                    data-toggle="modal"
                                                    data-target="#myModal1"
                                                    href="#pablo"
                                                >
                                                    Launch Modal Mini
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="modal fade modal-mini modal-primary"
                                    id="myModal1"
                                    tabindex="-1"
                                    role="dialog"
                                    aria-labelledby="myModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header justify-content-center">
                                                <div className="modal-profile">
                                                    <i className="nc-icon nc-bulb-63" />
                                                </div>
                                            </div>
                                            <div className="modal-body text-center">
                                                <p>
                                                    Always have an access to
                                                    your profile
                                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-link btn-simple"
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-link btn-simple"
                                                    data-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
                ;
            </Fragment>
        );
    }
}

export default Notifications;
