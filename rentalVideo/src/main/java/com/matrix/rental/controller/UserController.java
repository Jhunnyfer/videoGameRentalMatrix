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
import com.matrix.rental.business.UserBusiness;
import com.matrix.rental.model.User;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserBusiness business;

	@GetMapping
	public ResponseEntity<List<User>> getUsers() {
		return ResponseEntity.ok(business.getUsers());
	}

	@GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable(value = "id") Integer id) {
		return ResponseEntity.ok(business.getUserById(id));
	}

	@PostMapping
	public ResponseEntity<User> saveGame(@Valid @RequestBody User user) {
		return ResponseEntity.ok(business.saveUser(user));
	}

	@PutMapping("/{id}")
	public ResponseEntity<User> updateGame(@PathVariable(value = "id") Integer id,
			@Valid @RequestBody User user) {
		return ResponseEntity.ok(business.updateUser(id, user));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteGame(@PathVariable(value = "id") Integer id) {
		business.deleteUser(id);
		return ResponseEntity.ok().build();
	}

}
