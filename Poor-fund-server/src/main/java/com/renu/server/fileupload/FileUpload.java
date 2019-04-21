package com.renu.server.fileupload;


import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileUpload {
	private static final Path ABS_PATH = Paths.get("/home/atif/SFimages");
	
	private static final Path ABS_PATH_FOR_GRANTED_NOT_GRANTED = Paths
			.get("/home/atif/SFimages");
	private static final Path ABS_PATH_FOR_STAFF_IMAGES = Paths
			.get("/home/atif/SFimages");
	private static final Logger LOGGER = LoggerFactory.getLogger(FileUpload.class);

	public static void fileUpload(MultipartFile piFile, String piCode, MultipartFile apiFile, String apiCode) {
		LOGGER.info("FROM piFileUpload method");
         if (!(piCode.equals(null)&&apiCode.equals(null))) {
			
		try {
			Files.copy(piFile.getInputStream(), ABS_PATH.resolve(piCode + ".jpg"));
			Files.copy(apiFile.getInputStream(), ABS_PATH.resolve(apiCode + ".jpg"));

		} catch (Exception e) {
			throw new RuntimeException(e);
		}
         }else {
        	 LOGGER.info("FROM piFileUpload method, piCode or apiCode is null");
		}
        

	}
	
	public static void fileUploadForGranted(MultipartFile provedFile, String provedCode) {

		LOGGER.info("FROM piFileUploadForGranted method");
			
		try {
			Files.copy(provedFile.getInputStream(), ABS_PATH_FOR_GRANTED_NOT_GRANTED.resolve(provedCode + ".jpg"));

		} catch (Exception e) {
			throw new RuntimeException("FAIL!");
		}
        
        

	}
	public static void fileUploadForStaff(MultipartFile file, String sCode) {

		LOGGER.info("FROM piFileUploadForGranted method");
			
		try {
			Files.copy(file.getInputStream(), ABS_PATH_FOR_STAFF_IMAGES.resolve(sCode + ".jpg"));

		} catch (Exception e) {
			throw new RuntimeException("FAIL!");
		}
        
        

	}
	
	

}