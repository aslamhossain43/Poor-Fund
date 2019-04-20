package com.renu.server.controllers;

import java.io.File;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.renu.server.models.Consumers;
import com.renu.server.repositories.CustomersRepository;

@RestController
@RequestMapping(value = "/mng")
public class Manage_Not_Grant_Controller {
	private static final Logger LOGGER = LoggerFactory.getLogger(Manage_Not_Grant_Controller.class);
	@Autowired
	CustomersRepository consumersRepository;
	File file;
	String provedCode = null;

	@PostMapping(value = "/addNotGrant")
	public ResponseEntity<?> addNotGrant(@RequestParam("status") String status,
			@RequestParam("notGrantId") Long notGrantId) {
		LOGGER.info("From class Manage_Not_Grant_Controller ,method : addNotGrant()");

		LOGGER.info("From class Manage_Grant_Not_Grant_Controller ,method : addNotGrant().. Id is valid");

		Consumers consumers = consumersRepository.getById(notGrantId);
		this.provedCode = consumers.getPrCode();
		this.file = new File("/home/atif/SFimages/"
				+ this.provedCode + ".jpg");
		this.file.delete();
		if (status.equals("NULL")) {
			consumers.setStatus(null);
		} else {
			consumers.setStatus(status);
		}
		consumers.setPrCode(null);
		LOGGER.info("From class Manage_Grant_Not_Grant_Controller ,method : addNotGrant()-------" + this.provedCode
				+ ".jpg--------has deleted ");

		consumersRepository.save(consumers);
		consumers.setStatus(null);
		return ResponseEntity.ok().body(" status added ");

	}

}