import React, { Component, Fragment } from "react";

import "../assets/css/bootstrap.min.css";
import "../assets/css/light-bootstrap-dashboard.css?v=2.0.1";
import Sidebar from "../reuse/Sidebar";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";

class Table extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <Sidebar />
                    <div className="main-panel">
                         <Header viewName={"Table List"} />
                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card strpied-tabled-with-hover">
                                            <div className="card-header ">
                                                <h4 className="card-title">
                                                    Striped Table with Hover
                                                </h4>
                                                <p className="card-category">
                                                    Here is a subtitle for this
                                                    table
                                                </p>
                                            </div>
                                            <div className="card-body table-full-width table-responsive">
                                                <table className="table table-hover table-striped">
                                                    <thead>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Salary</th>
                                                        <th>Country</th>
                                                        <th>City</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Dakota Rice</td>
                                                            <td>$36,738</td>
                                                            <td>Niger</td>
                                                            <td>
                                                                Oud-Turnhout
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>
                                                                Minerva Hooper
                                                            </td>
                                                            <td>$23,789</td>
                                                            <td>Curaçao</td>
                                                            <td>Sinaai-Waas</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>
                                                                Sage Rodriguez
                                                            </td>
                                                            <td>$56,142</td>
                                                            <td>Netherlands</td>
                                                            <td>Baileux</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>
                                                                Philip Chaney
                                                            </td>
                                                            <td>$38,735</td>
                                                            <td>
                                                                Korea, South
                                                            </td>
                                                            <td>
                                                                Overland Park
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>
                                                                Doris Greene
                                                            </td>
                                                            <td>$63,542</td>
                                                            <td>Malawi</td>
                                                            <td>
                                                                Feldkirchen in
                                                                Kärnten
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>
                                                                Mason Porter
                                                            </td>
                                                            <td>$78,615</td>
                                                            <td>Chile</td>
                                                            <td>Gloucester</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="card card-plain table-plain-bg">
                                            <div className="card-header ">
                                                <h4 className="card-title">
                                                    Table on Plain Background
                                                </h4>
                                                <p className="card-category">
                                                    Here is a subtitle for this
                                                    table
                                                </p>
                                            </div>
                                            <div className="card-body table-full-width table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Salary</th>
                                                        <th>Country</th>
                                                        <th>City</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Dakota Rice</td>
                                                            <td>$36,738</td>
                                                            <td>Niger</td>
                                                            <td>
                                                                Oud-Turnhout
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>
                                                                Minerva Hooper
                                                            </td>
                                                            <td>$23,789</td>
                                                            <td>Curaçao</td>
                                                            <td>Sinaai-Waas</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>
                                                                Sage Rodriguez
                                                            </td>
                                                            <td>$56,142</td>
                                                            <td>Netherlands</td>
                                                            <td>Baileux</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>
                                                                Philip Chaney
                                                            </td>
                                                            <td>$38,735</td>
                                                            <td>
                                                                Korea, South
                                                            </td>
                                                            <td>
                                                                Overland Park
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>
                                                                Doris Greene
                                                            </td>
                                                            <td>$63,542</td>
                                                            <td>Malawi</td>
                                                            <td>
                                                                Feldkirchen in
                                                                Kärnten
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>
                                                                Mason Porter
                                                            </td>
                                                            <td>$78,615</td>
                                                            <td>Chile</td>
                                                            <td>Gloucester</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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

export default Table;
