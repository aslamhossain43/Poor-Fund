package com.renu.server.controllers;

import java.util.List;

import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.renu.server.models.EmailSending;
import com.renu.server.repositories.EmailSendingRepository;

@RestController
public class EmailController {
	private static final Logger LOGGER = LoggerFactory.getLogger(EmailController.class);
	@Autowired
	private JavaMailSender sender;

	@Autowired
	EmailSendingRepository emailSendingRepository;

	@RequestMapping(value = "/emailSending")
	public ResponseEntity<?> sendingEmail(@RequestBody EmailSending emailSending) throws Exception {
		LOGGER.info("From class EmailController,method : sendingEmail()-----ENTER-----");

		MimeMessage message = sender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setTo(emailSending.getTo());
		helper.setSubject(emailSending.getSubject());
		helper.setText(emailSending.getMessage());
		LOGGER.info("To : " + emailSending.getTo());
		LOGGER.info("Subject : " + emailSending.getSubject());
		LOGGER.info("Message : " + emailSending.getMessage());

		sendMailAsynchronously(message);
		emailSendingRepository.save(emailSending);

		return ResponseEntity.ok().body("Email is sending");

	}

	@Async
	private void sendMailAsynchronously(MimeMessage message) {
		LOGGER.info("From sendMailAsynchronously()-----ENTER-----");
		sender.send(message);

	}

	@RequestMapping(value = "/gettingEmails")
	public ResponseEntity<List<EmailSending>> gettingEmails() {
		LOGGER.info("From class EmailController,method : gettingEmails()-----ENTER-----");
		List<EmailSending> emailSendings = emailSendingRepository.findAll();
		return ResponseEntity.ok().body(emailSendings);

	}
	
	@RequestMapping(value = "/gettingEmail/{id}")
	public ResponseEntity<EmailSending> gettingEmail(@PathVariable Long id) {
		LOGGER.info("From class EmailController,method : gettingEmail()-----ENTER-----");
		EmailSending emailSending = emailSendingRepository.getById(id);
		return ResponseEntity.ok().body(emailSending);

	}

	@RequestMapping(value = "/deleteById/{id}")
	public ResponseEntity<?> deleteById(@PathVariable Long id) {
		LOGGER.info("From class EmailController,method : deleteById()-----ENTER-----");
		EmailSending emailSending = emailSendingRepository.getById(id);
		emailSendingRepository.delete(emailSending);
		return ResponseEntity.ok().body("deleted email id : " + id);

	}

}
