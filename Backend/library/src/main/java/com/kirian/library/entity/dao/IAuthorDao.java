package com.kirian.library.entity.dao;




import org.springframework.data.repository.CrudRepository;

import com.kirian.library.entity.models.Author;

public interface IAuthorDao extends CrudRepository<Author, Long>{

}
