package com.matrix.rental.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.matrix.rental.exception.ResourceNotFoundException;
import com.matrix.rental.model.Credit;
import com.matrix.rental.repository.CreditRepository;

@Component
public class CreditBusiness {


	@Autowired
	private CreditRepository repository;

	public List<Credit> getCredits() {
		return repository.findAll();
	}

	public Credit getCreditById(Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Credit", "id", id));
	}

	public Credit saveCredir(Credit credit) {
		return repository.save(credit);
	}
	
	public Credit updateCredit(Integer id, Credit credit) {
		Credit creditUpdate = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Genre", "id", id));
		creditUpdate.setFullName(credit.getFullName());
		return repository.save(creditUpdate);
	}

	public void deleteCredit(Integer id) {
		Credit credit = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Credit", "id", id));
		repository.delete(credit);
	}
}
