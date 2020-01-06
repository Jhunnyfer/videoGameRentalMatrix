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

import com.matrix.rental.business.RolBusiness;
import com.matrix.rental.model.Rol;

@RestController
@RequestMapping("/roles")
public class RolController {

	@Autowired
	private RolBusiness business;

	@GetMapping
	public ResponseEntity<List<Rol>> getRoles() {
		return ResponseEntity.ok(business.getRoles());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Rol> getRolById(@PathVariable(value = "id") Integer id) {
		return ResponseEntity.ok(business.getRolById(id));
	}

	@PostMapping
	public ResponseEntity<Rol> saveRol(@Valid @RequestBody Rol rol) {
		return ResponseEntity.ok(business.saveRol(rol));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Rol> updateRol(@PathVariable(value = "id") Integer id, @Valid @RequestBody Rol rol) {
		return ResponseEntity.ok(business.updateRol(id, rol));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteRol(@PathVariable(value = "id") Integer id) {
		business.deleteRol(id);
		return ResponseEntity.ok().build();
	}

}
