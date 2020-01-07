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

import com.matrix.rental.business.CreditBusiness;
import com.matrix.rental.model.Credit;
import com.matrix.rental.model.dto.FilmDTO;

@RestController
@RequestMapping("/credits")
public class CreditController {
	@Autowired
	private CreditBusiness business;

	@GetMapping
	public ResponseEntity<List<Credit>> getCredits() {
		return ResponseEntity.ok(business.getCredits());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Credit> getCreditById(@PathVariable(value = "id") Integer id) {
		return ResponseEntity.ok(business.getCreditById(id));
	}

	@PostMapping
	public ResponseEntity<Credit> saveCredit(@Valid @RequestBody Credit credit) {
		return ResponseEntity.ok(business.saveCredir(credit));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Credit> updateCredit(@PathVariable(value = "id") Integer id,
			@Valid @RequestBody Credit credit) {
		return ResponseEntity.ok(business.updateCredit(id, credit));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteCredit(@PathVariable(value = "id") Integer id) {
		business.deleteCredit(id);
		return ResponseEntity.ok().build();
	}

}
