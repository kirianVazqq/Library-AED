package com.kirian.library.entity.services;

import java.util.List;

import com.kirian.library.entity.models.Book;

public interface IBookService {
	public Book get (long id);
	public List<Book> getAll();
	public void post(Book book);
	public void put(Book book, long id);
	public void delete(long id);
	public void addBookWithAuthor(Book book, long authorId);
	public void editBookWithAuthor(Book book, long id, long authorId);

}
