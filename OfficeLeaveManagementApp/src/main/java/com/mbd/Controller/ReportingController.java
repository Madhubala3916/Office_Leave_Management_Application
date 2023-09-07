package com.mbd.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mbd.Model.LeaveApplicationRequest;
import com.mbd.Model.LeaveBalanceInfo;
import com.mbd.Service.ReportingService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/report")
public class ReportingController {
    private final ReportingService reportingService;

    @Autowired
    public ReportingController(ReportingService reportingService) {
        this.reportingService = reportingService;
    }

    @GetMapping("/leave-balances")
    public ResponseEntity<List<LeaveBalanceInfo>> getLeaveBalancesReport() {
        List<LeaveBalanceInfo> leaveBalances = reportingService.getLeaveBalancesReport();
        return ResponseEntity.ok(leaveBalances);
    }

    @GetMapping("/leave-history")
    public ResponseEntity<List<LeaveApplicationRequest>> getLeaveHistoryReport() {
        List<LeaveApplicationRequest> leaveHistory = reportingService.getLeaveHistoryReport();
        return ResponseEntity.ok(leaveHistory);
    }

    @GetMapping("/absenteeism")
    public ResponseEntity<Map<Long, Integer>> getAbsenteeismReport() {
        Map<Long, Integer> absenteeismReport = reportingService.getAbsenteeismReport();
        return ResponseEntity.ok(absenteeismReport);
    }
}
