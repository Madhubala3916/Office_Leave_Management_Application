package com.mbd.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbd.Model.LeaveApplicationRequest;
import com.mbd.Repository.LeaveApplicationRepository;

@Service
public class LeaveApplicationService {
    private final LeaveApplicationRepository leaveApplicationRepository;

    @Autowired
    public LeaveApplicationService(LeaveApplicationRepository leaveApplicationRepository) {
        this.leaveApplicationRepository = leaveApplicationRepository;
    }
    public LeaveApplicationRequest applyForLeave(LeaveApplicationRequest applicationRequest) {
        // Create a LeaveApplicationRequest instance directly from the input
    	
        LeaveApplicationRequest leaveRequest = new LeaveApplicationRequest();
//        leaveRequest.setId(applicationRequest.getId());
        leaveRequest.setStartDate(applicationRequest.getStartDate());
        leaveRequest.setEndDate(applicationRequest.getEndDate());
        leaveRequest.setLeaveType(applicationRequest.getLeaveType());
        leaveRequest.setReason(applicationRequest.getReason());
        
        // Set status as "Pending"
        leaveRequest.setStatus("Pending");

        return leaveApplicationRepository.save(leaveRequest);
    }
    
}

