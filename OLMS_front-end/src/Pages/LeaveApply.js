import axios from 'axios';
import React, { useState } from 'react';

export default function LeaveApplicationForm() {
    // Define state variables for form inputs
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [leaveType, setLeaveType] = useState('annual');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');
    const [status, setStatus] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // You can perform form validation here

        // Display form data in the console (you can send it to the server as well)
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Leave Type:', leaveType);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Reason:', reason);

        const userData = {
            "leaveType": leaveType,
            startDate: startDate,
            endDate: endDate,
            reason: reason,
            status: "Applied"
        };

        console.log(userData);

        axios.post("http://localhost:8081/api/leave/apply", userData)
            .then(response => {
                console.log("User data stored successfully!", response.data)
            })
            .catch(error => {
                console.log("Error", error)
            })

        // Clear form fields after submission
        setFullName('');
        setEmail('');
        setLeaveType('annual');
        setStartDate('');
        setEndDate('');
        setReason('');
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Apply for Leave</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Leave Type</label>
                    <select
                        className="form-select"
                        value={leaveType}
                        onChange={(e) => setLeaveType(e.target.value)}
                    >
                        <option value="annual">Annual Leave</option>
                        <option value="sick">Sick Leave</option>
                        <option value="unpaid">Unpaid Leave</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">Start Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">End Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="reason" className="form-label">Reason for Leave</label>
                    <textarea
                        className="form-control"
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

