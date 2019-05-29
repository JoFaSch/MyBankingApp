package com.itf.schulung.springboot.fullstack.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.itf.schulung.springboot.fullstack.model.Customer;
import com.itf.schulung.springboot.fullstack.repositorys.CustomerRepository;

@RestController
public class MyRestController {
	
	@Autowired
	private CustomerRepository customerRepo;

	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@GetMapping(value = "/hello")
	public String helloTempo() {
		return "Hello Tempo Team!";
	}
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@GetMapping(value = "/hello/{name}")
	public String helloWithName(@PathVariable String name ) {
		return "Hello " + name + "!";
	}
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@GetMapping(value = "/hello/{name}/{title}")
	public String helloWithName(@PathVariable String name, @PathVariable String title) {
		return "Hello " + title + " " + name + "!";
	}
	
	// Retrieve one customer and persist it to the database!
	// use json request 
	// {
    //	"id": 1,
    //	"lastname": "Duck",
    //	"age": 25
	// }
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@PostMapping(value = "/postCustomer", consumes = "application/json")
	public ResponseEntity<?> postCustomer(@RequestBody Customer receivedCustomer) {
		customerRepo.save(receivedCustomer);
		return new ResponseEntity<>(receivedCustomer, HttpStatus.OK);
	}
	
	// Retrieve MULTIPLE customers and persist them to the database
	// Use the following json:
	// [{"id": 2, "lastname": "McFly", "age": 25 }, {"id": 3, "lastname": "Dr Jones", "age":50}]
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@PostMapping(value = "/postCustomers", consumes = "application/json")
	public ResponseEntity<?> postCustomers(@RequestBody List<Customer> receivedCustomers) {
		customerRepo.saveAll(receivedCustomers);
		return new ResponseEntity<>(receivedCustomers, HttpStatus.OK);
	}
	
	// Get all Customers from the database and present them to the requester
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@GetMapping(value = "/getCustomers")
	public ResponseEntity<?> getAllCustomers() {
		List<Customer> allCustomers = customerRepo.findAll();
		return new ResponseEntity<>(allCustomers, HttpStatus.OK);
	}
	
	// Get a Customer by its ID and show it to the requester
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@GetMapping(value = "/getCustomers/{id}")
	public ResponseEntity<?> getCustomerById(@PathVariable Long id) {
		Optional<Customer> possiblyFoundCustomer = customerRepo.findById(id);
		// check if any customer with the provided path variable is present in the database
		if(!possiblyFoundCustomer.isPresent()) {
			// No customer was present, we therefore should tell the requester this
			return new ResponseEntity<>("No Customer found with ID: " + id, HttpStatus.BAD_REQUEST);
		}
		// we found a customer, therefore we return it
		return new ResponseEntity<>(possiblyFoundCustomer.get(), HttpStatus.OK);
	}
}
