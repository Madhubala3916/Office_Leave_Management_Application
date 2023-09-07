package com.mbd.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mbd.Model.LeaveApplicationRequest;

//@Repository
public interface LeaveApplicationRepository extends JpaRepository<LeaveApplicationRequest, Long> {
	
}

