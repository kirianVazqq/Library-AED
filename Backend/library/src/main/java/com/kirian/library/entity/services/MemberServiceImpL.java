package com.kirian.library.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kirian.library.entity.dao.IBookDao;
import com.kirian.library.entity.dao.IMemberDao;
import com.kirian.library.entity.models.Book;
import com.kirian.library.entity.models.Member;

@Service
public class MemberServiceImpL implements IMemberService {
	@Autowired
	private IMemberDao memberDao;
	
	@Override
	public Member get(long id) {
		return memberDao.findById(id).get();
	};
	
	@Override
	public List<Member>getAll () {
		return (List<Member>) memberDao.findAll();
	};
	@Override
	public void post (Member member) {
		memberDao.save(member);
	};
	@Override
	public void put (Member member, long id) {
		memberDao.findById(id).ifPresent((x)->{
			member.setId(id);
			memberDao.save(member);
		});
	};
	@Override
	public void delete (long id) {
		memberDao.deleteById(id);
	};
}

