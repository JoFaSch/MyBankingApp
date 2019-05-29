package com.itf.schulung.springboot.fullstack.repositorys;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.itf.schulung.springboot.fullstack.model.Address;

@Repository
public interface AdressRepository extends CrudRepository<Address, Long> {

	
	List<Address> findAll();
	Optional<Address> findById(Long id);

}
