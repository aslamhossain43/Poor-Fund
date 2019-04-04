package com.renu.server.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Donors extends TimeSetting<Long> {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@NotNull
	private String donorsName;
	@NotNull
	private String country;
	@NotNull
	private String city;
	@NotNull
	private Long contact;
	private Integer year;
	public Donors() {
	}
	@Override
	public Long getId() {
		return id;
	}
	public String getDonorsName() {
		return donorsName;
	}
	public void setDonorsName(String donorsName) {
		this.donorsName = donorsName;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	
	public Long getContact() {
		return contact;
	}
	public void setContact(Long contact) {
		this.contact = contact;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	@Override
	public String toString() {
		return "Donors [id=" + id + ", donorsName=" + donorsName + ", country=" + country + ", city=" + city
				+ ", contact=" + contact + ", year=" + year + "]";
	}
	
	
	

}
