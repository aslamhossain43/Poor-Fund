package com.renu.server.controllers;

import java.io.File;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.renu.server.fileupload.FileUpload;
import com.renu.server.models.Staff;
import com.renu.server.repositories.StaffRepository;

@RequestMapping(value = "/staff")
@RestController
public class StaffController {
	private static final Logger LOGGER = LoggerFactory.getLogger(StaffController.class);
	private static final String ABS_PATH_FOR_DEVELOPERS_IMAGES = "/root/poor-fund-images/";
	@Autowired
	StaffRepository staffRepository;
	private String sCode = null;
	Staff staff;
	Long longId = null;

	@PostMapping(value = "/addStaff")
	public ResponseEntity<?> addStaff(@RequestParam("sfile") MultipartFile sfile, @RequestParam("name") String name,
			@RequestParam("job") String job, @RequestParam("details") String details, @RequestParam("id") String id,
			@RequestParam("createdDate") String createdDate) {
		// CONVERT STRING TO LONG
		if (!id.equalsIgnoreCase("undefined")) {

			this.longId = Long.valueOf(id);
		}

		if (sfile.getContentType().equals("image/jpeg") || sfile.getContentType().equals("image/jpg")
				|| sfile.getContentType().equals("image/png") || sfile.getContentType().equals("image/gif")) {

			this.sCode = "ST" + UUID.randomUUID().toString().substring(26).toUpperCase();
			LOGGER.info("From class  class StaffController ,method : addStaff()..File is valid");

			LOGGER.info("From class  class StaffController ,method : addStaff()..sCode not null");
			this.staff = new Staff();

			this.staff.setName(name);
			this.staff.setJob(job);
			this.staff.setDetails(details);
			this.staff.setStaffCode(this.sCode);
			if (this.longId != null) {

				Staff staffById = staffRepository.getById(this.longId);
				File file = new File(ABS_PATH_FOR_DEVELOPERS_IMAGES + staffById.getStaffCode() + ".jpg");
				file.delete();
				LOGGER.info("From class  class StaffController ,method : addStaff()..DELETED ---"
						+ staffById.getStaffCode() + ".jpg");
				LOGGER.info("From class  class StaffController ,method : addStaff()..ADDED ---" + this.sCode + ".jpg");

				this.staff.setId(this.longId);
				this.staff.setCreatedDate(createdDate);
			}

			FileUpload.fileUploadForStaff(sfile, this.sCode);
			staffRepository.save(this.staff);
			this.staff.setName(null);
			this.staff.setJob(null);
			this.staff.setDetails(null);
			this.staff.setStaffCode(null);
			this.sCode = null;

			return ResponseEntity.ok()
					.body("From class  class StaffController ,method : addStaff()..file valid...Staff added  !! ");
		} else {
			LOGGER.info("From class  class StaffController ,method : addStaff().. File not an image that is rejected");
			return ResponseEntity.badRequest().body(null);

		}

	}

	@GetMapping(value = "/getStaff")
	public ResponseEntity<List<Staff>> getStaff() {
		LOGGER.info("From class  class StaffController ,method : getStaff() ");
		List<Staff> staffs = staffRepository.findAll();
		return ResponseEntity.ok().body(staffs);
	}

	@GetMapping(value = "/getStaffById/{id}")
	public ResponseEntity<Staff> getStaffById(@PathVariable("id") Long id) {
		LOGGER.info("From class  class StaffController ,method : getStaffById()");
		Staff staff = staffRepository.getById(id);
		return ResponseEntity.ok().body(staff);
	}

	@DeleteMapping(value = "/deleteStaff/{id}")
	public ResponseEntity<?> deleteStaff(@PathVariable("id") Long id) {
		LOGGER.info("From class  class StaffController ,method : deleteStaff() ");
		Staff staff = staffRepository.getById(id);
		File sFile = new File(ABS_PATH_FOR_DEVELOPERS_IMAGES + staff.getStaffCode() + ".jpg");
		sFile.delete();
		staffRepository.delete(staff);
		LOGGER.info("From class  class StaffController ,method : deleteStaff(),DELETED.... " + staff.getStaffCode()
				+ ".jpg");
		return ResponseEntity.ok().body("From class  class StaffController ,method : deleteStaff(),DELETED.... "
				+ staff.getStaffCode() + ".jpg");

	}

}