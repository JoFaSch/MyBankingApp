package com.itf.schulung.springboot.fullstack.model;

import java.util.ArrayList;
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
public class Account {
	
//	kontoStand und besitzer kommen aus dem Front-End, die id wird automatisch generiert
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private double balance;
	
	private String name;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Transfer> transferList;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Iban iban;
	
	public Account() {
		Faker faker = new Faker();
		this.balance = faker.number().numberBetween(-2000, 10000);
		this.iban = new Iban();
		this.transferList = new ArrayList<Transfer>();
		this.name = "checking account";
	}
	
	public Account(String name) {
		this.balance = 0;
		this.iban = new Iban();
		this.transferList = new ArrayList<Transfer>();
		this.name = name;
	}
	
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	@Override
	public String toString() {
		return "Account [id=" + id + ", balance=" + balance + ", iban=" + iban + "]";
	}
	public Iban getIban() {
		return iban;
	}
	public void setIban(Iban iban) {
		this.iban = iban;
	}
	public List<Transfer> getTransferList() {
		return transferList;
	}
	public void setTransferList(List<Transfer> transferList) {
		this.transferList = transferList;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	

}
