package com.renu.server.controllers;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PhotosAccess {
	private static final Logger LOGGER = LoggerFactory.getLogger(PhotosAccess.class);
//GET PROFILE PHOTO URL
	private static final Path PHOTO_URL = Paths.get("/home/atif/SFimages");

	@GetMapping("/getPhotos/{photoCode}")
	public ResponseEntity<Resource> getAllPhotos(@PathVariable("photoCode") String photoCode) {
		LOGGER.info("FROM class PhotosAccess,method : getAllPhotos()---photoCode : " + photoCode);

		Resource file = loadAllPhotos(photoCode);
		return ResponseEntity.ok().body(file);
	}

//GET ALL PROFILE PHOTOS
	public Resource loadAllPhotos(String photoCode) {
		LOGGER.info("FROM class PhotosAccess,method : loadAllPhotos()---photoCode : " + photoCode);
		try {
			Path file = PHOTO_URL.resolve(photoCode + ".jpg");
			Resource resource = new UrlResource(file.toUri());
			if (resource.exists() || resource.isReadable()) {
				return resource;
			} else {
				throw new RuntimeException("FAIL!");
			}
		} catch (MalformedURLException e) {
			throw new RuntimeException("FAIL!");
		}
	}

}
