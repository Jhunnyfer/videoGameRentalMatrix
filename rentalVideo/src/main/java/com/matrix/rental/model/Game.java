package com.matrix.rental.model;

import java.io.Serializable;
import java.util.Set;
import java.util.TreeSet;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "videogames")
public class Game implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private Integer code;
	private String tittle;
	private String description;
	@Column(name = "price_rental")
	private float priceRental;
	@Column(name = "price_sale")
	private float priceSale;
	private Integer year;
	@Column(name = "min_age")
	private Integer minAge;
	private Integer status;
	
	@OneToMany(cascade=CascadeType.ALL, targetEntity=Credit.class)
	@JoinColumn(name="videogame_id")
	private Set<Credit> credits = new TreeSet<>();

	public Set<Credit> getCredits() {
		return credits;
	}

	public void setCredits(Set<Credit> credits) {
		this.credits = credits;
	}

	@JoinColumn(name = "genre_id", nullable = false)
	@ManyToOne
	private Genre genre;
	
	
	@JoinColumn(name = "console_id", nullable = false)
	@ManyToOne
	private Console console;
	
	@JoinColumn(name = "brand_id", nullable = false)
	@ManyToOne
	private Brand brand;

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

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}
	
	public Console getConsole() {
		return console;
	}

	public void setConsole(Console console) {
		this.console = console;
	}

	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
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

	public void setPriceSale(float price_sale) {
		this.priceSale = price_sale;
	}
}
