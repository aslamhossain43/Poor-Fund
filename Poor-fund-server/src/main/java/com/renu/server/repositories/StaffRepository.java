package com.renu.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renu.server.models.Staff;

public interface StaffRepository extends JpaRepository<Staff, Long>{
	// deleted by id
		Staff getById(Long id);
	}