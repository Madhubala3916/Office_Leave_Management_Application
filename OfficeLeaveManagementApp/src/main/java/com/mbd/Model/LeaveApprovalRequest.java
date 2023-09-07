package com.mbd.Model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "leave_approval_request")
@PrimaryKeyJoinColumn
public class LeaveApprovalRequest {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    private String status;
    private String comments;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "leave_request")
    private LeaveApplicationRequest leaveRequest;

	public LeaveApprovalRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public LeaveApplicationRequest getLeaveRequest() {
		return leaveRequest;
	}

	public void setLeaveRequest(LeaveApplicationRequest leaveRequest) {
		this.leaveRequest = leaveRequest;
	}
    
}
