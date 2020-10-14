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

import com.matrix.rental.business.GameBusiness;
import com.matrix.rental.model.Game;
import com.matrix.rental.model.dto.GameDTO;

@RestController
@RequestMapping("/games")
public class GameController {

	@Autowired
	private GameBusiness business;

	@GetMapping
	public ResponseEntity<List<Game>> getGames() {
		return ResponseEntity.ok(business.getGames());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Game> getGameById(@PathVariable(value = "id") Integer id) {
		return ResponseEntity.ok(business.getGameById(id));
	}

	@PostMapping
	public ResponseEntity<Game> saveGame(@Valid @RequestBody GameDTO gameDto) {
		return ResponseEntity.ok(business.saveGame(gameDto));
	}

	@PostMapping("/update/{id}")
	public ResponseEntity<Game> updateGame(@PathVariable(value = "id") Integer id,
			@Valid @RequestBody GameDTO gameDto) {
		return ResponseEntity.ok(business.updateGame(id, gameDto));
	}

	@DeleteMapping("/game/{id}")
	public ResponseEntity<?> deleteGame(@PathVariable(value = "id") Integer id) {
		business.deleteGame(id);
		return ResponseEntity.ok().build();
	}

}
