package com.matrix.rental.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrix.rental.business.RentalBusiness;
import com.matrix.rental.model.Rental;
import com.matrix.rental.model.dto.RentalDTO;

@RestController
@RequestMapping("/rentals")
public class RentalController {
	
	@Autowired
	private RentalBusiness business;

	@GetMapping
	public ResponseEntity<List<Rental>> getRentals() {
		return ResponseEntity.ok(business.getRentals());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Rental> getRentalById(@PathVariable(value = "id") Integer id) {
		return ResponseEntity.ok(business.getRentalById(id));
	}

	@PostMapping
	public ResponseEntity<Rental> saveRental(@Valid @RequestBody RentalDTO rentalDTO) {
		return ResponseEntity.ok(business.saveRental(rentalDTO));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Rental> updateRental(@PathVariable(value = "id") Integer id,
			@Valid @RequestBody Rental rental) {
		return ResponseEntity.ok(business.updateRental(id, rental));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteRental(@PathVariable(value = "id") Integer id) {
		business.deleteRental(id);
		return ResponseEntity.ok().build();
	}
}
