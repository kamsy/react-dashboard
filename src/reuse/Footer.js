import React, { Component, Fragment } from "react";

import "../assets/css/bootstrap.min.css";
import "../assets/css/light-bootstrap-dashboard.css?v=2.0.1";

class Footer extends Component {
    state = {
        time: null
    };

    componentDidMount() {
        const time = new Date().getFullYear();
        this.setState({ time });
    }

    render() {
        return (
            <Fragment>
                <footer className="footer">
                    <div className="container">
                        <nav>
                            <ul className="footer-menu">
                                <li>
                                    <a
                                        href="https://www.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Company
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                            <p className="copyright text-center">
                                ©{this.state.time}{" "}
                                <a href="https://www.okoh.co.uk">Trojan</a>,
                                made with love for a better web
                            </p>
                        </nav>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;
