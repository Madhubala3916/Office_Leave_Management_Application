package com.mbd.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mbd.Model.LeaveReport;

@Repository
public interface LeaveReportRepository extends JpaRepository<LeaveReport, Long> {
   
}

