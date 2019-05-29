package com.itf.schulung.springboot.fullstack.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.itf.schulung.springboot.fullstack.model.Account;
import com.itf.schulung.springboot.fullstack.model.Customer;
import com.itf.schulung.springboot.fullstack.model.Iban;
import com.itf.schulung.springboot.fullstack.model.Transfer;
import com.itf.schulung.springboot.fullstack.repositorys.AccountRepository;
import com.itf.schulung.springboot.fullstack.repositorys.AdressRepository;
import com.itf.schulung.springboot.fullstack.repositorys.CustomerRepository;
import com.itf.schulung.springboot.fullstack.repositorys.IbanRepository;

import requestobjects.UpdateAccountRQ;

@RestController
public class MyKontoController {

	@Autowired
	AccountRepository accountRepo;

	@Autowired
	IbanRepository ibanRepo;

	@Autowired
	CustomerRepository customerRepo;

	@Autowired
	AdressRepository adressRepo;

	///////////////// ACCOUNT/////////////////////

	// Get all Accounts
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(value = "/Accounts")
	public ResponseEntity<?> getAllAccounts() {
		List<Account> allAccounts = accountRepo.findAll();
		return new ResponseEntity<>(allAccounts, HttpStatus.OK);
	}

	// Post Account
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping(value = "/Account", consumes = "application/json")
	public ResponseEntity<Account> postAccount(@RequestBody Account receivedAccount) {
		accountRepo.save(receivedAccount);
		return new ResponseEntity<Account>(receivedAccount, HttpStatus.CREATED);
	}

	////////////////// CUSTOMER/////////////////////

	// Post Customer
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping(value = "/customer", consumes = "application/json")
	public ResponseEntity<Customer> postCustomer(@RequestBody Customer receivedCustomer) {
		customerRepo.save(receivedCustomer);
		return new ResponseEntity<Customer>(receivedCustomer, HttpStatus.CREATED);
	}

	// Put Customer -> last Login
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PutMapping(value = "/customer", consumes = "application/json")
	public ResponseEntity<Customer> putCustomer(@RequestBody Customer receivedCustomer) {
		receivedCustomer.setDate(new Date());
		customerRepo.save(receivedCustomer);
		return new ResponseEntity<Customer>(receivedCustomer, HttpStatus.CREATED);
	}

	// Delete Customer
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@DeleteMapping(value = "/customer/{id}")
	public ResponseEntity<Customer> deleteCustomer(@PathVariable Long id) {
		Customer toBeDeleted = customerRepo.findById(id).get();
		customerRepo.delete(toBeDeleted);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	// Get all Customers
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(value = "/customers")
	public ResponseEntity<List<Customer>> getAllCustomers() {
		List<Customer> allCustomers = customerRepo.findAll();
		return new ResponseEntity<List<Customer>>(allCustomers, HttpStatus.OK);
	}

	// Transfer money
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PutMapping(value = "/update")
	public ResponseEntity<List<Account>> updateAccount(@RequestBody UpdateAccountRQ request) {
		Optional<Iban> ibanSender = ibanRepo.findByValue(request.iban1);
		Optional<Iban> ibanReceiver = ibanRepo.findByValue(request.iban2);

		Optional<Account> accountSender = accountRepo.findByIban(ibanSender.get());
		Optional<Account> accountReceiver = accountRepo.findByIban(ibanReceiver.get());

		Customer sender = customerRepo.findByAccountListContaining(accountSender);
		Customer receiver = customerRepo.findByAccountListContaining(accountReceiver);

		accountSender.get().setBalance(accountSender.get().getBalance() - Math.abs(request.amount));
		accountReceiver.get().setBalance(accountReceiver.get().getBalance() + Math.abs(request.amount));

		Transfer t1 = new Transfer();
		t1.setAmount(request.amount);
		t1.setSenderIban(request.iban1);
		t1.setSenderFirstName(sender.getFirstName());
		t1.setSenderLastName(sender.getLastName());
		t1.setReceiverIban(request.iban2);
		t1.setReceiverFirstName(receiver.getFirstName());
		t1.setReceiverLastName(receiver.getLastName());
		t1.setReference(request.reference);

		accountSender.get().getTransferList().add(t1);
		accountReceiver.get().getTransferList().add(t1);
		accountRepo.save(accountSender.get());
		accountRepo.save(accountReceiver.get());

		return new ResponseEntity<List<Account>>(HttpStatus.OK);
	}

	// Get Customer by Id
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(value = "/customer/{id}")
	public ResponseEntity<Customer> getCustomer(@PathVariable Long id) {
		Customer customer = customerRepo.findById(id).get();
		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}

	// Get Customer by name
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(value = "/customers/{lastName}")
	public ResponseEntity<List<Customer>> getCustomerByLastName(@PathVariable String lastName) {
		List<Customer> customer = customerRepo.findBylastNameLike(lastName);
		return new ResponseEntity<List<Customer>>(customer, HttpStatus.OK);
	}

	// Add new Account to a customers AccountList
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PutMapping(value = "/addAccount/{customerId}/{name}")
	public ResponseEntity<Customer> addAccount(@PathVariable Long customerId, @PathVariable String name) {
		Customer customer = customerRepo.findById(customerId).get();
		customer.getAccountList().add(new Account(name));
		customerRepo.save(customer);
		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}

	// Get Customer by Iban
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(value = "/byIban/{ibanStringDerUebergebenWird}")
	public ResponseEntity<Account> getAccount(@PathVariable String ibanStringDerUebergebenWird) {
		Iban iban = ibanRepo.findByValue(ibanStringDerUebergebenWird).get();
		Account account = accountRepo.findByIban(iban).get();
		return new ResponseEntity<Account>(account, HttpStatus.OK);
	}

}
