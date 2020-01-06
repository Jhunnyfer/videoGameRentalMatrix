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

import com.matrix.rental.business.GenreBusiness;
import com.matrix.rental.model.Genre;

@RestController
@RequestMapping("/genres")
public class GenreController {

	@Autowired
	private GenreBusiness business;

	@GetMapping
	public ResponseEntity<List<Genre>> getGenres() {
		return ResponseEntity.ok(business.getGenres());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Genre> getGenreById(@PathVariable(value = "id") Integer id) {
		return ResponseEntity.ok(business.getGenreById(id));
	}

	@PostMapping
	public ResponseEntity<Genre> saveFilm(@Valid @RequestBody Genre genre) {
		return ResponseEntity.ok(business.saveGenre(genre));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Genre> updateGenre(@PathVariable(value = "id") Integer id, @Valid @RequestBody Genre genre) {
		return ResponseEntity.ok(business.updateGenre(id, genre));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteGenre(@PathVariable(value = "id") Integer id) {
		business.deleteGenre(id);
		return ResponseEntity.ok().build();
	}

}
