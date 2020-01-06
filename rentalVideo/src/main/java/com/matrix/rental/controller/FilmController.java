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

import com.matrix.rental.business.FilmBusiness;
import com.matrix.rental.model.Film;
import com.matrix.rental.model.dto.FilmDTO;

@RestController
@RequestMapping("/films")
public class FilmController {

	@Autowired
	private FilmBusiness business;

	@GetMapping
	public ResponseEntity<List<Film>> getFilms() {
		return ResponseEntity.ok(business.getFilms());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Film> getFilmById(@PathVariable(value = "id") Integer id) {
		return ResponseEntity.ok(business.getFilmById(id));
	}

	@PostMapping
	public ResponseEntity<Film> saveFilm(@Valid @RequestBody FilmDTO filmDto) {
		return ResponseEntity.ok(business.saveFilm(filmDto));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Film> updateFilm(@PathVariable(value = "id") Integer id,
			@Valid @RequestBody FilmDTO filmDto) {
		return ResponseEntity.ok(business.updateFilm(id, filmDto));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteFilm(@PathVariable(value = "id") Integer id) {
		business.deleteFilm(id);
		return ResponseEntity.ok().build();
	}

}
