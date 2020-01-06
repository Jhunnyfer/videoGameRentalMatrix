package com.matrix.rental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matrix.rental.model.Rental;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Integer>{

	
}
