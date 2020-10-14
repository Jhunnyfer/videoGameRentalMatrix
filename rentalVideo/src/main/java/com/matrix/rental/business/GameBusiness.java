package com.matrix.rental.business;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.matrix.rental.exception.ResourceNotFoundException;
import com.matrix.rental.model.Brand;
import com.matrix.rental.model.Console;
import com.matrix.rental.model.Game;
import com.matrix.rental.model.Genre;
import com.matrix.rental.model.dto.GameDTO;
import com.matrix.rental.repository.GameRepository;

@Component
public class GameBusiness {

	@Autowired
	private GameRepository repository;

	@Autowired
	private GenreBusiness genreBusiness;
	
	@Autowired
	private BrandBusiness brandBusiness;
	
	@Autowired
	private ConsoleBusiness consoleBusiness;

	@Autowired
	private ModelMapper modelMapper;

	public List<Game> getGames() {
		return repository.findAll();
	}

	public Game getGameById(Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Game", "id", id));
	}

	public Game saveGame(GameDTO gameDto) {
		
		Game game = modelMapper.map(gameDto, Game.class);		
		game.setDescription(game.getDescription());
		game.setTittle(game.getTittle());
		game.setStatus(game.getStatus());
		game.setPriceRental(game.getPriceRental());
		game.setPriceSale(game.getPriceSale());
		game.setMinAge(game.getMinAge());
		game.setYear(game.getYear());
		Genre genre = genreBusiness.getGenreById(gameDto.getGenreId());
		game.setGenre(genre);
		
		Brand brand = brandBusiness.getBrandById(gameDto.getBrandId());
		game.setBrand(brand);
				
		Console console = consoleBusiness.getConsoleById(gameDto.getBrandId());
		game.setConsole(console);
	
		return repository.save(game);
	}

	public Game updateGame(Integer id, GameDTO gameDto) {
		Game gameUpdate = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Game", "id", id));

		//Game game = modelMapper.map(gameDto, Game.class);		
		gameUpdate.setDescription(gameDto.getDescription());
		gameUpdate.setTittle(gameDto.getTittle());
		gameUpdate.setStatus(gameDto.getStatus());
		gameUpdate.setPriceRental(gameDto.getPriceRental());
		gameUpdate.setPriceSale(gameDto.getPriceSale());
		gameUpdate.setMinAge(gameDto.getMinAge());
		gameUpdate.setYear(gameDto.getYear());
		
		Genre genre = genreBusiness.getGenreById(gameDto.getGenreId());
		gameUpdate.setGenre(genre);
		
		Brand brand = brandBusiness.getBrandById(gameDto.getBrandId());
		gameUpdate.setBrand(brand);
				
		Console console = consoleBusiness.getConsoleById(gameDto.getBrandId());
		gameUpdate.setConsole(console);
		
		return repository.save(gameUpdate);
	}

	public void deleteGame(Integer id) {
		Game game = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Game", "id", id));
		repository.delete(game);
	}

}
