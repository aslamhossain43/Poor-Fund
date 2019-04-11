package com.renu.server.controllers;


import java.util.Calendar;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.renu.server.models.Consumers;
import com.renu.server.repositories.CustomersRepository;

@RequestMapping(value="/lycl")
@RestController
public class LastYearCandidatesListController {
private static final Logger LOGGER=LoggerFactory.getLogger(LastYearCandidatesListController.class);
@Autowired
CustomersRepository consumersRepository;
@GetMapping(value="/lastYearCandidateList")
public ResponseEntity<List<Consumers>>getLastYearCandidates(){
	LOGGER.info("From class LastYearCandidatesListController,method : getLastYearCandidates()");
	Integer currentYear=Calendar.getInstance().get(Calendar.YEAR);
	Integer lastYear=currentYear-1;
	List<Consumers>consumers=consumersRepository.getLastYearCandidates(lastYear);
	return ResponseEntity.ok().body(consumers);
}

}