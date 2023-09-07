package com.mbd;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import javax.persistence.EntityNotFoundException;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.mbd.Model.LeaveApplicationRequest;
import com.mbd.Model.LeaveBalanceInfo;
import com.mbd.Repository.LeaveBalanceRepository;
import com.mbd.Service.LeaveBalanceService;

public class LeaveBalanceServiceTest {

    @Mock
    private LeaveBalanceRepository leaveBalanceRepository;

    @InjectMocks
    private LeaveBalanceService leaveBalanceService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this); // Initialize mocks
    }

    @Test
    public void testGetLeaveBalance_Success() {
        // Create a sample LeaveApplicationRequest
        LeaveApplicationRequest applicationRequest = new LeaveApplicationRequest();
        applicationRequest.setId(1L);
        applicationRequest.setLeaveType("Annual Leave");

        // Create a sample LeaveBalanceInfo
        LeaveBalanceInfo leaveBalanceInfo = new LeaveBalanceInfo();
        leaveBalanceInfo.setId(1L);
        leaveBalanceInfo.setLeaveType("Annual Leave");
        leaveBalanceInfo.setBalance(10); // Example balance

        // Mock behavior for leaveBalanceRepository
        when(leaveBalanceRepository.findByIdAndLeaveType(1L, "Annual Leave")).thenReturn(java.util.Optional.of(leaveBalanceInfo));

        // Perform the method call
        LeaveBalanceInfo result = leaveBalanceService.getLeaveBalance(applicationRequest);

        // Assertions
        assertNotNull(result);
        assertEquals(leaveBalanceInfo.getId(), result.getId());
        assertEquals(leaveBalanceInfo.getLeaveType(), result.getLeaveType());
        assertEquals(leaveBalanceInfo.getBalance(), result.getBalance());

        // Verify that the methods were called as expected
        verify(leaveBalanceRepository, times(1)).findByIdAndLeaveType(1L, "Annual Leave");
    }

    @Test
    public void testGetLeaveBalance_LeaveBalanceNotFound() {
        // Create a sample LeaveApplicationRequest
        LeaveApplicationRequest applicationRequest = new LeaveApplicationRequest();
        applicationRequest.setId(1L);
        applicationRequest.setLeaveType("Annual Leave");

        // Mock behavior for leaveBalanceRepository to return an empty optional
        when(leaveBalanceRepository.findByIdAndLeaveType(1L, "Annual Leave")).thenReturn(java.util.Optional.empty());

        // Perform the method call and expect an EntityNotFoundException
        assertThrows(EntityNotFoundException.class,
                () -> leaveBalanceService.getLeaveBalance(applicationRequest));

        // Verify that the methods were called as expected
        verify(leaveBalanceRepository, times(1)).findByIdAndLeaveType(1L, "Annual Leave");
    }
}
