package com.matrix.rental.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrix.rental.business.BrandBusiness;
import com.matrix.rental.model.Brand;

@RestController
@RequestMapping("/brands")
public class BrandController {
	@Autowired
	private BrandBusiness business;

	@GetMapping
	public ResponseEntity<List<Brand>> getBrands() {
		return ResponseEntity.ok(business.getBrands());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Brand> getBrandById(@PathVariable(value = "id") Integer id) {
		return ResponseEntity.ok(business.getBrandById(id));
	}

	@PostMapping
	public ResponseEntity<Brand> saveBrand(@Valid @RequestBody Brand brand) {
		return ResponseEntity.ok(business.saveBrand(brand));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Brand> updateBrand(@PathVariable(value = "id") Integer id, @Valid @RequestBody Brand brand) {
		return ResponseEntity.ok(business.updateBrand(id, brand));
	}

	@GetMapping("/brand/{id}")
	public ResponseEntity<?> deleteBrand(@PathVariable(value = "id") Integer id) {
		business.deleteBrand(id);
		return ResponseEntity.ok().build();
	}
}
