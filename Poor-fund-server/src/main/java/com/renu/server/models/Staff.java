package com.renu.server.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Staff extends TimeSetting<Long> {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String staffCode;
	@NotBlank
	private String name;
	@NotBlank
	private String job;
	@NotBlank
	private String details;
	@Override
	public Long getId() {
		return id;
	}
public Staff() {
}

public String getStaffCode() {
	return staffCode;
}
public void setStaffCode(String staffCode) {
	this.staffCode = staffCode;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getJob() {
	return job;
}
public void setJob(String job) {
	this.job = job;
}
public String getDetails() {
	return details;
}
public void setDetails(String details) {
	this.details = details;
}
public void setId(Long id) {
	this.id = id;
}
@Override
public String toString() {
	return "Staff [id=" + id + ", staffCode=" + staffCode + ", name=" + name + ", job=" + job + ", details=" + details
			+ "]";
}
	



}
