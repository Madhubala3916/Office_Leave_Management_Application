import React from 'react';

export default function Hero() {
    return (
        <div>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <h1>Streamline Leave Management</h1>
                            <h2>Effortless Management of Employee Leave Requests</h2>
                            <p style={{ color: 'white' }}>
                                Welcome to our Leave Management System, designed to simplify and
                                streamline the leave request process for your business.
                            </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" className="btn-get-started scrollto">
                                    Get Started
                                </a>
                                <a
                                    href="https://www.youtube.com/watch?v=1jVBpT0m8Wg&pp=ygUPQXhpcyBCYW5rIGludHJv"
                                    className="glightbox btn-watch-video"
                                    target="_blank"  // Add this line to open in a new tab
                                    rel="noopener noreferrer" // Add this for security reasons
                                >
                                    <i className="bi bi-play-circle" />
                                    <span>Watch Video</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 order-1 order-lg-2 hero-img"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <img
                                src="assets/img/hero-img.png"
                                className="img-fluid animated"
                                alt="Office Leave Management"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* End Hero */}
        </div>
    );
}
