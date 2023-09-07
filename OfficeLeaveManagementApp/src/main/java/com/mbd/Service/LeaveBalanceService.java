package com.mbd.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbd.Model.LeaveApplicationRequest;
import com.mbd.Model.LeaveBalanceInfo;
import com.mbd.Repository.LeaveBalanceRepository;

import javax.persistence.EntityNotFoundException;

@Service
public class LeaveBalanceService {
	@Autowired
    private LeaveBalanceRepository leaveBalanceRepository;

    public LeaveBalanceInfo getLeaveBalance(LeaveApplicationRequest applicationRequest) {
        Long Id = applicationRequest.getId();
        String leaveType = applicationRequest.getLeaveType();

        LeaveBalanceInfo leaveBalance = leaveBalanceRepository.findByIdAndLeaveType(Id, leaveType)
                .orElseThrow(() -> new EntityNotFoundException("Leave balance not found"));

        LeaveBalanceInfo balanceInfo = new LeaveBalanceInfo();
        balanceInfo.setId(Id);
        balanceInfo.setLeaveType(leaveType);
        balanceInfo.setBalance(leaveBalance.getBalance());

        return balanceInfo;
    }

//	public LeaveBalanceInfo getLeaveBalance(Long Id, String leaveType) {
//		return null;
//	}
    public LeaveBalanceInfo getLeaveBalance(Long Id, String leaveType) {
        // Create a hardcoded LeaveBalanceInfo for testing
        LeaveBalanceInfo balanceInfo = new LeaveBalanceInfo();
        balanceInfo.setId(Id);
        balanceInfo.setLeaveType(leaveType);
        balanceInfo.setBalance(10.0); // Set a hardcoded balance value for testing

        return balanceInfo;
    }

}
