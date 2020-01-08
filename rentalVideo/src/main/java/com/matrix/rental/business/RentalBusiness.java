package com.matrix.rental.business;

import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.matrix.rental.exception.ResourceNotFoundException;
import com.matrix.rental.model.Film;
import com.matrix.rental.model.Genre;
import com.matrix.rental.model.Rental;
import com.matrix.rental.model.dto.RentalDTO;
import com.matrix.rental.repository.RentalRepository;


@Component
public class RentalBusiness {

	@Autowired
	private RentalRepository repository;
	
	@Autowired
	private FilmBusiness filmBusines;
	
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
		
		rental.setAddress(rental.getAddress());
		rental.setCodeUser(rental.getCodeUser());
		rental.setFullName(rental.getFullName());
		rental.setTelefone(rental.getTelefone());
		rental.setTypeIdentification(rental.getTypeIdentification());
		rental.setIdentification(rental.getIdentification());
		
		Film film = filmBusines.getFilmById(rentalDTO.getFilmId());
		rental.setFilm(film);
		
		return repository.save(rental);
	}

	public Rental updateRental(Integer id, Rental rental) {
		Rental rentalUpdate = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rental", "id", id));
		rentalUpdate.setFullName(rental.getFullName());
		return repository.save(rentalUpdate);
	}

	public void deleteRental(Integer id) {
		Rental rental = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rental", "id", id));
		repository.delete(rental);
	}
}
