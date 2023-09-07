package com.mbd;

import static org.mockito.Mockito.*;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.mbd.Model.LeaveApplicationRequest;
import com.mbd.Repository.LeaveApplicationRepository;
import com.mbd.Service.LeaveApplicationService;

import static org.junit.jupiter.api.Assertions.*;

public class LeaveApplicationServiceTest {

	@Mock
	private LeaveApplicationRepository leaveApplicationRepository;

	private LeaveApplicationService leaveApplicationService;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this); // Initialize mocks
		leaveApplicationService = new LeaveApplicationService(leaveApplicationRepository);
	}

	@Test
	public void testApplyForLeave() {
		// Create a sample LeaveApplicationRequest
		LeaveApplicationRequest request = new LeaveApplicationRequest();
		request.setId(1L);
		request.setStartDate(LocalDate.of(2023, 9, 1));
		request.setEndDate(LocalDate.of(2023, 9, 3));
		request.setLeaveType("Sick Leave");
		request.setReason("Medical");

		// Mock the save method to return the request object
		when(leaveApplicationRepository.save(any(LeaveApplicationRequest.class))).thenAnswer(invocation -> {
			LeaveApplicationRequest savedRequest = invocation.getArgument(0);
			savedRequest.setId(1L); // Assuming you want to set an ID for the saved request
			return savedRequest;
		});

		// Perform the method call
		LeaveApplicationRequest result = leaveApplicationService.applyForLeave(request);

		// Assertions
		assertNotNull(result);
		assertEquals(1L, result.getId()); // Assuming ID is set by the save method
		assertEquals(request.getStartDate(), result.getStartDate());
		assertEquals(request.getEndDate(), result.getEndDate());
		assertEquals(request.getLeaveType(), result.getLeaveType());
		assertEquals(request.getReason(), result.getReason());
		assertEquals("Pending", result.getStatus()); // Ensure status is set to "Pending"
	}
}
