package com.mbd.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mbd.Model.LeaveApprovalRequest;

@Repository
public interface LeaveApprovalRepository extends JpaRepository<LeaveApprovalRequest, Long> {
   
}

