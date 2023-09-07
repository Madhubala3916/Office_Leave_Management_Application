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
import com.mbd.Model.LeaveApprovalRequest;
import com.mbd.Repository.LeaveApplicationRepository;
import com.mbd.Repository.LeaveApprovalRepository;
import com.mbd.Service.LeaveApprovalService;

public class LeaveApprovalServiceTest {

	@Mock
	private LeaveApplicationRepository leaveRequestRepository;

	@Mock
	private LeaveApprovalRepository leaveApprovalRepository;

	@InjectMocks
	private LeaveApprovalService leaveApprovalService;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this); // Initialize mocks
	}

	@Test
	public void testApproveLeave_Success() {
		// Create a sample LeaveApplicationRequest
		LeaveApplicationRequest leaveRequest = new LeaveApplicationRequest();
		leaveRequest.setId(1L);
		// Set other properties of the leaveRequest

		// Create a sample LeaveApprovalRequest
		LeaveApprovalRequest approvalRequest = new LeaveApprovalRequest();
		approvalRequest.setStatus("Approved");
		approvalRequest.setComments("Leave request approved");

		// Mock behavior for leaveRequestRepository
		when(leaveRequestRepository.findById(1L)).thenReturn(java.util.Optional.of(leaveRequest));

		// Mock behavior for leaveApprovalRepository
		when(leaveApprovalRepository.save(any(LeaveApprovalRequest.class))).thenAnswer(invocation -> {
			LeaveApprovalRequest savedApproval = invocation.getArgument(0);
			return savedApproval; // Return the object passed to save
		});

		// Perform the method call
		LeaveApprovalRequest result = leaveApprovalService.approveLeave(1L, approvalRequest);

		// Assertions
		assertNotNull(result);
		assertEquals(approvalRequest.getStatus(), result.getStatus());
		assertEquals(approvalRequest.getComments(), result.getComments());
		assertEquals(leaveRequest, result.getLeaveRequest());

		// Verify that the methods were called as expected
		verify(leaveRequestRepository, times(1)).findById(1L);
		verify(leaveApprovalRepository, times(1)).save(any(LeaveApprovalRequest.class));
	}

	@Test
    public void testApproveLeave_LeaveRequestNotFound() {
        // Mock behavior for leaveRequestRepository to return an empty optional
        when(leaveRequestRepository.findById(1L)).thenReturn(java.util.Optional.empty());

        // Create a sample LeaveApprovalRequest
        LeaveApprovalRequest approvalRequest = new LeaveApprovalRequest();
        approvalRequest.setStatus("Approved");
        approvalRequest.setComments("Leave request approved");

        // Perform the method call and expect an EntityNotFoundException
        assertThrows(EntityNotFoundException.class,
                () -> leaveApprovalService.approveLeave(1L, approvalRequest));
        
        // Verify that the methods were called as expected
        verify(leaveRequestRepository, times(1)).findById(1L);
        verify(leaveApprovalRepository, never()).save(any(LeaveApprovalRequest.class));
    }
}
