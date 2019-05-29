package com.itf.schulung.springboot.fullstack.repositorys;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.itf.schulung.springboot.fullstack.model.Account;
import com.itf.schulung.springboot.fullstack.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
	
	List<Customer> findAll();
	Optional<Customer> findById(Long id);
	Optional<Customer> findByFirstName(String firstName);
	List<Customer> findBylastName(String lastName);
	
	List<Customer> findBylastNameLike(String lastName);
	
	
	Customer findByAccountListContaining(Optional<Account> account);
}
