package com.mbd.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mbd.Model.LeaveCalendar;

@Repository
public interface LeaveCalendarRepository extends JpaRepository<LeaveCalendar, Long> {
}

