package com.kirian.library.entity.services;

import java.util.List;

import com.kirian.library.entity.models.Book;
import com.kirian.library.entity.models.Member;

public interface IMemberService {
	public Member get (long id);
	public List<Member> getAll();
	public void post(Member member);
	public void put(Member member, long id);
	public void delete(long id);
}
