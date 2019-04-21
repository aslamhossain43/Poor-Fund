package com.renu.server.controllers;
import java.io.File;
import java.util.Calendar;
import java.util.List;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.renu.server.fileupload.FileUpload;
import com.renu.server.models.Consumers;
import com.renu.server.repositories.CustomersRepository;


@RequestMapping(value = "/consumers")
@RestController
public class CustomersController {
	private static final Logger LOGGER = LoggerFactory.getLogger(CustomersController.class);
	@Autowired
	FileUpload fileUpload;
	@Autowired
	CustomersRepository consumersRepository;
	public String piCode = null;
	public String apiCode = null;
	private static final String ABS_PATH = "/home/atif/SFimages";
	
	private static final String ABS_PATH_FOR_GRANTED_NOT_GRANTED = "/home/atif/SFimages";
	
	@GetMapping(value="/getConsumers")
	public ResponseEntity<List<Consumers>>getAllConsumers(){
		LOGGER.info(" From class ConsumersController, method : getAllConsumers() ");
		Integer currentYear=Calendar.getInstance().get(Calendar.YEAR);
		List<Consumers>consumers=consumersRepository.getCurrentYearCandidates(currentYear);
	return ResponseEntity.ok().body(consumers);
	}
	

	@PostMapping(value = "/addFile")
	public ResponseEntity<?> addConsumersFile(@RequestParam("piFile") MultipartFile piFile,
			@RequestParam("apiFile") MultipartFile apiFile) {
		LOGGER.info("From class ConsumersController ,method : ResponseEntity<String>addConsumersFile()");
		if ((piFile.getContentType().equals("image/jpeg") || piFile.getContentType().equals("image/jpg")
				|| piFile.getContentType().equals("image/png") || piFile.getContentType().equals("image/gif"))
				&& (apiFile.getContentType().equals("image/jpeg") || apiFile.getContentType().equals("image/jpg")
						|| apiFile.getContentType().equals("image/png")
						|| apiFile.getContentType().equals("image/gif"))) {

			this.piCode = "PI" + UUID.randomUUID().toString().substring(26).toUpperCase();
			this.apiCode = "API" + UUID.randomUUID().toString().substring(26).toUpperCase();

			FileUpload.fileUpload(piFile, piCode, apiFile, apiCode);
			LOGGER.info(this.piCode);
			LOGGER.info(this.apiCode);
			LOGGER.info("From class ConsumersController ,method : ResponseEntity<String>addConsumersFile(),Image uploaded");
			return ResponseEntity.ok().body(" success file upload ");
		} else {
			LOGGER.info("From class ConsumersController ,method : ResponseEntity<String>addConsumersFile(), File not an image that is rejected");
			return ResponseEntity.badRequest().body(null);

		}

	}

	@PostMapping(value = "/addConsumers")
	public ResponseEntity<?> addConsumers(@RequestBody Consumers consumers) {
		LOGGER.info("From class ConsumersController, method : addConsumers() ");
		
			if (!(this.piCode.equals(null) && this.apiCode.equals(null))) {

				LOGGER.info("piCode : "+this.piCode);
				LOGGER.info("apiCode : "+this.apiCode);
				LOGGER.info("uid : "+consumers.getUid());
				
				consumers.setPiCode(this.piCode);
				consumers.setApiCode(this.apiCode);
				consumers.setYear(Calendar.getInstance().get(Calendar.YEAR));
				consumersRepository.save(consumers);
				LOGGER.info("CANDIDATES ADDED ,piCode : "+this.piCode);
				LOGGER.info("CANDIDATES ADDED ,apiCode : "+this.apiCode);
				this.piCode = null;
				this.apiCode = null;
				consumers.setId(null);

			}
			return ResponseEntity.ok().body("Operation success !");

		
	}
	@PutMapping(value="/updateConsumers/{id}")
	public ResponseEntity<?>updateCandidate(@PathVariable("id")Long id,@RequestBody Consumers consumers){
		LOGGER.info("Drom class ConsumersController ,method : updateCandidate()");
		Consumers consumersById=consumersRepository.getById(id);
		consumers.setYear(Calendar.getInstance().get(Calendar.YEAR));
		File piFile=new File(ABS_PATH+consumersById.getPiCode()+".jpg");
		File apiFile=new File(ABS_PATH+consumersById.getApiCode()+".jpg");
		
		piFile.delete();
		apiFile.delete();
		LOGGER.info("Deleted-----"+consumersById.getPiCode()+".jpg");
		LOGGER.info("Deleted-----"+consumersById.getApiCode()+".jpg");
		consumers.setPiCode(this.piCode);
		consumers.setApiCode(this.apiCode);
		LOGGER.info("Set-----"+this.piCode+".jpg");
		LOGGER.info("Set-----"+this.apiCode+".jpg");
		consumersRepository.save(consumers);
		LOGGER.info("CANDIDATES ADDED ,piCode : "+this.piCode);
		LOGGER.info("CANDIDATES ADDED ,apiCode : "+this.apiCode);
		this.piCode = null;
		this.apiCode = null;
		consumers.setId(null);
		return ResponseEntity.ok().body("success update id : "+id);
	}
	@DeleteMapping(value="/deleteCandidate/{id}")
	public ResponseEntity<?>deleteCandidates(@PathVariable("id")Long id){
		LOGGER.info(" From class ConsumersController, method : deleteCandidate() ");
		Consumers consumers=consumersRepository.getById(id);
		File piFile=new File(ABS_PATH+consumers.getPiCode()+".jpg");
		File apiFile=new File(ABS_PATH+consumers.getApiCode()+".jpg");
		File provedFile=new File(ABS_PATH_FOR_GRANTED_NOT_GRANTED+consumers.getPrCode()+".jpg");
		piFile.delete();
		apiFile.delete();
		provedFile.delete();
		consumersRepository.deleteById(id);
		LOGGER.info("Deleted id is : "+id);
		return ResponseEntity.ok().body("delete success : Id : "+id);
	}
	
	@GetMapping(value="/candidateById/{id}")
	public ResponseEntity<Consumers>getCandidateById(@PathVariable("id")Long id){
		LOGGER.info("From class ConsumersController, method : getCandidateById() ");
		Consumers consumers=consumersRepository.getById(id);
		return ResponseEntity.ok().body(consumers);
	}

}