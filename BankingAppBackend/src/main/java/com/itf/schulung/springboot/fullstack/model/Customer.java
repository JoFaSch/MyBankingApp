package com.itf.schulung.springboot.fullstack.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.github.javafaker.Faker;

@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String firstName;
	private String lastName;
	private Integer age;
	private Date date;
	
	private String password;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Address adress;

	@OneToMany(cascade = CascadeType.ALL)
	private List<Account> accountList;
	
	
	public Customer() {
		Faker faker = new Faker();
		
		this.firstName = faker.name().firstName();
		this.lastName = faker.name().lastName();
		this.age = faker.number().numberBetween(18, 115);
		this.adress = new Address();
		this.accountList = new ArrayList<Account>();
		this.accountList.add(new Account());
		this.password= faker.internet().password(8, 16, true);	
		this.date= new Date();
	}
	
	

	public Customer(String firstName, String lastName, Integer age, Address adress, List<Account> accountList) {
		Faker faker = new Faker();
		
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.adress = adress;
		this.accountList = new ArrayList<Account>();
		this.accountList.add(new Account());
		this.password= faker.internet().password(8, 16, true);
		this.date= new Date();
	}










	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public List<Account> getAccountList() {
		return accountList;
	}

	public void setAccountList(List<Account> accountList) {
		this.accountList = accountList;
	}

	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	
	
	public Address getAdress() {
		return adress;
	}

	public void setAdress(Address adress) {
		this.adress = adress;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}
	
}
