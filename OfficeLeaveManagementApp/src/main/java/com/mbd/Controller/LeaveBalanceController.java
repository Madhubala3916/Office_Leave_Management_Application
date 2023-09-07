package com.mbd.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mbd.Model.LeaveBalanceInfo;
import com.mbd.Service.LeaveBalanceService;

@RestController
@RequestMapping("/api/leave")
public class LeaveBalanceController {
    private final LeaveBalanceService leaveBalanceService;

    @Autowired
    public LeaveBalanceController(LeaveBalanceService leaveBalanceService) {
        this.leaveBalanceService = leaveBalanceService;
    }

    @GetMapping("/{employeeId}/balance")
    public ResponseEntity<LeaveBalanceInfo> getLeaveBalance(@PathVariable Long employeeId,
                                                            @RequestParam String leaveType) {
        LeaveBalanceInfo balanceInfo = leaveBalanceService.getLeaveBalance(employeeId, leaveType);
        return ResponseEntity.ok(balanceInfo);
    }
}
