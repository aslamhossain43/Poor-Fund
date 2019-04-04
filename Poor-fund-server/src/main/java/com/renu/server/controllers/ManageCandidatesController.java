package com.renu.server.controllers;


import java.io.File;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.renu.server.models.Consumers;
import com.renu.server.repositories.CustomersRepository;


@CrossOrigin("*")
@RequestMapping(value="/mc")
@RestController
public class ManageCandidatesController {
private static final Logger LOGGER=LoggerFactory.getLogger(ManageCandidatesController.class);
private static final String ABS_PATH ="H:\\NodeJS_Github\\Poor-fund-App\\Poor-fund-App\\src\\assets\\client-images\\"; 
private static final String ABS_PATH_FOR_GRANTED_NOT_GRANTED = "H:\\NodeJS_Github\\Poor-fund-App\\Poor-fund-App\\src\\assets\\granted-images\\";

@Autowired
CustomersRepository consumersRepository;

@GetMapping(value="/getAllCandidates")
public ResponseEntity<List<Consumers>>getAllCandidates(){
	LOGGER.info("From class ManageCandidatesController,method : getAllCandidates()");
	List<Consumers>consumers=consumersRepository.findAll();
	return ResponseEntity.ok().body(consumers);
}

@DeleteMapping(value="/deleteCandidate/{id}")
public ResponseEntity<?>deleteCandidates(@PathVariable("id")Long id){
	LOGGER.info("From class ManageCandidatesController,method : deleteCandidates()");
	Consumers consumers=consumersRepository.getById(id);
	File piFile=new File(ABS_PATH+consumers.getPiCode()+".jpg");
	File apiFile=new File(ABS_PATH+consumers.getApiCode()+".jpg");
	File provedFile=new File(ABS_PATH_FOR_GRANTED_NOT_GRANTED+consumers.getPrCode()+".jpg");
	piFile.delete();
	apiFile.delete();
	provedFile.delete();
	LOGGER.info("Deleted piCode : "+consumers.getPiCode());
	LOGGER.info("Deleted apiCode : "+consumers.getApiCode());
	LOGGER.info("Deleted provedCode : "+consumers.getPrCode());
	
	consumersRepository.deleteById(id);
	return ResponseEntity.ok().body("success delete id : "+id);
}
}