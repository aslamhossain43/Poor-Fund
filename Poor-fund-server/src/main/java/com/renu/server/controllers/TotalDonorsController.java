package com.renu.server.controllers;


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


@CrossOrigin
@RequestMapping(value="/td")
@RestController
public class TotalDonorsController {
private static final Logger LOGGER=LoggerFactory.getLogger(TotalDonorsController.class);
@Autowired
DonorsRepository donorsRepository;


@GetMapping(value="/totalDonors")
public ResponseEntity<List<Donors>>getTotalDonors(){
	LOGGER.info("From class TotalDonorsController,method : getTotalDonors()");
	List<Donors>donors=donorsRepository.findAll();
	return ResponseEntity.ok().body(donors);
}


}