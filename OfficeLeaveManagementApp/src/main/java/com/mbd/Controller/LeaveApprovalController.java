package com.mbd.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mbd.Model.LeaveApprovalRequest;
import com.mbd.Service.LeaveApprovalService;

@RestController
@RequestMapping("/api/leave")
public class LeaveApprovalController {
    private final LeaveApprovalService leaveApprovalService;

    @Autowired
    public LeaveApprovalController(LeaveApprovalService leaveApprovalService) {
        this.leaveApprovalService = leaveApprovalService;
    }

    @PutMapping("/requestUpdate/{leaveRequestId}")
    public ResponseEntity<LeaveApprovalRequest> approveLeave(@PathVariable Long leaveRequestId,
                                                      @RequestBody LeaveApprovalRequest approvalRequest) {
        LeaveApprovalRequest leaveApproval = leaveApprovalService.approveLeave(leaveRequestId, approvalRequest);
        return ResponseEntity.ok(leaveApproval);
    }
}

