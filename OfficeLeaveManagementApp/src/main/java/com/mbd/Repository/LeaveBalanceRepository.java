package com.mbd.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mbd.Model.LeaveBalanceInfo;

@Repository
public interface LeaveBalanceRepository extends JpaRepository<LeaveBalanceInfo, Long> {
	Optional<LeaveBalanceInfo> findByIdAndLeaveType(Long Id, String leaveType);
}

