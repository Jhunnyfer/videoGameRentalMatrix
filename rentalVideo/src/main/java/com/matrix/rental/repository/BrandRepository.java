package com.matrix.rental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.matrix.rental.model.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Integer>{

}
