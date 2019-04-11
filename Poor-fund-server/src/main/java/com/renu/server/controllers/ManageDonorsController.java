package com.renu.server.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.renu.server.models.Donors;
import com.renu.server.repositories.DonorsRepository;


@RequestMapping(value = "/md")
@RestController
public class ManageDonorsController {
	private static final Logger LOGGER = LoggerFactory.getLogger(ManageDonorsController.class);
	@Autowired
	DonorsRepository donorsRepository;

	
	@GetMapping(value="/getAllDonors")
	public ResponseEntity<List<Donors>>getAllDonors(){
		LOGGER.info("From class ManageDonorsController,mrthod : getAllDonors()");
		List<Donors>donors=donorsRepository.findAll();
		return ResponseEntity.ok().body(donors);
	}
	
	
	@DeleteMapping(value = "/deleteDonors/{id}")
	public ResponseEntity<?> deleteDonors(@PathVariable("id") Long id) {
		LOGGER.info("From class ManageDonorsController,method : deleteDonors()");
		donorsRepository.deleteById(id);
		LOGGER.info("Id : "+id+ " has deleted");
		return ResponseEntity.ok().body("success delete id : " + id);
	}
}