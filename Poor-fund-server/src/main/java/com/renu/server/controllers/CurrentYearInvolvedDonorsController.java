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
@RequestMapping(value = "/cytd")
@RestController
public class CurrentYearInvolvedDonorsController {
	private static final Logger LOGGER = LoggerFactory.getLogger(CurrentYearInvolvedDonorsController.class);
	@Autowired
	DonorsRepository donorsRepository;

	@GetMapping(value = "/currentYaerTotalDonors")
	public ResponseEntity<List<Donors>> getCurrentYearTotalDonors() {
		LOGGER.info("From class CurrentYearInvolvedDonorsController,method : getCurrentYearTotalDonors()");
		Integer currentYear = Calendar.getInstance().get(Calendar.YEAR);
		LOGGER.info("Current year : "+currentYear);
		List<Donors> donors = donorsRepository.getCurrentYearDonors(currentYear);
		LOGGER.info(""+donors);
		return ResponseEntity.ok().body(donors);
	}
}