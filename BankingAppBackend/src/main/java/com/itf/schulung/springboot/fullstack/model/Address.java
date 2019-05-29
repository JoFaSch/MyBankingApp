package com.itf.schulung.springboot.fullstack.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.github.javafaker.Faker;

@Entity
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String zip;
	private String street;
	private int houseNr;
	private String city;

	public Address() {
		Faker faker = new Faker();
		this.zip = faker.address().zipCode();
		this.street = faker.address().streetName();
		this.houseNr = faker.number().numberBetween(1, 107);
		this.city = faker.address().cityName();
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public int getHouseNr() {
		return houseNr;
	}

	public void setHouseNr(int houseNr) {
		this.houseNr = houseNr;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Adress [id=" + id + ", zip=" + zip + ", Street=" + street + ", houseNr=" + houseNr + "]";
	}

}
