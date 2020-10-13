package com.matrix.rental.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.matrix.rental.exception.ResourceNotFoundException;
import com.matrix.rental.model.Console;
import com.matrix.rental.repository.ConsoleRepository;

@Component
public class ConsoleBusiness {
		
	@Autowired
	private ConsoleRepository repository;

	public List<Console> getConsoles() {
		return repository.findAll();
	}

	public Console getConsoleById(Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Console", "id", id));
	}

	public Console saveConsole(Console console) {
		return repository.save(console);
	}

	public Console updateConsole(Integer id, Console console) {
		Console consoleUpdate = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Console", "id", id));
		consoleUpdate.setConsole(console.getConsole());
		return repository.save(consoleUpdate);
	}

	public void deleteConsole(Integer id) {
		Console console = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Console", "id", id));
		repository.delete(console);
	}
}
