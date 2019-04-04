package com.renu.server.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renu.server.models.Donors;


public interface DonorsRepository extends JpaRepository<Donors,Long>,JpaSpecificationExecutor<Donors> {
// GET BY ID
	public Donors getById(Long id);
	// GET LAST YEAR DONORS
	public static final String LASTYEARQUERY="FROM Donors where year=:lastYear";
	@Query(LASTYEARQUERY)
	public List<Donors>getLastYearDonors(@Param("lastYear") Integer lastYear);
	// GET CURRENT YEAR DONORS
		public static final String CURRENTYEARQUERY="FROM Donors where year=:currentYear";
		@Query(CURRENTYEARQUERY)
		public List<Donors>getCurrentYearDonors(@Param("currentYear") Integer currentYear);
}