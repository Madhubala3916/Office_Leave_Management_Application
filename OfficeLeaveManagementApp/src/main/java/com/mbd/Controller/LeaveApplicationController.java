package com.mbd.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mbd.Model.LeaveApplicationRequest;
import com.mbd.Service.LeaveApplicationService;

@RestController
@RequestMapping("/api/leave")
public class LeaveApplicationController {
	@Autowired
    private  LeaveApplicationService leaveApplicationService;

    @PostMapping("/apply")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<LeaveApplicationRequest> applyForLeave(@RequestBody LeaveApplicationRequest applicationRequest) {
        LeaveApplicationRequest leaveRequest = leaveApplicationService.applyForLeave(applicationRequest);
        return ResponseEntity.ok(leaveRequest);
    }
}



