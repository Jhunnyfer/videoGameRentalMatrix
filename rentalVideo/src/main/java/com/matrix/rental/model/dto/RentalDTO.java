package com.matrix.rental.model.dto;

import java.io.Serializable;
import java.util.Date;

public class RentalDTO implements Serializable {
	

	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private Date rentalDate;
	private Date returnlDate;
	private Integer gameId;
	private Integer userId;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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
	public Integer getGameId() {
		return gameId;
	}
	public void setGameId(Integer gameId) {
		this.gameId = gameId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
}
