import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LeaveBalance() {
    const [leaveBalance, setLeaveBalance] = useState({});
    const [leaveType, setLeaveType] = useState('annual');

    useEffect(() => {
        // Define your backend API URL for fetching leave balance
        const apiUrl = `/api/leave/1/balance?leaveType=${leaveType}`; // Adjust the URL as needed

        // Fetch leave balance from the backend
        axios.get(apiUrl)
            .then((response) => {
                setLeaveBalance(response.data);
            })
            .catch((error) => {
                console.error('Error fetching leave balance:', error);
            });
    }, [leaveType]);

    // Function to handle leave type change
    const handleLeaveTypeChange = (e) => {
        setLeaveType(e.target.value);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Leave Balance</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Select Leave Type</label>
                        <select
                            className="form-select"
                            value={leaveType}
                            onChange={handleLeaveTypeChange}
                        >
                            <option value="annual">Annual Leave</option>
                            <option value="sick">Sick Leave</option>
                            <option value="unpaid">Unpaid Leave</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Leave Balance for {leaveType} Leave</h5>
                            <p className="card-text">Balance: {leaveBalance.balance || 2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
