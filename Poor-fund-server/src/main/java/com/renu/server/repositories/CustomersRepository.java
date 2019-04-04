package com.renu.server.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renu.server.models.Consumers;


public interface CustomersRepository extends JpaRepository<Consumers, Long>,JpaSpecificationExecutor<Consumers> {
    // GRT BY ID
	Consumers getById(Long id);
	// GET LAST YEAR CANDIDATES
	static final String LAST_YEAR_CANDIDATES="FROM Consumers where year=:lastYear";
	@Query(LAST_YEAR_CANDIDATES)
	List<Consumers>getLastYearCandidates(@Param("lastYear") Integer lastYear);
	// GET CURRENT YEAR CANDIDATES
		static final String CURRENT_YEAR_CANDIDATES="FROM Consumers where year=:currentYear";
		@Query(CURRENT_YEAR_CANDIDATES)
		List<Consumers>getCurrentYearCandidates(@Param("currentYear") Integer currentYear);
}