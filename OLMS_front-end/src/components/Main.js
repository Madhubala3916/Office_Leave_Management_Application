import React from 'react'

export default function Main() {
    return (
        <div>
            <main id="main">
                {/* ======= Clients Section ======= */}
                <section id="clients" className="clients section-bg">
                    <div className="container">
                        <div className="row" data-aos="zoom-in">
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-1.png" className="img-fluid" alt />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-2.png" className="img-fluid" alt />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-3.png" className="img-fluid" alt />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-4.png" className="img-fluid" alt />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-5.png" className="img-fluid" alt />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-6.png" className="img-fluid" alt />
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Cliens Section */}
                {/* ======= About Us Section ======= */}

                <section id="about-us" className="about-us">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>About Us</h2>
                        </div>
                        <div className="row content">
                            <div className="col-lg-6">
                                <p>
                                    LeaveHub is your trusted partner in managing employee leave and time-off requests efficiently. We understand the challenges businesses face when it comes to managing leave, and our mission is to provide a seamless and user-friendly solution.
                                </p>
                                <ul>
                                    <li>
                                        <i className="ri-check-double-line" /> Simplify leave request submissions and approvals.
                                    </li>
                                    <li>
                                        <i className="ri-check-double-line" /> Keep track of leave balances and schedules effortlessly.
                                    </li>
                                    <li>
                                        <i className="ri-check-double-line" /> Generate insightful reports for better decision-making.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    At LeaveHub, we are dedicated to helping businesses of all sizes streamline their leave management processes. Our platform is designed to save you time, reduce administrative overhead, and ensure compliance with leave policies.
                                </p>
                                <a href="#contact" className="btn-learn-more scrollto">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* End About Us Section */}
                {/* ======= Why Us Section ======= */}

                <section id="why-us" className="why-us section-bg">
                    <div className="container-fluid" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
                                <div className="content">
                                    <h3>Why Choose LeaveHub for Your Leave Management?</h3>
                                    <p>
                                        At LeaveHub, we provide a comprehensive solution to simplify and streamline leave management for your business. Here's why you should choose us:
                                    </p>
                                </div>
                                <div className="accordion-list">
                                    <ul>
                                        <li>
                                            <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">
                                                <span>01</span> User-Friendly Interface <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" />
                                            </a>
                                            <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                                <p>
                                                    Our intuitive interface makes it easy for employees to submit leave requests and for managers to review and approve them.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">
                                                <span>02</span> Leave Balance Tracking <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" />
                                            </a>
                                            <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                                <p>
                                                    LeaveHub allows employees to check their leave balances, reducing administrative inquiries.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">
                                                <span>03</span> Calendar View <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" />
                                            </a>
                                            <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                                <p>
                                                    Visualize leave schedules and holidays on the calendar for better planning and coordination.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: 'url("assets/img/why-us.png")' }} data-aos="zoom-in" data-aos-delay={150}>&nbsp;</div>
                        </div>
                    </div>
                </section>

                {/* End Why Us Section */}
                {/* ======= Skills Section ======= */}
                <section id="skills" className="skills">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay={100}>
                                <img src="assets/img/skills.png" className="img-fluid" alt="Skills" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay={100}>
                                <h3>Leave Management Expertise</h3>
                                <p className="fst-italic">
                                    LeaveHub is your partner in efficient leave management. Our platform helps you streamline the process, reduce administrative hassles, and ensure accurate leave tracking.
                                </p>
                                <div className="skills-content">
                                    <div className="progress">
                                        <span className="skill">Leave Requests <i className="val">100%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">Leave Approvals <i className="val">90%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">Leave Balances <i className="val">75%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">Calendar Integration <i className="val">55%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* End Skills Section */}
                {/* ======= Services Section ======= */}

                <section id="services" className="services section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Our Services</h2>
                            <p>Explore the services we offer for efficient office leave management.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble" /></div>
                                    <h4><a href="#">Apply for Leave</a></h4>
                                    <p>Submit your leave requests online with ease.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-file" /></div>
                                    <h4><a href="#">Leave Balance Check</a></h4>
                                    <p>View your available leave balances at any time.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-tachometer" /></div>
                                    <h4><a href="#">Leave Approvals</a></h4>
                                    <p>Streamline the approval process for leave requests.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={400}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-layer" /></div>
                                    <h4><a href="#">Leave Reports</a></h4>
                                    <p>Generate reports and track leave statistics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* End Cta Section */}

                {/* ======= Frequently Asked Questions Section ======= */}

                <section id="faq" className="faq section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Frequently Asked Questions</h2>
                            <p>Find answers to common questions about office leave management.</p>
                        </div>
                        <div className="faq-list">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay={100}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">How can I apply for leave? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                    <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                        <p>
                                            You can apply for leave by filling out the Leave Application Form in the Leave Management section.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay={200}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">How can I check my leave balance? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                    <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            You can check your leave balance by visiting the Leave Balance Check section and providing your details.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay={300}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">How do I approve or reject leave requests? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                    <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            You can manage leave approvals in the Leave Approvals section by reviewing and taking action on leave requests.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay={400}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Can I generate leave reports? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                    <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Yes, you can generate leave reports in the Leave Reports section to track leave statistics.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay={500}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">What should I do if I face issues with the system? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                    <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            If you encounter any issues, please contact our support team for assistance.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* End Frequently Asked Questions Section */}
            </main>{/* End #main */}

        </div>
    )
}
