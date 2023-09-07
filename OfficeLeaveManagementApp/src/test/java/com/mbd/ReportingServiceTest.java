package com.mbd;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.mbd.Model.LeaveApplicationRequest;
import com.mbd.Model.LeaveBalanceInfo;
import com.mbd.Repository.LeaveApplicationRepository;
import com.mbd.Repository.LeaveBalanceRepository;
import com.mbd.Service.ReportingService;

public class ReportingServiceTest {

    @Mock
    private LeaveBalanceRepository leaveBalanceRepository;

    @Mock
    private LeaveApplicationRepository leaveRequestRepository;

    @InjectMocks
    private ReportingService reportingService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this); // Initialize mocks
    }

    @Test
    public void testGetLeaveBalancesReport() {
        // Create a sample list of LeaveBalanceInfo
        List<LeaveBalanceInfo> leaveBalanceInfoList = new ArrayList<>();
        // Populate the list with sample data
        
        // Mock behavior for leaveBalanceRepository
        when(leaveBalanceRepository.findAll()).thenReturn(leaveBalanceInfoList);

        // Perform the method call
        List<LeaveBalanceInfo> result = reportingService.getLeaveBalancesReport();

        // Assertions
        assertNotNull(result);
        assertEquals(leaveBalanceInfoList.size(), result.size());

        // Verify that the methods were called as expected
        verify(leaveBalanceRepository, times(1)).findAll();
    }

    @Test
    public void testGetLeaveHistoryReport() {
        // Create a sample list of LeaveApplicationRequest
        List<LeaveApplicationRequest> leaveApplicationRequestList = new ArrayList<>();
        // Populate the list with sample data
        
        // Mock behavior for leaveRequestRepository
        when(leaveRequestRepository.findAll()).thenReturn(leaveApplicationRequestList);

        // Perform the method call
        List<LeaveApplicationRequest> result = reportingService.getLeaveHistoryReport();

        // Assertions
        assertNotNull(result);
        assertEquals(leaveApplicationRequestList.size(), result.size());

        // Verify that the methods were called as expected
        verify(leaveRequestRepository, times(1)).findAll();
    }

    @Test
    public void testGetAbsenteeismReport() {
        // Create a sample list of LeaveApplicationRequest
        List<LeaveApplicationRequest> leaveRequests = new ArrayList<>();
        // Populate the list with sample data
        
        // Mock behavior for leaveRequestRepository
        when(leaveRequestRepository.findAll()).thenReturn(leaveRequests);

        // Perform the method call
        Map<Long, Integer> result = reportingService.getAbsenteeismReport();

        // Assertions
        assertNotNull(result);
        // Add more assertions based on your sample data and expected results

        // Verify that the methods were called as expected
        verify(leaveRequestRepository, times(1)).findAll();
    }
}
