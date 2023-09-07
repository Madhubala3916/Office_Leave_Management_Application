package com.mbd.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbd.Model.LeaveApplicationRequest;
import com.mbd.Model.LeaveBalanceInfo;
import com.mbd.Repository.LeaveApplicationRepository;
import com.mbd.Repository.LeaveBalanceRepository;

@Service
public class ReportingService {
    private final LeaveBalanceRepository leaveBalanceRepository;
    private final LeaveApplicationRepository leaveRequestRepository;

    @Autowired
    public ReportingService(LeaveBalanceRepository leaveBalanceRepository, LeaveApplicationRepository leaveRequestRepository) {
        this.leaveBalanceRepository = leaveBalanceRepository;
        this.leaveRequestRepository = leaveRequestRepository;
    }

    public List<LeaveBalanceInfo> getLeaveBalancesReport() {
        return leaveBalanceRepository.findAll();
    }

    public List<LeaveApplicationRequest> getLeaveHistoryReport() {
        return leaveRequestRepository.findAll();
    }

    public Map<Long, Integer> getAbsenteeismReport() {
        List<LeaveApplicationRequest> leaveRequests = leaveRequestRepository.findAll();
        Map<Long, Integer> absenteeismReport = new HashMap<>();

        for (LeaveApplicationRequest request : leaveRequests) {
            Long employeeId = request.getId();
            absenteeismReport.put(employeeId, absenteeismReport.getOrDefault(employeeId, 0) + 2);
        }

        return absenteeismReport;
    }
}
