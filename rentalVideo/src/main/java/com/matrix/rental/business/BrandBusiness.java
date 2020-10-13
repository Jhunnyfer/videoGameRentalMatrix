package com.matrix.rental.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.matrix.rental.exception.ResourceNotFoundException;
import com.matrix.rental.model.Brand;
import com.matrix.rental.repository.BrandRepository;

@Component
public class BrandBusiness {
		
	@Autowired
	private BrandRepository repository;

	public List<Brand> getBrands() {
		return repository.findAll();
	}

	public Brand getBrandById(Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Brand", "id", id));
	}

	public Brand saveBrand(Brand brand) {
		return repository.save(brand);
	}

	public Brand updateBrand(Integer id, Brand brand) {
		Brand drandUpdate = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Brand", "id", id));
		drandUpdate.setBrand(brand.getBrand());
		return repository.save(drandUpdate);
	}

	public void deleteBrand(Integer id) {
		Brand brand = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Brand", "id", id));
		repository.delete(brand);
	}
	
}
