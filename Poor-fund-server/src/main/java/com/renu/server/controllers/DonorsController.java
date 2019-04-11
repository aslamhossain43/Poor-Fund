package com.renu.server.controllers;

import java.util.Calendar;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.renu.server.models.Donors;
import com.renu.server.repositories.DonorsRepository;


@RequestMapping(value="/donors")
@RestController
public class DonorsController {
private static final Logger LOGGER=LoggerFactory.getLogger(DonorsController.class);
@Autowired
DonorsRepository donorsRepository;

@PostMapping(value="/addDonors")
public ResponseEntity<?>addDonors(@RequestBody Donors donors ){
	LOGGER.info("From class DonorsController,method : addDonors()");
	if (donors.getId()!=null) {
		donors.setYear(Calendar.getInstance().get(Calendar.YEAR));
		donorsRepository.save(donors);
		donors.setId(null);
		return ResponseEntity.ok().body("Donors add success ");
	}else {
		donors.setYear(Calendar.getInstance().get(Calendar.YEAR));
		donorsRepository.save(donors);
		return ResponseEntity.ok().body("Donors add success ");
	}
	
	
}


}