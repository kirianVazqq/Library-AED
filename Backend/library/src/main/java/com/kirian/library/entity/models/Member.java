package com.kirian.library.entity.models;
import java.io.Serializable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name= "members")
public class Member implements Serializable{

	private static final long  serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String email;
	private String registrationDate;

	@ManyToOne
	private Book books;
	 
	public Member(long id, String name, String email, String registrationDate) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.registrationDate = registrationDate;
	
	}



	public Book getBooks() {
		return books;
	}



	public void setBooks(Book books) {
		this.books = books;
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getRegistrationDate() {
		return registrationDate;
	}



	public void setRegistrationDate(String registrationDate) {
		this.registrationDate = registrationDate;
	}






	public Member() {


	}

	
	
}