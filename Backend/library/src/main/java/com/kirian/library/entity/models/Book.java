package com.kirian.library.entity.models;

import java.io.Serializable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name= "books")
public class Book implements Serializable{
	private static final long  serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String title;
	private String genre;
	private String publicationYear;

	@ManyToOne
	private Author author;
	

	public Book(long id, String title, String genre, String publicationYear) {
		super();
		this.id = id;

		this.title = title;
		this.genre = genre;
		this.publicationYear = publicationYear;
	}


	public Author getAuthor() {
		return author;
	}





	public void setAuthor(Author author) {
		this.author = author;
	}





	public long getId() {
		return id;
	}





	public void setId(long id) {
		this.id = id;
	}







	public String getTitle() {
		return title;
	}





	public void setTitle(String title) {
		this.title = title;
	}





	public String getGenre() {
		return genre;
	}





	public void setGenre(String genre) {
		this.genre = genre;
	}





	public String getPublicationYear() {
		return publicationYear;
	}





	public void setPublicationYear(String publicationYear) {
		this.publicationYear = publicationYear;
	}





	public Book() {

	}
}
