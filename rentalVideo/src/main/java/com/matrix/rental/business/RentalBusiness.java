package com.matrix.rental.business;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.matrix.rental.exception.ResourceNotFoundException;
import com.matrix.rental.model.Rental;
import com.matrix.rental.repository.RentalRepository;


@Component
public class RentalBusiness {

	@Autowired
	private RentalRepository repository;

	public List<Rental> getRentals() {
		return repository.findAll();
	}

	public Rental getRentalById(Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rental", "id", id));
	}

	public Rental saveRental(Rental rental) {
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
