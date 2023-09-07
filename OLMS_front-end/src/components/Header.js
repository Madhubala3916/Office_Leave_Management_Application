import React from 'react';

export default function Header() {
    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <a href="index.html">LeaveHub</a>
                    </h1>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <a className="nav-link scrollto active" href="#hero">
                                    Home
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="nav-link">
                                    Leave Management <i className="bi bi-chevron-down" />
                                </a>
                                <ul>
                                    <li>
                                        <a className="nav-link scrollto" href="leaveApply">
                                            Apply for Leave
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link scrollto" href="leaveApproval">
                                            Leave Approval
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link scrollto" href="leaveBalance">
                                            Leave Balance
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="calender">
                                    Calendar
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="report">
                                    Reports
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#about-us">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#services">
                                    Our Services
                                </a>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                        {/* <button
                            className="btn btn-primary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                    </nav>
                </div>
            </header>
            {/* End Header */}
        </div>
    );
}
