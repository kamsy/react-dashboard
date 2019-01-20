import React, { Component, Fragment } from "react";

import "../assets/css/bootstrap.min.css";
import "../assets/css/light-bootstrap-dashboard.css?v=2.0.1";
import Sidebar from "../reuse/Sidebar";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";

class Upgrade extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <Sidebar />
                    <div className="main-panel">
                         <Header viewName={"Upgrade"} />
                        <div className="content">
                            <div className="container-fluid">
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-8 ml-auto mr-auto">
                                                <div className="card">
                                                    <div className="header text-center">
                                                        <h4 className="title">
                                                            Light Bootstrap
                                                            Dashboard PRO
                                                        </h4>
                                                        <p className="category">
                                                            Are you looking for
                                                            more components?
                                                            Please check our
                                                            Premium Version of
                                                            Light Bootstrap
                                                            Dashboard.
                                                        </p>
                                                        <br />
                                                    </div>
                                                    <div className="content table-responsive table-upgrade">
                                                        {/* <table className="table">
                                                <thead>
                                                    <th></th>
                                                    <th className="text-center">Free</th>
                                                    <th className="text-center">PRO</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Components</td>
                                                        <td>16</td>
                                                        <td>115+</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Plugins</td>
                                                        <td>4</td>
                                                        <td>14+</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Example Pages</td>
                                                        <td>4</td>
                                                        <td>22+</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Documentation</td>
                                                        <td><i className="fa fa-times text-danger"></i></td>
                                                        <td><i className="fa fa-check text-success"></td>
                                </tr>
                                <tr>
                                	<td>SASS Files</td>
									<td><i className="fa fa-times text-danger"></i></td>
                                                        <td><i className="fa fa-check text-success"></td>
                                </tr>
                                <tr>
                                	<td>Login/Register/Lock Pages</td>
									<td><i className="fa fa-times text-danger"></i></td>
                                                        <td><i className="fa fa-check text-success"></td>
                                </tr>
								<tr>
                                	<td>Premium Support</td>
									<td><i className="fa fa-times text-danger"></i></td>
                                                        <td><i className="fa fa-check text-success"></td>
                                </tr>
								<tr>
                                	<td></td>
									<td>Free</td>
                                	<td>Just $39</td>
                                </tr>
								<tr className="last-row">
									<td></td>
									<td>
										<a href="#" className="btn btn-round btn-fill btn-default disabled">Current Version</a>
									</td>
									<td>
										<a target="_blank" href="http://www.creative-tim.com/product/light-bootstrap-dashboard-pro/?ref=lbdupgrade" className="btn btn-round btn-fill btn-info">Upgrade to PRO</a>
									</td>
								</tr>
                            </tbody>
                        </table> */}
                                                    </div>
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
                ;
            </Fragment>
        );
    }
}

export default Upgrade;
