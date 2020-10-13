package com.matrix.rental.business;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.matrix.rental.exception.ResourceNotFoundException;
import com.matrix.rental.model.Game;
import com.matrix.rental.model.Rental;
import com.matrix.rental.model.User;
import com.matrix.rental.model.dto.RentalDTO;
import com.matrix.rental.repository.RentalRepository;


@Component
public class RentalBusiness {

	@Autowired
	private RentalRepository repository;
	
	@Autowired
	private GameBusiness gameBusines;
	
	@Autowired
	private UserBusiness userBusiness; 
	
	@Autowired
	private ModelMapper modelMapper;


	public List<Rental> getRentals() {
		return repository.findAll();
	}

	public Rental getRentalById(Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rental", "id", id));
	}

	public Rental saveRental(RentalDTO rentalDTO) {
		
		Rental rental = modelMapper.map(rentalDTO, Rental.class);
		User user = userBusiness.getUserById(rentalDTO.getUserId());
		Game game = gameBusines.getGameById(rentalDTO.getGameId());
		rental.setGame(game);
		rental.setUser(user);
		return repository.save(rental);
	}

	public Rental updateRental(Integer id, Rental rental) {
		Rental rentalUpdate = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rental", "id", id));
		rentalUpdate.setReturnlDate(rental.getReturnlDate());
		return repository.save(rentalUpdate);
	}

	public void deleteRental(Integer id) {
		Rental rental = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rental", "id", id));
		repository.delete(rental);
	}
}
