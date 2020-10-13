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

import com.matrix.rental.business.ConsoleBusiness;
import com.matrix.rental.model.Console;

@RestController
@RequestMapping("/consoles")
public class ConsoleController {
	@Autowired
	private ConsoleBusiness business;

	@GetMapping
	public ResponseEntity<List<Console>> getConsoles() {
		return ResponseEntity.ok(business.getConsoles());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Console> getConsoleById(@PathVariable(value = "id") Integer id) {
		return ResponseEntity.ok(business.getConsoleById(id));
	}

	@PostMapping
	public ResponseEntity<Console> saveConsole(@Valid @RequestBody Console console) {
		return ResponseEntity.ok(business.saveConsole(console));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Console> updateConsole(@PathVariable(value = "id") Integer id, @Valid @RequestBody Console console) {
		return ResponseEntity.ok(business.updateConsole(id, console));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteConsole(@PathVariable(value = "id") Integer id) {
		business.deleteConsole(id);
		return ResponseEntity.ok().build();
	}
}
