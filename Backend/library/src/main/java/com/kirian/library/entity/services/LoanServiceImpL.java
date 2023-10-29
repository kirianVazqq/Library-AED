package com.kirian.library.entity.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.kirian.library.entity.dao.ILoanDao;
import com.kirian.library.entity.models.Loan;


@Service
public class LoanServiceImpL implements ILoanService{
	@Autowired
	private ILoanDao loanDao;
	
	@Override
	public Loan get(long id) {
		return loanDao.findById(id).get();
	};
	
	@Override
	public List<Loan>getAll () {
		return (List<Loan>) loanDao.findAll();
	};
	@Override
	public void post (Loan loan) {
		loanDao.save(loan);
	};
	@Override
	public void put (Loan loan, long id) {
		loanDao.findById(id).ifPresent((x)->{
			loan.setId(id);
			loanDao.save(loan);
		});
	};
	@Override
	public void delete (long id) {
		loanDao.deleteById(id);
	};
}
