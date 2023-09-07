package com.mbd.Service;

import java.time.format.DateTimeFormatter;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbd.Model.LeaveApplicationRequest;
import com.mbd.Model.LeaveCalendar;
import com.mbd.Repository.LeaveApplicationRepository;

@Service
public class CalendarService {
    private final LeaveApplicationRepository leaveRequestRepository;

    @Autowired
    public CalendarService(LeaveApplicationRepository leaveRequestRepository) {
        this.leaveRequestRepository = leaveRequestRepository;
    }

    public List<LeaveCalendar> getLeaveCalendar() {
        List<LeaveApplicationRequest> leaveRequests = leaveRequestRepository.findAll();
        List<LeaveCalendar> leaveCalendar = new ArrayList<>();

        for (LeaveApplicationRequest request : leaveRequests) {
            LocalDate currentDate = request.getStartDate();
            while (!currentDate.isAfter(request.getEndDate())) {
                LeaveCalendar calendarEntry = new LeaveCalendar();
                calendarEntry.setDate(currentDate);
                calendarEntry.setStatus(request.getStatus()); // Set the status here
                leaveCalendar.add(calendarEntry);
                currentDate = currentDate.plusDays(1);
            }
        }

        return leaveCalendar;
    }
}


