package com.kirian.library.entity.services;

import java.util.List;

import com.kirian.library.entity.models.Author;

public interface IAuthorService {
public Author get (long id);
public List<Author> getAll();
public void post (Author author);
public void put (Author author, long id);
public void delete (long id);
};

