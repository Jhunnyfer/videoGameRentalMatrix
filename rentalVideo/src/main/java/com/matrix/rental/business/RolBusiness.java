package com.matrix.rental.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.matrix.rental.exception.ResourceNotFoundException;
import com.matrix.rental.model.Rol;
import com.matrix.rental.repository.RolRepository;

@Component
public class RolBusiness {

	@Autowired
	private RolRepository repository;

	public List<Rol> getRoles() {
		return repository.findAll();
	}

	public Rol getRolById(Integer id) {
		return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rol", "id", id));
	}

	public Rol saveRol(Rol rol) {
		return repository.save(rol);
	}

	public Rol updateRol(Integer id, Rol rol) {
		Rol rolUpdate = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rol", "id", id));
		rolUpdate.setName(rol.getName());
		return repository.save(rolUpdate);
	}

	public void deleteRol(Integer id) {
		Rol rol = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rol", "id", id));
		repository.delete(rol);
	}

}
