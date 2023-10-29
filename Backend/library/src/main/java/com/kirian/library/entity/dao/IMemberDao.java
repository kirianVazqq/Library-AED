package com.kirian.library.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.kirian.library.entity.models.Book;
import com.kirian.library.entity.models.Member;

public interface IMemberDao extends CrudRepository<Member, Long> {

}
