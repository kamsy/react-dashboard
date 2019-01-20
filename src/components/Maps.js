import React, { Component, Fragment } from "react";

import "../assets/css/bootstrap.min.css";
import "../assets/css/light-bootstrap-dashboard.css?v=2.0.1";
import Sidebar from "../reuse/Sidebar";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";

class Maps extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <Sidebar />
                    <div className="main-panel">
                         <Header viewName={"Maps"}/>

                        <div className="map-container">
                            <div id="map" />
                        </div>
                        <Footer />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Maps;
