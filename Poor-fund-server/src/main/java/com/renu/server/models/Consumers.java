package com.renu.server.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Consumers extends TimeSetting<Long> {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String piCode;
	private String apiCode;
	private String prCode;

	@NotBlank(message = "Enter your  name")
	private String name;
	@NotBlank(message = "Your country")
	private String country;
	@NotBlank(message = "Enter your zela")
	private String zela;
	@NotBlank(message = "Enter your upozela")
	private String upozela;
	@NotBlank(message = "Enter your union")
	private String union;
	@NotBlank(message = "Enter your work")
	private String work;
	@NotNull
	private Long contact;
	@NotNull
	private Long bkash;
	private String status;
    private Integer year;
    private String uid;
	@Override
	public Long getId() {
		return id;
	}

	public Consumers() {

	}

	public String getPiCode() {
		return piCode;
	}

	public void setPiCode(String piCode) {
		this.piCode = piCode;
	}

	public String getApiCode() {
		return apiCode;
	}

	public void setApiCode(String apiCode) {
		this.apiCode = apiCode;
	}

	public String getPrCode() {
		return prCode;
	}

	public void setPrCode(String prCode) {
		this.prCode = prCode;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getZela() {
		return zela;
	}

	public void setZela(String zela) {
		this.zela = zela;
	}

	public String getUpozela() {
		return upozela;
	}

	public void setUpozela(String upozela) {
		this.upozela = upozela;
	}

	public String getUnion() {
		return union;
	}

	public void setUnion(String union) {
		this.union = union;
	}

	public String getWork() {
		return work;
	}

	public void setWork(String work) {
		this.work = work;
	}

	public Long getContact() {
		return contact;
	}

	public void setContact(Long contact) {
		this.contact = contact;
	}

	public Long getBkash() {
		return bkash;
	}

	public void setBkash(Long bkash) {
		this.bkash = bkash;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	
	
	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	@Override
	public String toString() {
		return "Consumers [id=" + id + ", piCode=" + piCode + ", apiCode=" + apiCode + ", prCode=" + prCode + ", name="
				+ name + ", country=" + country + ", zela=" + zela + ", upozela=" + upozela + ", union=" + union
				+ ", work=" + work + ", contact=" + contact + ", bkash=" + bkash + ", status=" + status + ", year="
				+ year + ", uid=" + uid + "]";
	}

	

	

}

