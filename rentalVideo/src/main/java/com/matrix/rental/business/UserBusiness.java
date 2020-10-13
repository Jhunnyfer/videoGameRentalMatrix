package com.matrix.rental.business;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.matrix.rental.exception.ResourceNotFoundException;
import com.matrix.rental.model.User;
import com.matrix.rental.repository.UserRepository;

@Component
public class UserBusiness {
		
	@Autowired
	private UserRepository repository;

	public List<User> getUsers() {
		return repository.findAll();
	}

	public User getUserById(Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Console", "id", id));
	}

	public User saveUser(User user) {
		return repository.save(user);
	}

	public User updateUser(Integer id, User user) {
		User userUpdate = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Console", "id", id));
		return repository.save(userUpdate);
	}

	public void deleteUser(Integer id) {
		User user = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Console", "id", id));
		repository.delete(user);
	}
}
