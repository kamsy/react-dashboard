import React, { Component, Fragment } from "react";

import "../assets/css/bootstrap.min.css";
import "../assets/css/light-bootstrap-dashboard.css?v=2.0.1";
import Sidebar from "../reuse/Sidebar";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";

class Typography extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <Sidebar />
                    <div className="main-panel">
                         <Header viewName ={"Typography"}/>
                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title">
                                                    Light Bootstrap Table
                                                    Heading
                                                </h4>
                                                <p className="card-category">
                                                    Created using Montserrat
                                                    Font Family
                                                </p>
                                            </div>
                                            <div className="card-body">
                                                <div className="typography-line">
                                                    <h1>
                                                        <span>Header 1</span>The
                                                        Life of LB Dashboard{" "}
                                                    </h1>
                                                </div>
                                                <div className="typography-line">
                                                    <h2>
                                                        <span>Header 2</span>The
                                                        Life of Light Bootstrap
                                                        Dashboard{" "}
                                                    </h2>
                                                </div>
                                                <div className="typography-line">
                                                    <h3>
                                                        <span>Header 3</span>The
                                                        Life of Light Bootstrap
                                                        Dashboard{" "}
                                                    </h3>
                                                </div>
                                                <div className="typography-line">
                                                    <h4>
                                                        <span>Header 4</span>The
                                                        Life of Light Bootstrap
                                                        Dashboard{" "}
                                                    </h4>
                                                </div>
                                                <div className="typography-line">
                                                    <h5>
                                                        <span>Header 5</span>The
                                                        Life of Light Bootstrap
                                                        Dashboard{" "}
                                                    </h5>
                                                </div>
                                                <div className="typography-line">
                                                    <h6>
                                                        <span>Header 6</span>The
                                                        Life of Light Bootstrap
                                                        Dashboard{" "}
                                                    </h6>
                                                </div>
                                                <div className="typography-line">
                                                    <p>
                                                        <span>Paragraph</span>I
                                                        will be the leader of a
                                                        company that ends up
                                                        being worth billions of
                                                        dollars, because I got
                                                        the answers. I
                                                        understand culture. I am
                                                        the nucleus. I think
                                                        that’s a responsibility
                                                        that I have, to push
                                                        possibilities, to show
                                                        people, this is the
                                                        level that things could
                                                        be at.
                                                    </p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Quote</span>
                                                    <blockquote>
                                                        <p className="blockquote blockquote-primary">
                                                            "I will be the
                                                            leader of a company
                                                            that ends up being
                                                            worth billions of
                                                            dollars, because I
                                                            got the answers. I
                                                            understand culture.
                                                            I am the nucleus. I
                                                            think that’s a
                                                            responsibility that
                                                            I have, to push
                                                            possibilities, to
                                                            show people, this is
                                                            the level that
                                                            things could be at."
                                                            <br />
                                                            <br />
                                                            <small>
                                                                - Noaa
                                                            </small>
                                                        </p>
                                                    </blockquote>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Muted Text</span>
                                                    <p className="text-muted">
                                                        I will be the leader of
                                                        a company that ends up
                                                        being worth billions of
                                                        dollars, because I got
                                                        the answers...
                                                    </p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Primary Text</span>
                                                    <p className="text-primary">
                                                        I will be the leader of
                                                        a company that ends up
                                                        being worth billions of
                                                        dollars, because I got
                                                        the answers...
                                                    </p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Info Text</span>
                                                    <p className="text-info">
                                                        I will be the leader of
                                                        a company that ends up
                                                        being worth billions of
                                                        dollars, because I got
                                                        the answers...{" "}
                                                    </p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Success Text</span>
                                                    <p className="text-success">
                                                        I will be the leader of
                                                        a company that ends up
                                                        being worth billions of
                                                        dollars, because I got
                                                        the answers...{" "}
                                                    </p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Warning Text</span>
                                                    <p className="text-warning">
                                                        I will be the leader of
                                                        a company that ends up
                                                        being worth billions of
                                                        dollars, because I got
                                                        the answers...
                                                    </p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Danger Text</span>
                                                    <p className="text-danger">
                                                        I will be the leader of
                                                        a company that ends up
                                                        being worth billions of
                                                        dollars, because I got
                                                        the answers...{" "}
                                                    </p>
                                                </div>
                                                <div className="typography-line">
                                                    <h2>
                                                        <span>Small Tag</span>
                                                        Header with small
                                                        subtitle
                                                        <br />
                                                        <small>
                                                            Use "small" tag for
                                                            the headers
                                                        </small>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Typography;
