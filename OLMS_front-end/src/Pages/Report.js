import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
    employeeLeaveReport: {
        padding: '20px',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '30px',
    },
    tableContainer: {
        marginBottom: '30px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid #ddd', // Add border for grid lines
    },
    th: {
        textAlign: 'center',
        background: '#007BFF',
        color: 'white',
        padding: '10px',
        border: '1px solid #ddd', // Add border for grid lines
    },
    td: {
        textAlign: 'center',
        padding: '10px',
        borderBottom: '1px solid #ddd', // Add border for grid lines
        border: '1px solid #ddd', // Add border for grid lines
    },
    // Additional CSS for better UI
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

// Define a hardcoded leave balance service for testing
const leaveBalanceService = {
    getLeaveBalance: (employeeId, leaveType) => {
        // Create a hardcoded LeaveBalanceInfo for testing
        const balanceInfo = {
            id: employeeId,
            leaveType: leaveType,
            balance: 10.0, // Set a hardcoded balance value for testing
        };
        return balanceInfo;
    },
};

const EmployeeLeaveReport = () => {
    const [leaveBalances, setLeaveBalances] = useState([]);
    const [leaveHistory, setLeaveHistory] = useState([]);
    const [absenteeismReport, setAbsenteeismReport] = useState({});

    useEffect(() => {
        // Use a hardcoded employeeId and leaveType for testing
        const employeeId = 1;
        const leaveType = 'Vacation';

        // Call the service method with the hardcoded values
        const leaveBalance = leaveBalanceService.getLeaveBalance(employeeId, leaveType);

        // Set the hardcoded data for Leave Balances
        // setLeaveBalances([leaveBalance]);
        setLeaveBalances([leaveBalance, { id: 2, leaveType: 'Sick Leave', balance: 5.0 }]);

        // Hardcoded Leave History data with employeeId
        const hardcodedLeaveHistory = [
            {
                id: 1,
                employeeId: 1, // Hardcoded employeeId
                leaveType: 'Vacation',
                startDate: '2023-09-05',
                endDate: '2023-09-10',
            },
            {
                id: 2,
                employeeId: 2, // Hardcoded employeeId
                leaveType: 'Sick Leave',
                startDate: '2023-08-20',
                endDate: '2023-08-25',
            },
        ];

        // Set the hardcoded data for Leave History
        setLeaveHistory(hardcodedLeaveHistory);

        axios.get('http://localhost:8081/api/report/absenteeism')
            .then(response => {
                setAbsenteeismReport(response.data);
            })
            .catch(error => {
                console.error('Error fetching absenteeism report:', error);
            });
    }, []);

    return (
        <div style={styles.employeeLeaveReport}>
            <h1 style={styles.heading}>Employee Leave Report</h1>

            {/* Leave Balances */}
            <div>
                <h2 style={styles.heading}>Leave Balances</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Employee ID</th>
                            <th style={styles.th}>Leave Type</th>
                            <th style={styles.th}>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaveBalances.map(leaveBalance => (
                            <tr key={leaveBalance.id}>
                                <td style={styles.td}>{leaveBalance.id}</td>
                                <td style={styles.td}>{leaveBalance.leaveType}</td>
                                <td style={styles.td}>{leaveBalance.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Leave History */}
            <div>
                <h2 style={styles.heading}>Leave History</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Employee ID</th>
                            <th style={styles.th}>Leave Type</th>
                            <th style={styles.th}>Start Date</th>
                            <th style={styles.th}>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaveHistory.map(leave => (
                            <tr key={leave.id}>
                                <td style={styles.td}>{leave.employeeId}</td>
                                <td style={styles.td}>{leave.leaveType}</td>
                                <td style={styles.td}>{leave.startDate}</td>
                                <td style={styles.td}>{leave.endDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Absenteeism Report */}
            <div>
                <h2 style={styles.heading}>Absenteeism Report</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Employee ID</th>
                            <th style={styles.th}>Absent Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(absenteeismReport).map(([employeeId, days]) => (
                            <tr key={employeeId}>
                                <td style={styles.td}>{employeeId}</td>
                                <td style={styles.td}>{days}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeLeaveReport;
