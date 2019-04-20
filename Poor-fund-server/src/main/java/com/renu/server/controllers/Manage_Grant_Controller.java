package com.renu.server.controllers;

import java.io.File;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.renu.server.fileupload.FileUpload;
import com.renu.server.models.Consumers;
import com.renu.server.repositories.CustomersRepository;

@RestController
@RequestMapping(value = "/mg")
public class Manage_Grant_Controller {
	private static final Logger LOGGER = LoggerFactory.getLogger(Manage_Grant_Controller.class);
	@Autowired
	CustomersRepository consumersRepository;
	private String provedCode = null;
	String prFileCode = null;
	File file = null;

	@PostMapping(value = "/addGrant")
	public ResponseEntity<?> addGrant(@RequestParam("provedFile") MultipartFile provedFile,
			@RequestParam("status") String status, @RequestParam("grantId") Long grantId) {
		LOGGER.info("From class Manage_Grant_Not_Grant_Controller ,method : addGrant()");

		if (provedFile.getContentType().equals("image/jpeg") || provedFile.getContentType().equals("image/jpg")
				|| provedFile.getContentType().equals("image/png") || provedFile.getContentType().equals("image/gif")) {

			this.provedCode = "PR" + UUID.randomUUID().toString().substring(26).toUpperCase();
			LOGGER.info("From class Manage_Grant_Not_Grant_Controller ,method : addGrant()..File is valid");

			if (this.provedCode != null) {
				LOGGER.info("From class Manage_Grant_Not_Grant_Controller ,method : addGrant().. Id is valid");

				Consumers consumers = consumersRepository.getById(grantId);
				if (consumers != null) {
					this.prFileCode = consumers.getPrCode();
					this.file = new File(
							"/home/atif/SFimages/"
									+ this.prFileCode + ".jpg");
					this.file.delete();
					LOGGER.info("From class Manage_Grant_Not_Grant_Controller ,method : addGrant()---File : "
							+ consumers.getPrCode() + ".jpg--deleted");

					FileUpload.fileUploadForGranted(provedFile, this.provedCode);

					consumers.setStatus(status);
					consumers.setPrCode(this.provedCode);
					consumersRepository.save(consumers);
					consumers.setStatus(null);
					consumers.setPrCode(null);
					LOGGER.info("From class ConsumersController ,method : addGrant(),Image uploaded");
					return ResponseEntity.ok().body(" success file upload ");
				}
				return ResponseEntity.badRequest().body(" id not valid others are right ");
			}
			return ResponseEntity.badRequest().body("file valid but id or proved code not valid !! ");
		} else {
			LOGGER.info("From class ConsumersController ,method : addGrant(), File not an image that is rejected");
			return ResponseEntity.badRequest().body(null);

		}

	}

}