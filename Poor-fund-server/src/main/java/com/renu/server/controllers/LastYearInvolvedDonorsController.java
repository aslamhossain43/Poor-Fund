package com.renu.server.controllers;


import java.util.Calendar;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.renu.server.models.Donors;
import com.renu.server.repositories.DonorsRepository;


@CrossOrigin("*")
@RequestMapping(value = "/lytd")
@RestController
public class LastYearInvolvedDonorsController {
	private static final Logger LOGGER = LoggerFactory.getLogger(LastYearInvolvedDonorsController.class);
	@Autowired
	DonorsRepository donorsRepository;

	@GetMapping(value = "/lastYaerTotalDonors")
	public ResponseEntity<List<Donors>> getLastYearTotalDonors() {
		LOGGER.info("From class LastYearInvolvedDonorsController,method : getLastYearTotalDonors()");
		Integer currentYear = Calendar.getInstance().get(Calendar.YEAR);
		LOGGER.info("Current year : "+currentYear);
		Integer lastYear=currentYear-1;
		LOGGER.info("Last year : "+lastYear);
		List<Donors> donors = donorsRepository.getLastYearDonors(lastYear);
		LOGGER.info(""+donors);
		return ResponseEntity.ok().body(donors);
	}

}