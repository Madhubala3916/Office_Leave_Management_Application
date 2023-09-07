import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your hardcoded username and password validation logic
        const { email, password } = formData;
        if (email === 'madhubala4065@gmail.com' && password === 'pass1234') {
            // Redirect to the Home page on successful login
            navigate('/');
        } else {
            // Handle login error, e.g., show an error message
            console.error('Login failed');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <section className="vh-100">
                <div className="container py-3 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-6">
                            <div className="card shadow" style={{ borderRadius: "rem" }}>
                                <div className="row g-0">
                                    <div className="card-body p-lg-5 text-black">
                                        <form onSubmit={handleSubmit}>
                                            <div className="text-center align-items-center mb-3 pb-1">
                                                <i className="bi bi-journal-plus h2 text-success "> </i>
                                                <a className="h1 text-success text-center mb-0" href="/">
                                                    LeaveHub
                                                </a>
                                            </div>

                                            <h5
                                                className="fw-normal mb-3 pb-3 text-center"
                                                style={{ letterSpacing: "1px" }}
                                            >
                                                Sign into your account
                                            </h5>

                                            <div className="form-outline mb-4">
                                                <label
                                                    className="form-label text-start text-success"
                                                    htmlFor="form2Example17"
                                                >
                                                    Email Address:
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control form-control-lg"
                                                    name="email"
                                                    onChange={handleInputChange}
                                                    value={formData.email}
                                                    required
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label
                                                    className="form-label text-success"
                                                    htmlFor="form2Example27"
                                                >
                                                    Password:
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg"
                                                    name="password"
                                                    onChange={handleInputChange}
                                                    value={formData.password}
                                                    required
                                                />
                                            </div>

                                            <div className="pt-1 mb-4 text-center">
                                                <button
                                                    className="btn btn-dark btn-lg btn-block text-success"
                                                    type="submit"
                                                >
                                                    Login
                                                </button>
                                            </div>

                                            <p
                                                className="pb-lg-2 text-center"
                                                style={{ color: "#393f81" }}
                                            >
                                                Don't have an account?{" "}
                                                <a href="/register" style={{ color: "#393f81" }}>
                                                    Register here
                                                </a>
                                            </p>
                                            <p className="text-center">
                                                <a href="#!" className="small text-muted text-center">
                                                    Terms of use.
                                                </a>
                                                <a href="#!" className="small text-muted text-center">
                                                    Privacy policy
                                                </a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
