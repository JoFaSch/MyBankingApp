package com.itf.schulung.springboot.fullstack.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.github.javafaker.Faker;

@Entity
public class Iban {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String value;
	

	
	
	
	public Iban() {
		Faker faker = new Faker();
		this.value = faker.finance().iban("DE");
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "Iban [id=" + id + ", value=" + value + "]";
	}
	
	
	
	
}
