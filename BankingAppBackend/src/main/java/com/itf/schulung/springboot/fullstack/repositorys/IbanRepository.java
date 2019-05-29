package com.itf.schulung.springboot.fullstack.repositorys;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.itf.schulung.springboot.fullstack.model.Account;
import com.itf.schulung.springboot.fullstack.model.Iban;

@Repository
public interface IbanRepository extends CrudRepository<Iban, Long> {

	
	List<Iban> findAll();
	Optional<Iban> findById(Long id);
	Optional<Iban> findByValue(String iban);
	
}
