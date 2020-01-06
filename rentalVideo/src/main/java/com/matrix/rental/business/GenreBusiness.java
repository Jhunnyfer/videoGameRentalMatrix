package com.matrix.rental.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.matrix.rental.exception.ResourceNotFoundException;
import com.matrix.rental.model.Genre;
import com.matrix.rental.repository.GenreRepository;

@Component
public class GenreBusiness {

	@Autowired
	private GenreRepository repository;

	public List<Genre> getGenres() {
		return repository.findAll();
	}

	public Genre getGenreById(Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Genre", "id", id));
	}

	public Genre saveGenre(Genre genre) {
		return repository.save(genre);
	}

	public Genre updateGenre(Integer id, Genre genre) {
		Genre genreUpdate = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Genre", "id", id));
		genreUpdate.setName(genre.getName());
		return repository.save(genreUpdate);
	}

	public void deleteGenre(Integer id) {
		Genre genre = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Genre", "id", id));
		repository.delete(genre);
	}

}
