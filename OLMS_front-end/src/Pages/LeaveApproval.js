import React, { useState } from 'react';

export default function LeaveApproval() {
    // Sample data for leave requests
    const leaveRequests = [
        {
            id: 1,
            employeeName: 'John Doe',
            leaveType: 'Vacation',
            startDate: '2023-09-10',
            endDate: '2023-09-15',
            reason: 'Family vacation',
        },
        {
            id: 2,
            employeeName: 'Jane Smith',
            leaveType: 'Sick Leave',
            startDate: '2023-09-20',
            endDate: '2023-09-22',
            reason: 'Flu',
        },
        {
            id: 3,
            employeeName: 'Mary Allen',
            leaveType: 'Annual Leave',
            startDate: '2023-09-25',
            endDate: '2023-09-27',
            reason: 'Annual',
        },
        {
            id: 4,
            employeeName: 'Jane Smith',
            leaveType: 'Leave',
            startDate: '2023-09-29',
            endDate: '2023-09-30',
            reason: 'General',
        },
        
        // Add more leave requests as needed
    ];

    // Function to handle leave approval
    const handleApprove = (leaveRequestId) => {
        // Implement your logic to approve leave here
        console.log(`Leave request ${leaveRequestId} approved.`);
    };

    // Function to handle leave rejection
    const handleReject = (leaveRequestId) => {
        // Implement your logic to reject leave here
        console.log(`Leave request ${leaveRequestId} rejected.`);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Leave Approval</h2>
            <div className="row">
                {leaveRequests.map((leaveRequest) => (
                    <div
                        key={leaveRequest.id}
                        className="col-md-6 mb-4"
                    >
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Leave Request #{leaveRequest.id}</h5>
                                <p className="card-text">Employee: {leaveRequest.employeeName}</p>
                                <p className="card-text">Leave Type: {leaveRequest.leaveType}</p>
                                <p className="card-text">
                                    Duration: {leaveRequest.startDate} to {leaveRequest.endDate}
                                </p>
                                <p className="card-text">Reason: {leaveRequest.reason}</p>
                                <div className="d-flex justify-content-end">
                                    <button
                                        className="btn btn-success mr-2"
                                        onClick={() => handleApprove(leaveRequest.id)}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleReject(leaveRequest.id)}
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
