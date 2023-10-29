package com.kirian.library.entity.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.kirian.library.entity.dao.IBookDao;
import com.kirian.library.entity.dao.IAuthorDao;
import com.kirian.library.entity.models.Author;
import com.kirian.library.entity.models.Book;

@Service
public class BookServiceImpL implements IBookService {

	@Autowired
	private IBookDao bookDao;
	
	@Autowired
	private IAuthorDao authorDao;

	@Override
	public void addBookWithAuthor(Book book, long authorId) {
	    Author author = authorDao.findById(authorId).orElse(null); 
	    if (author != null) {
	        book.setAuthor(author); 
	        bookDao.save(book); 
	    } 
	}
	
	@Override
	public void editBookWithAuthor(Book book,long id, long authorId) {
		bookDao.findById(id).ifPresent((x)->{
			book.setId(id);
			bookDao.save(book);
		});
	}
	@Override
	public Book get(long id) {
		return bookDao.findById(id).get();
	};
	
	@Override
	public List<Book>getAll () {
		return (List<Book>) bookDao.findAll();
	};
	
	@Override
	public void post (Book book) {
		bookDao.save(book);
	};
	
	@Override
	public void put(Book updatedBook, long id) {
	    bookDao.findById(id).ifPresent(existingBook -> {
	        if (updatedBook.getTitle() != null) {
	            existingBook.setTitle(updatedBook.getTitle());
	        }
	        if (updatedBook.getGenre() != null) {
	            existingBook.setGenre(updatedBook.getGenre());
	        }
	        if (updatedBook.getPublicationYear() != null) {
	            existingBook.setPublicationYear(updatedBook.getPublicationYear());
	        }

	        bookDao.save(existingBook);
	    });
	}
	@Override
	public void delete (long id) {
		bookDao.deleteById(id);
	};
}
