package com.renu.server.controllers;


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


@RequestMapping(value="/gl")
@RestController
public class GetAllListController {
private static final Logger LOGGER=LoggerFactory.getLogger(GetAllListController.class);
@Autowired
CustomersRepository consumersRepository;
@GetMapping(value="/getAllList")
public ResponseEntity<List<Consumers>>getGrantedList(){
	LOGGER.info("FROM class GrantedListController, method : getGrantedList()");
	List<Consumers>consumers=consumersRepository.findAll();
	return ResponseEntity.ok().body(consumers);
}
}