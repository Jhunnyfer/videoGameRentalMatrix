package com.matrix.rental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.matrix.rental.model.Console;

@Repository
public interface ConsoleRepository extends JpaRepository<Console, Integer>{
	
}