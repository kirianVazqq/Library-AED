package com.kirian.library.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.kirian.library.entity.models.Book;


public interface IBookDao extends CrudRepository<Book, Long>{

}
