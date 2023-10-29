package com.kirian.library.entity.services;

import java.util.List;

import com.kirian.library.entity.models.Book;
import com.kirian.library.entity.models.Loan;

public interface ILoanService {
	public Loan get (long id);
	public List<Loan> getAll();
	public void post(Loan loan);
	public void put(Loan loan, long id);
	public void delete(long id);
}
