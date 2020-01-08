package com.matrix.rental.model.dto;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class RentalDTO implements Serializable {
	

	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String typeIdentification;
	private Integer identification;
	private String fullName;
	private String address;
	private Integer telefone;
	private Date rentalDate;
	private Date returnlDate;
	private Integer codeUser;
	private Integer filmId;
	
	public Integer getFilmId() {
		return filmId;
	}
	public void setFilmId(Integer filmId) {
		this.filmId = filmId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTypeIdentification() {
		return typeIdentification;
	}
	public void setTypeIdentification(String typeIdentification) {
		this.typeIdentification = typeIdentification;
	}
	public Integer getIdentification() {
		return identification;
	}
	public void setIdentification(Integer identification) {
		this.identification = identification;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Integer getTelefone() {
		return telefone;
	}
	public void setTelefone(Integer telefone) {
		this.telefone = telefone;
	}
	public Date getRentalDate() {
		return rentalDate;
	}
	public void setRentalDate(Date rentalDate) {
		this.rentalDate = rentalDate;
	}
	public Date getReturnlDate() {
		return returnlDate;
	}
	public void setReturnlDate(Date returnlDate) {
		this.returnlDate = returnlDate;
	}
	public Integer getCodeUser() {
		return codeUser;
	}
	public void setCodeUser(Integer codeUser) {
		this.codeUser = codeUser;
	}
	
}
