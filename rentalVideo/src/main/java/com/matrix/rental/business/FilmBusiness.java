package com.matrix.rental.business;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.matrix.rental.exception.ResourceNotFoundException;
import com.matrix.rental.model.Film;
import com.matrix.rental.model.Genre;
import com.matrix.rental.model.dto.FilmDTO;
import com.matrix.rental.repository.FilmRepository;

@Component
public class FilmBusiness {

	@Autowired
	private FilmRepository repository;

	@Autowired
	private GenreBusiness genreBusiness;

	@Autowired
	private ModelMapper modelMapper;

	public List<Film> getFilms() {
		return repository.findAll();
	}

	public Film getFilmById(Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Film", "id", id));
	}

	public Film saveFilm(FilmDTO filmDto) {
		

		Film film = modelMapper.map(filmDto, Film.class);
		//film.setId(film.getId());
		
		film.setDescription(film.getDescription());
		film.setTittle(film.getTittle());
		film.setStatus(film.getStatus());
		film.setPrice(film.getPrice());
		film.setMinAge(film.getMinAge());
		film.setYear(film.getYear());
		
		Genre genre = genreBusiness.getGenreById(filmDto.getGenreId());
		film.setGenre(genre);
		
	
		return repository.save(film);
	}

	public Film updateFilm(Integer id, FilmDTO filmDto) {
		Film filmUpdate = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Film", "id", id));

		Genre genre = genreBusiness.getGenreById(filmDto.getGenreId());

		filmUpdate.setGenre(genre);
		filmUpdate.setTittle(filmDto.getTittle());
		filmUpdate.setDescription(filmDto.getDescription());

		return repository.save(filmUpdate);
	}

	public void deleteFilm(Integer id) {
		Film film = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Film", "id", id));
		repository.delete(film);
	}

}
