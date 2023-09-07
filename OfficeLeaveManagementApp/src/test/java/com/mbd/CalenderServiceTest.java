package com.mbd;

import static org.mockito.Mockito.*;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.mbd.Model.LeaveApplicationRequest;
import com.mbd.Model.LeaveCalendar;
import com.mbd.Repository.LeaveApplicationRepository;
import com.mbd.Service.CalendarService;


public class CalenderServiceTest {

	@Mock
	private LeaveApplicationRepository leaveRequestRepository;

	private CalendarService calendarService;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this); // Initialize mocks
		calendarService = new CalendarService(leaveRequestRepository);
	}
	@Test
	public void testGetLeaveCalender() {
		// Mocking data
		LeaveApplicationRequest request = new LeaveApplicationRequest();
		request.setStartDate(LocalDate.of(2023, 9, 1));
		request.setEndDate(LocalDate.of(2023, 9, 3));

		when(leaveRequestRepository.findAll()).thenReturn(Arrays.asList(request));

		// Perform the method call
		List<LeaveCalendar> leaveCalendar = calendarService.getLeaveCalendar();

		// Assertions
		assert !leaveCalendar.isEmpty();
		assert leaveCalendar.size() == 3;
	}
}
