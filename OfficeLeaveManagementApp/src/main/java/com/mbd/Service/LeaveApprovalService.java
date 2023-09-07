package com.mbd.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbd.Controller.LeaveApprovalController;
import com.mbd.Model.LeaveApplicationRequest;
import com.mbd.Model.LeaveApprovalRequest;
import com.mbd.Repository.LeaveApplicationRepository;
import com.mbd.Repository.LeaveApprovalRepository;

import javax.persistence.EntityNotFoundException;

@Service
public class LeaveApprovalService {
    private final LeaveApplicationRepository leaveRequestRepository;
    private final LeaveApprovalRepository leaveApprovalRepository;

    @Autowired
    public LeaveApprovalService(LeaveApplicationRepository leaveRequestRepository, LeaveApprovalRepository leaveApprovalRepository) {
        this.leaveRequestRepository = leaveRequestRepository;
        this.leaveApprovalRepository = leaveApprovalRepository;
    }

    public LeaveApprovalRequest approveLeave(Long leaveRequestId, LeaveApprovalRequest approvalRequest) {
        LeaveApplicationRequest leaveRequest = leaveRequestRepository.findById(leaveRequestId)
                .orElseThrow(() -> new EntityNotFoundException("Leave request not found"));

        LeaveApprovalRequest leaveApproval = new LeaveApprovalRequest();
        leaveApproval.setLeaveRequest(leaveRequest);
        leaveApproval.setStatus(approvalRequest.getStatus());
        leaveApproval.setComments(approvalRequest.getComments());

        return leaveApprovalRepository.save(leaveApproval);
    }
}

