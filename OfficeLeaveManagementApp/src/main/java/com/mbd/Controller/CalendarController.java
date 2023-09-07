package com.mbd.Controller;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mbd.Model.LeaveCalendar;
import com.mbd.Service.CalendarService;

@RestController
@RequestMapping("/api/calendar")
public class CalendarController {
    private final CalendarService calendarService;

    @Autowired
    public CalendarController(CalendarService calendarService) {
        this.calendarService = calendarService;
    }

    @GetMapping("/leave-calendar")
    public ResponseEntity<List<LeaveCalendar>> getLeaveCalendar() {
        List<LeaveCalendar> leaveCalendar = calendarService.getLeaveCalendar();
        return ResponseEntity.ok(leaveCalendar);
    }
}
