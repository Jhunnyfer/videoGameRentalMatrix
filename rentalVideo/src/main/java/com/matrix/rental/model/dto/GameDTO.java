package com.matrix.rental.model.dto;

import java.io.Serializable;

public class GameDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private Integer code;
	private String tittle;
	private String description;
	private float priceRental;
	private float priceSale;
	private Integer year;
	private Integer minAge;
	private Integer status;
	private Integer genreId;
	private Integer consoleId;
	private Integer brandId;
	
	
	public Integer getConsoleId() {
		return consoleId;
	}

	public void setConsoleId(Integer consoleId) {
		this.consoleId = consoleId;
	}

	public Integer getBrandId() {
		return brandId;
	}

	public void setBrandId(Integer brandId) {
		this.brandId = brandId;
	}

	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getTittle() {
		return tittle;
	}

	public void setTittle(String tittle) {
		this.tittle = tittle;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public Integer getMinAge() {
		return minAge;
	}

	public void setMinAge(Integer minAge) {
		this.minAge = minAge;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getGenreId() {
		return genreId;
	}

	public void setGenreId(Integer genreId) {
		this.genreId = genreId;
	}

	public float getPriceRental() {
		return priceRental;
	}

	public void setPriceRental(float price_rental) {
		this.priceRental = price_rental;
	}

	public float getPriceSale() {
		return priceSale;
	}

	public void setPriceSale(float priceSale) {
		this.priceSale = priceSale;
	}

}
