package com.matrix.rental.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "rental")
public class Rental implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "type_identification")
	private String typeIdentification;
	private Integer identification;
	@Column(name = "full_name")
	private String fullName;
	private String address;
	@Column(name = "telefone")
	private Integer telefone;
	@Column(name = "rental_date")
	private Date rentalDate;
	@Column(name = "return_date")
	private Date returnlDate;
	@Column(name = "code_user")
	private Date codeUser;

	@JoinColumn(name = "film_id", nullable = false)
	@ManyToOne
	private Film film;

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

	public Date getCodeUser() {
		return codeUser;
	}

	public void setCodeUser(Date codeUser) {
		this.codeUser = codeUser;
	}

	public Film getFilm() {
		return film;
	}

	public void setFilm(Film film) {
		this.film = film;
	}

}
